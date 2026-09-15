// 프로젝트 데이터 템플릿 검증기
// 실행: node scripts/lint-projects.mjs
import { projects } from "../src/data/projects/index.js";

// 표준 섹션 순서. 필수가 아닌 것은 생략 가능하지만, 나타나는 순서는 이 배열을 따라야 한다.
const SECTION_ORDER = [
  "개요",
  "문제 정의",
  "주요 기여",
  "주요 기능",
  "핵심 설계 포인트",
  "기술 아키텍처",
  "어려웠던 점 & 해결",
  "결과",
  "진행 상황",
  "추후 보완 과제",
  "기대 효과",
  "배운 점",
];
const REQUIRED_SECTIONS = ["개요", "기술 아키텍처", "배운 점"];
const OVERVIEW_ORDER = ["기간", "팀 구성", "역할", "규모", "분류"];
const REQUIRED_OVERVIEW = ["기간", "팀 구성", "역할", "분류"];
const KEY_ORDER = [
  "id", "title", "subtitle", "description", "longDescription", "tech",
  "thumbnail", "github", "demo", "appStore", "playStore", "youtube",
  "featured", "impact", "highlights", "period", "status", "gradient",
];
const REQUIRED_KEYS = [
  "id", "title", "subtitle", "description", "longDescription", "tech",
  "thumbnail", "github", "demo", "youtube", "period", "status", "gradient",
];
// developing = 개발 진행 중, live = 서비스 중, ended = 배포 중단·종료
const STATUS_VALUES = ["developing", "live", "ended"];

// "주요 기여 — 백엔드" 처럼 뒤에 붙은 한정어는 떼고 기본 섹션명만 본다.
const baseName = (h) => h.split(" — ")[0].trim();

let problems = 0;
const warn = (id, msg) => { problems++; console.log(`  [${id}] ${msg}`); };

for (const p of projects) {
  const lines = p.longDescription.split("\n");
  const headings = lines
    .filter((l) => l.startsWith("**") && l.endsWith("**"))
    .map((l) => l.slice(2, -2));

  // 1) 필수 섹션
  const bases = headings.map(baseName);
  for (const req of REQUIRED_SECTIONS)
    if (!bases.includes(req)) warn(p.id, `필수 섹션 누락: ${req}`);

  // 2) 섹션 순서 (표준 목록에 없는 프로젝트 고유 섹션은 건너뜀)
  const ranks = bases
    .map((b) => [b, SECTION_ORDER.indexOf(b)])
    .filter(([, i]) => i !== -1);
  for (let i = 1; i < ranks.length; i++)
    if (ranks[i][1] < ranks[i - 1][1])
      warn(p.id, `섹션 순서 어긋남: "${ranks[i - 1][0]}" 뒤에 "${ranks[i][0]}"`);

  // 3) 개요 필드
  const start = lines.indexOf("**개요**");
  if (start === -1) {
    warn(p.id, "개요 섹션 없음");
  } else {
    const fields = [];
    for (let i = start + 1; i < lines.length && lines[i].startsWith("- "); i++)
      fields.push(lines[i].slice(2).split(":")[0].trim());
    for (const req of REQUIRED_OVERVIEW)
      if (!fields.includes(req)) warn(p.id, `개요 필드 누락: ${req}`);
    const fRanks = fields.map((f) => OVERVIEW_ORDER.indexOf(f));
    for (let i = 1; i < fRanks.length; i++)
      if (fRanks[i] !== -1 && fRanks[i - 1] !== -1 && fRanks[i] < fRanks[i - 1])
        warn(p.id, `개요 필드 순서 어긋남: "${fields[i - 1]}" 뒤에 "${fields[i]}"`);
  }

  // 4) 기간 표기 (YYYY.MM ~ YYYY.MM 또는 ~ 진행 중, 괄호 보충은 허용)
  const periodLine = lines.find((l) => l.startsWith("- 기간:"));
  if (periodLine && !/^- 기간: \d{4}\.\d{2} ~ (\d{4}\.\d{2}|진행 중)( \(.+\))?$/.test(periodLine))
    warn(p.id, `기간 표기 형식 불일치: ${periodLine}`);

  // 5) 최상위 키
  const keys = Object.keys(p);
  for (const req of REQUIRED_KEYS)
    if (!keys.includes(req)) warn(p.id, `필수 키 누락: ${req}`);
  for (const k of keys)
    if (!KEY_ORDER.includes(k)) warn(p.id, `표준에 없는 키: ${k}`);
  const kRanks = keys.map((k) => KEY_ORDER.indexOf(k)).filter((i) => i !== -1);
  for (let i = 1; i < kRanks.length; i++)
    if (kRanks[i] < kRanks[i - 1])
      warn(p.id, `키 순서 어긋남: "${keys[i - 1]}" 뒤에 "${keys[i]}"`);

  // 6) 1인 프로젝트는 "주요 기여"를 쓰지 않는다 (전부 본인 몫이라 구분이 의미 없음)
  const soloLine = lines.find((l) => l.startsWith("- 팀 구성: 1인"));
  if (soloLine && bases.includes("주요 기여"))
    warn(p.id, "1인 프로젝트인데 '주요 기여' 섹션이 있음 (주요 기능 / 핵심 설계 포인트로 분산할 것)");

  // 7) status 값
  if (p.status && !STATUS_VALUES.includes(p.status))
    warn(p.id, `status 값이 표준에 없음: "${p.status}" (${STATUS_VALUES.join(" | ")})`);
  // 개발 중 프로젝트는 개요 기간이 "진행 중"으로 끝나야 목록 그룹과 설명이 어긋나지 않는다
  if (p.status === "developing" && !/~ 진행 중/.test(p.period))
    warn(p.id, `status가 developing인데 period가 "진행 중"이 아님: ${p.period}`);

  // 8) featured 프로젝트는 impact·highlights를 함께 가져야 카드가 온전히 렌더된다
  if (p.featured && (!p.impact || !p.highlights?.length))
    warn(p.id, "featured인데 impact 또는 highlights 없음");

  // 9) 파서가 처리하지 못하는 줄
  lines.forEach((l, i) => {
    if (/^\s*\d+\.\s/.test(l))
      warn(p.id, `번호 목록은 불릿으로 렌더되지 않음 (line ${i + 1}): ${l.slice(0, 30)}…`);
    if (/^\s+- /.test(l))
      warn(p.id, `들여쓴 불릿은 문단으로 렌더됨 (line ${i + 1}): ${l.trim().slice(0, 30)}…`);
  });
}

console.log(
  problems === 0
    ? `\n✅ 프로젝트 ${projects.length}개 — 템플릿 문제 없음`
    : `\n❌ 문제 ${problems}건`
);
process.exit(problems === 0 ? 0 : 1);
