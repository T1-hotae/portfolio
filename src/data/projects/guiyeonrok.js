export const guiyeonrok = {
  id: "guiyeonrok",
  title: "귀연록",
  subtitle: "귀신 캐릭터 매칭 웹 서비스 · 1인 개발 · 배포 후 개발 진행 중",
  description:
    "이름, 생년월일, 음양력, 출생시간, 지역을 입력하면 열두 귀신 캐릭터 중 하나를 연결해 주는 엔터테인먼트 웹 서비스입니다. 사주 계산 엔진을 직접 구현했고, 개인정보는 동의 전까지 서버로 보내지 않도록 브라우저에서 계산합니다. 기획부터 배포까지 혼자 진행했습니다.",
  longDescription: `이름·생년월일·음양력·출생시간·지역을 입력하면 열두 귀신 캐릭터 중 하나를 연결해 주는 엔터테인먼트 웹 서비스입니다. 사주 계산 엔진을 직접 구현했고, 개인정보가 서버로 넘어가는 경계를 기능 구현 전에 먼저 정해두고 설계했습니다.

**개요**
- 기간: 2026.08 ~ 진행 중
- 팀 구성: 1인
- 역할: 기획 · 디자인 · 개발 · 배포 전 과정 단독 수행
- 규모: TypeScript 파일 156개, 화면 22개, DB 마이그레이션 12개, 테스트 파일 24개
- 분류: 개인 프로젝트

**주요 기능**
- 진단 → 분석 연출 → 결과로 이어지는 캐릭터 매칭 흐름 (Next.js 16 App Router, 화면 22개)
- 열두 귀신 캐릭터 도감, 결과 보관함, 마이페이지, 관리자 콘솔
- 캐릭터 도감은 SSG로 생성해 검색 노출, 결과 공유 카드는 next/og로 서버에서 렌더링
- 카카오톡 공유 및 링크 미리보기용 동적 OG 이미지 생성
- Google · 카카오 소셜 로그인

**핵심 설계 포인트**
- 사주 계산 엔진 직접 구현 — 생년월일을 사주 명식으로 변환하는 계산 로직을 직접 작성 (음↔양력 변환, 십이지시, 천간지지 → 오행, 십신, 지장간, 십이운성, 합충공망, 용신). 모든 계산을 외부 호출 없는 순수 함수로 분리해 동일 입력이면 항상 동일 결과를 보장하고, 단위 테스트 24개 파일(Vitest)에 결정성(determinism) 테스트를 포함
- 개인정보가 서버로 넘어가는 경계 설정 — 분석 엔진을 브라우저에서 실행하고 서버는 /api/ruleset으로 규칙 스냅샷만 전송. 사용자가 저장에 동의하기 전까지 이름·생년월일이 서버로 가지 않음
- 공유 데이터 분리 — 공유는 원본이 아닌 별도 스냅샷 테이블로 분리해 이름·생년월일·출생시간·지역 컬럼 자체를 두지 않고, 토큰 기반 RPC로만 조회
- 권한 이중 검증 — Supabase RLS 정책을 마이그레이션 12개로 구성하고, 정책이 의도대로 차단하는지 확인하는 SQL 회귀 테스트를 작성. Next.js proxy matcher가 Server Function 호출을 커버하지 않아 Server Action마다 권한을 재검증
- Storybook으로 로그인 상태별 컴포넌트를 인증 없이 검증하는 환경 구성

**기술 아키텍처**
- 프론트엔드: Next.js 16 (App Router), React, TypeScript, Tailwind CSS — 캐릭터 도감은 SSG, 공유 카드는 next/og 서버 렌더링
- 분석 엔진: 외부 호출이 없는 순수 함수 모듈로 브라우저에서 실행, 서버는 /api/ruleset으로 규칙 스냅샷만 내려줌
- 데이터: Next.js Server Actions ↔ Supabase(PostgreSQL + RLS, 마이그레이션 12개), 공유용 스냅샷 테이블은 원본과 분리해 토큰 기반 RPC로만 조회
- 테스트·배포: Vitest 단위 테스트 / Storybook 컴포넌트 검증 / Vercel + Supabase
- 외부 연동: Google · 카카오 소셜 로그인, 카카오톡 공유 SDK

**어려웠던 점 & 해결**
- 카카오 로그인 KOE205 거부: Supabase 내장 프로바이더가 scope에 account_email을 항상 포함하는데 이 동의항목은 비즈니스 앱 전용이라 인가가 거부됨. 커스텀 OIDC 프로바이더로 직접 연결해 해결. 대신 이메일을 받지 못해 이메일 기반 관리자 승격 함수가 조용히 실패하는 문제가 생겨, id 기반 승격 함수를 별도로 추가.
- Lighthouse 측정값 오독: Speed Index 15.6초인데 FCP 0.31초로 지표끼리 모순. 필름스트립 첫 프레임을 디코딩하니 사이트 배경색(#050812)이 아닌 순백 이미지여서 캡처 자체가 비어 있음을 확인. 개발 서버 측정이 원인이었고, 프로덕션 빌드로 재측정하니 Speed Index 2.1초, 실제 병목은 가려져 있던 LCP 6.0초였음. 히어로 영상 포스터가 next/image를 거치지 않고 원본으로 내려가던 문제를 수정해 성능 점수 71 → 81, LCP 6.0초 → 4.3초로 개선.
- RLS 정책은 맞는데 permission denied: 이 Supabase 버전의 public 스키마 기본 권한이 신규 테이블에 anon/authenticated GRANT를 부여하지 않음. 정책(policy)과 권한(grant)이 별개 층임을 확인하고 명시적 GRANT 마이그레이션을 추가.

**배운 점**
- 개인정보를 다루는 서비스는 기능 구현 후 보안을 덧붙이는 게 아니라, 데이터가 서버로 넘어가는 경계를 설계 초기에 정해야 한다는 것을 체감했다.
- 지표가 서로 모순되면 코드보다 측정 방법을 먼저 의심해야 한다. 개발 서버 수치를 그대로 믿었다면 엉뚱한 곳을 고쳤을 것이다.
- 규칙이 얽힌 도메인일수록 순수 함수로 쪼개고 테스트를 붙여야 한 곳의 수정이 다른 곳을 깨뜨리지 않는다.`,
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Server Actions",
    "Supabase",
    "PostgreSQL",
    "RLS",
    "Vitest",
    "Storybook",
    "Vercel",
  ],
  thumbnail: new URL("../../assets/icons/Guiyeonrok.png", import.meta.url).href,
  github: null,
  demo: "https://guiyeonrok-app.vercel.app",
  youtube: null,
  period: "2026.08 ~ 진행 중",
  status: "developing",
  gradient: "linear-gradient(135deg, #050812 0%, #14204a 45%, #2f4bb0 100%)",
};
