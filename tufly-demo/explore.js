// 1단계: 로그인 후 사이트 탐색. 링크(href)로만 이동하고 버튼은 누르지 않는다(데이터 변경 방지).
// 실행: TUFLY_ID=... TUFLY_PW=... node explore.js
const { chromium } = require('playwright');
const fs = require('fs');

const BASE = 'https://tufly.co.kr';
const MAX_PAGES = 60;
const TARGETS = {
  '1_home': ['퍼포먼스 예상 지수', '오늘의 셀프톡'],
  '2_izof': ['IZOF', '최우선 훈련 과제'],
  '3_selftalk': ['셀프톡 진단', '심리 스펙트럼'],
  '4_ai_chat': ['AI 상담', '멘탈 검사 결과'],
  '5_cue': ['과정단서', '나만의 단서'],
  '6_report': ['퍼포먼스 상세 리포트', '점수 추이', 'AI 정밀 분석'],
  '7_counselor': ['상담사 추천'],
  '8_lms': ['전문가 교육', '인증', 'LMS'],
};

async function closePopups(page) {
  const labels = ['닫기', '오늘 하루 보지 않기', '동의', '확인', 'Accept', 'Close', '×'];
  for (const t of labels) {
    const el = page.locator(`[role=dialog] >> text="${t}", .modal >> text="${t}", [class*=cookie] >> text="${t}"`).first();
    if (await el.isVisible().catch(() => false)) await el.click({ timeout: 2000 }).catch(() => {});
  }
}

async function login(page) {
  const id = process.env.TUFLY_ID, pw = process.env.TUFLY_PW;
  if (!id || !pw) throw new Error('TUFLY_ID / TUFLY_PW 환경변수가 없습니다');
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await closePopups(page);
  if (!(await page.locator('input[type=password]').count())) {
    const link = page.getByRole('link', { name: /로그인|login/i }).or(page.getByRole('button', { name: /로그인|login/i })).first();
    await link.click();
    await page.waitForSelector('input[type=password]', { timeout: 15000 });
  }
  const idInput = page.locator('input[type=email], input[name*=id i], input[name*=email i], input[type=text]').first();
  await idInput.fill(id);
  await page.locator('input[type=password]').first().fill(pw);
  await Promise.all([
    page.waitForLoadState('networkidle'),
    page.locator('button[type=submit], button:has-text("로그인")').first().click(),
  ]);
  await page.waitForTimeout(3000);
  if (await page.locator('input[type=password]').isVisible().catch(() => false)) throw new Error('로그인 실패로 보입니다');
}

(async () => {
  fs.mkdirSync('auth', { recursive: true });
  fs.mkdirSync('screens', { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ko-KR' });
  const page = await ctx.newPage();
  await login(page);
  await ctx.storageState({ path: 'auth/state.json' });
  console.log('로그인 성공, 세션 저장: auth/state.json');

  const seen = new Set(), queue = [page.url()], results = [];
  while (queue.length && results.length < MAX_PAGES) {
    const url = queue.shift().split('#')[0];
    if (seen.has(url)) continue;
    seen.add(url);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500);
      await closePopups(page);
    } catch (e) { console.log('skip', url, e.message); continue; }
    const text = await page.innerText('body').catch(() => '');
    const headings = await page.$$eval('h1,h2,h3', els => els.map(e => e.innerText.trim()).filter(Boolean).slice(0, 10));
    const navItems = await page.$$eval('nav a, nav button, header a, header button, [role=tab]', els =>
      [...new Set(els.map(e => e.innerText.trim()).filter(Boolean))].slice(0, 40));
    const matches = Object.entries(TARGETS).filter(([, kws]) => kws.some(k => text.includes(k))).map(([k]) => k);
    const shot = `screens/p${String(results.length).padStart(2, '0')}.png`;
    await page.screenshot({ path: shot, fullPage: true }).catch(() => {});
    results.push({ url, title: await page.title(), headings, navItems, matches, shot });
    console.log(url, matches.join(','));
    const links = await page.$$eval('a[href]', as => as.map(a => a.href));
    for (const l of links) {
      if (l.startsWith(BASE) && !/logout|signout|delete|pay|checkout/i.test(l) && !seen.has(l.split('#')[0])) queue.push(l);
    }
  }
  fs.writeFileSync('screens/index.json', JSON.stringify(results, null, 2));
  console.log(`\n${results.length}개 페이지 탐색 완료 → screens/index.json`);
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
