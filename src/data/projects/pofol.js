export const pofol = {
  id: "pofol",
  title: "Pofol",
  subtitle: "포트폴리오 공유 & 팀 모집 플랫폼 · 서비스 중",
  description:
    "개발자가 포트폴리오를 게시하고 팀원을 모집할 수 있는 커뮤니티 플랫폼입니다. GitHub OAuth 연동, 학교 이메일 OTP 인증, AI 요약 및 썸네일 자동 생성 기능을 갖춘 풀스택 캡스톤 프로젝트입니다.",
  longDescription: `개발자가 자신의 포트폴리오를 게시하고 함께할 팀원을 모집할 수 있는 커뮤니티 플랫폼입니다. 캡스톤 디자인 과제로 시작해 백엔드와 프론트엔드를 함께 맡아 인증·소셜 기능부터 배포까지 직접 구현했습니다.

**개요**
- 기간: 2026.03 ~ 2026.06
- 팀 구성: 3인 (주민규 · 채수림 · 황호태)
- 역할: 백엔드 + 프론트엔드 (풀스택)
- 규모: Java 파일 108개, DB 테이블 23개, API 엔드포인트 40개+, Next.js 페이지 17개
- 분류: 팀 프로젝트 (캡스톤 디자인)

**주요 기여 — 백엔드**
- Post · Comment · 소셜 기능 (좋아요 · 북마크 · 팔로우) API 구현
- 학교 이메일 OTP 인증 시스템 구축 (SMTP 메일 발송)
- Spring Security + JWT 기반 인증 아키텍처 설계
- Redis를 활용한 OTP 및 세션 캐싱 처리

**주요 기여 — 프론트엔드**
- 게시글 작성 · 수정 · 삭제 UI 전체 구현
- 팀 모집 지원하기 UI, OTP 인증 UI 구현
- GitHub OAuth 연동 UI 및 AI 기능(요약 · 썸네일 생성) 연동
- Vercel 배포 및 환경 설정

**주요 기능**
- DISPLAY: 포트폴리오 게시 및 피드 조회
- RECRUIT: 팀원 모집 게시글 및 지원 시스템
- 소셜 피드백: 좋아요 · 북마크 · 팔로우 · 댓글
- GitHub OAuth 연동 로그인
- 학교 이메일 OTP 인증 (재학생 인증)
- AI 요약 + 썸네일 자동 생성 (OpenAI DALL-E)

**기술 아키텍처**
- 프론트엔드: Next.js 16 (App Router), TypeScript 5, Tailwind CSS 4, Zustand + TanStack Query, Axios, Vercel Blob
- 백엔드: Java 21, Spring Boot 4.0, Spring Data JPA, Spring Security + JWT (jjwt 0.12), PostgreSQL, Redis (Lettuce), SpringDoc OpenAPI, Gradle
- 배포: Vercel (FE) · Render + Docker Compose (BE + DB + Redis)

**배운 점**
- Next.js Middleware · Proxy 활용: API 요청을 서버 사이드에서 프록시 처리하고 Axios 인스턴스를 구성하며 인증 토큰 관리와 요청 흐름 설계를 익혔다.
- Spring 백엔드 풀사이클 경험: ERD 설계부터 Entity · Repository · Service · Controller 코드 작성까지 전 과정을 직접 구현하며 백엔드 아키텍처를 체득했다.
- 다양한 외부 툴 연동: Vercel Blob(이미지 스토리지), Redis(OTP 캐싱), OpenAI DALL-E(AI 요약, 썸네일 생성), GitHub OAuth 등 여러 서비스를 실제로 연동하며 통합 개발 경험을 쌓았다.`,
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "TanStack Query",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Vercel",
    "OpenAI",
  ],
  thumbnail: new URL("../../assets/icons/Pofol.png", import.meta.url).href,
  github: "https://github.com/PoFol-Capstone/Frontend/commits/main/",
  demo: "https://pofol-community.vercel.app/",
  youtube: "https://youtu.be/bewrnvM06zs",
  period: "2026.03 ~ 2026.06",
  status: "live",
  gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
};
