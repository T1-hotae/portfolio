export const projects = [
  {
    id: "moyo",
    title: "모요",
    subtitle: "커뮤니티 웹 서비스 · 배포 중단",
    description:
      "Slack·밴드 UX를 참고해 커뮤니티 서비스의 UI/UX를 개선, 게시물·실시간 채팅·캘린더 기능을 통합한 웹 서비스. 배포 자동화까지 포함한 운영 환경 구성.",
    longDescription: `Slack·밴드의 UX를 분석하고 이를 개선한 커뮤니티 웹 서비스를 구축한 프로젝트입니다.

**개요**
- 기간: 2025.09.10 ~ 2025.12.06
- 팀/역할: 3명 / 풀스택 (기여도 60%)

**주요 기여**
- React + TypeScript 기반 전체 UI/UX 구현 (테마 포함)
- Redux Toolkit 전역 상태 관리
- TanStack Query 서버 캐시 / 데이터 패칭 최적화
- FastAPI 기반 REST API 설계·구현 (계정탈퇴, 그룹참가, 게시물 CRUD, 친구추가 및 알림)
- FastAPI WebSocket 기반 실시간 채팅 구현
- AWS EC2 + Docker Compose + Nginx 배포, PostgreSQL, 무료 도메인 + Cloudflare 구성
- 프론트/백 각각 CI/CD 파이프라인 구축 (GitHub Actions)

**기술 아키텍처**
- React(TS, RTK, TanStack Query) ↔ FastAPI(JWT, WebSocket) ↔ PostgreSQL / AWS EC2(Docker Compose, Nginx) + Cloudflare + CI/CD

**배운 점**
- 애자일 협업 프로세스: 일일 스크럼·스프린트 계획으로 팀 개발 흐름 체득
- Shadcn/UI·TailwindCSS 기반 UI 구성 경험
- 풀스택 역량 확장: 프론트에서 백엔드·배포·운영까지`,
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "TailwindCSS",
      "Shadcn/UI",
      "FastAPI",
      "WebSocket",
      "PostgreSQL",
      "AWS EC2",
      "Docker Compose",
      "Nginx",
      "CI/CD",
    ],
    thumbnail: new URL("../assets/moyo.png", import.meta.url).href,
    github: "https://github.com/Moyo-project/Moyo_front",
    demo: null,
    youtube: "https://youtu.be/EiS4uzRdQ9s?si=PsaotVYH29RZe28P",
    period: "2025.09 ~ 2025.12",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
  },
  {
    id: "ganglimi",
    title: "강림이",
    subtitle: "강남대 공지·알림 통합 앱 · 서비스 중",
    description:
      "분산된 교내 공지를 한 화면에서 탐색하고, 카테고리 구독 기반 푸시 알림으로 핵심 공지를 놓치지 않도록 돕는 모바일 통합 서비스. App Store · Google Play 출시.",
    longDescription: `분산된 강남대학교 교내 공지를 한 화면에서 탐색하고, 카테고리 구독 기반 푸시 알림으로 핵심 공지를 놓치지 않도록 돕는 모바일 통합 서비스입니다.

**개요**
- 기간: 2025.12.23 ~ 2026.01.31
- 팀/역할: 3명 / 팀장·총괄 기획·풀스택 (기획~개발 전 과정 주도, 팀 구성·예산·교수 컨펌 포함)

**주요 기여**
- React Native(Expo) 기반 통합 공지 피드 UI/UX 전체 구현
- FastAPI 기반 공지 크롤링 파이프라인 구축 및 프론트 연동
- 북마크 기능 구현 및 상세 조회 흐름 설계
- NAVER 지도 API 연동 캠퍼스맵 구현
- Expo Notifications 기반 카테고리 구독형 푸시 알림 구현
- AWS EC2 배포, App Store · Google Play 출시

**기술 아키텍처**
- RN(Expo, TS, TanStack Query) ↔ FastAPI(Python, BeautifulSoup 크롤링) ↔ PostgreSQL / AWS EC2 / Expo Push`,
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "TanStack Query",
      "FastAPI",
      "Python",
      "BeautifulSoup",
      "PostgreSQL",
      "AWS EC2",
      "Expo Push",
      "NAVER Maps API",
    ],
    thumbnail: new URL("../assets/kangrimi.jpg", import.meta.url).href,
    github: "https://github.com/CampusNotice/Frontend",
    demo: null,
    youtube: "https://youtube.com/shorts/K7Fhfh7sPzY?feature=share",
    appStore:
      "https://apps.apple.com/kr/app/%EA%B0%95%EB%A6%BC%EC%9D%B4/id6758569535",
    playStore:
      "https://play.google.com/store/apps/details?id=com.campusnotice.fe",
    period: "2025.12 ~ 2026.01",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  },
  {
    id: "dugomukgo",
    title: "두고먹고",
    subtitle: "냉장고 식재료 관리 앱 · 배포 중단",
    description:
      "냉장고 식재료를 등록·관리하고, 보유 재료를 기반으로 만들 수 있는 레시피를 AI로 추천해 유통기한 낭비와 장보기 고민을 줄여주는 앱.",
    longDescription: `냉장고에 있는 식재료를 등록·관리하고, 보유 재료를 기반으로 만들 수 있는 레시피를 AI로 추천해 유통기한 낭비와 장보기 고민을 줄여주는 앱입니다.

**개요**
- 기간: 2025.12.30 ~ 2026.02.28
- 팀/역할: 2명 / 프론트엔드·디자인

**주요 기여**
- React Native(Expo) 기반 UI/UX 전체 구현
- Figma 활용: 앱 주요 기능의 사용자 플로우·기능 흐름도 설계 및 팀 공유
- 카메라 기능을 통한 이미지 캡처 및 AI Vision API(OCR) 연동
- 요청·응답 처리, 로딩/에러 핸들링, 결과 시각화 클라이언트 통합 구현

**기술 아키텍처**
- RN(Expo) ↔ FastAPI(Python, AI 레시피 추천 API) ↔ PostgreSQL / Push(유통기한 알림)

**배운 점**
- API 명세서를 통한 백엔드와의 협업 과정
- AI Vision API(OCR/이미지 분석) 클라이언트 통합 경험`,
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "AI Vision API",
      "Figma",
    ],
    thumbnail: new URL("../assets/Domeok2.png", import.meta.url).href,
    github: null,
    demo: null,
    youtube: null,
    period: "2025.12 ~ 2026.02",
    gradient: "linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 50%, #1a1a2e 100%)",
  },
  {
    id: "codebite",
    title: "코드바이트",
    subtitle: "CS 개념 학습 모바일 앱 · 2026년 1학기",
    description:
      "CS 개념을 퀴즈 형식으로 학습하는 모바일 앱. 4지선다·OX·단답·매칭 등 다양한 문제 유형과 연속 학습 스트릭, 도토리 재화 시스템, 팔로우 기반 소셜 랭킹 등 게이미피케이션 요소를 결합한 학습 플랫폼.",
    longDescription: `**개요**
- 기간: 2026.03 ~ 2026.06 (2026년 1학기 팀 프로젝트)
- 팀 구성: 4인 팀 (신인규 · 임동환 · 정수한 · 황호태)
- 역할: 프론트엔드 (UI/UX 구현 · 퀴즈 핵심 로직)

**담당 역할**
- 온보딩·홈·퀴즈·랭킹·상점·프로필 화면 UI/UX 전체 구현
- 커스텀 탭바 및 캐릭터·애니메이션 제작
- 퀴즈 핵심 로직 구현 (문제 생성, 채점, 결과 화면)
- 스트릭·보상 UI 구현 (streak screen, quest reward screen)
- 화면 성능 최적화 및 프론트엔드 리팩토링

**주요 기능**
- CS 퀴즈 학습: 4지선다 · OX · 단답형 · 매칭형 문제 유형
- 과목별 배치 퀴즈 (도토리 1개 = Subject 관련 5문제)
- 연속 학습 스트릭(Streak) + 도토리(인앱 재화) 보상
- 북마크: 학습 완료 개념 저장 및 필터링
- 아이템 상점: 스트릭 보호권 · 프로필 배너 구매
- 소셜 랭킹: 팔로우 기반 친구 랭킹 조회
- 닉네임 기반 사용자 검색 · 팔로우·언팔로우

**기술 아키텍처**
- 프론트엔드: React Native (Expo 54), TypeScript, Zustand, TanStack Query, Reanimated, Lottie
- 백엔드: Java 21, Spring Boot, Spring Security + JWT, Spring Data JPA
- DB: PostgreSQL
- 배포: Docker · Docker Compose

**배운 점**
- 기획 문서의 중요성: PRD·ERD·네이밍 컨벤션 등 협업 기준 문서가 없어 혼선이 생겼고, 명확한 문서화가 팀 개발의 핵심임을 체감했다.
- React Native 애니메이션 심화: SVG 요소별 Reanimated 애니메이션으로 캐릭터를 구현하고, Lottie 라이브러리까지 활용하며 모바일 애니메이션 기법을 폭넓게 익혔다.
- 다양한 협업 스타일 경험: 3명의 백엔드 팀원과 각각 다른 방식(알고리즘 공동 설계, API 문서 기반 티키타카, AI 워크플로 문서 공유)으로 협업하며 상황에 맞는 소통 방식을 찾는 능력을 키웠다.`,
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Docker",
    ],
    thumbnail: new URL("../assets/Codebite.png", import.meta.url).href,
    github: null,
    demo: null,
    youtube: "https://youtube.com/shorts/AqkF0Z2CXk0?feature=share",
    period: "2026.03 ~ 2026.06",
    gradient: "linear-gradient(135deg, #111111 0%, #1c1c1c 50%, #252525 100%)",
  },
  {
    id: "pofol",
    title: "Pofol",
    subtitle: "포트폴리오 공유 & 팀 모집 플랫폼 · 서비스 중",
    description:
      "개발자가 포트폴리오를 게시하고 팀원을 모집할 수 있는 커뮤니티 플랫폼입니다. GitHub OAuth 연동, 학교 이메일 OTP 인증, AI 요약 및 썸네일 자동 생성 기능을 갖춘 풀스택 캡스톤 프로젝트입니다.",
    longDescription: `**개요**
- 기간: 2026.03 ~ 2026.06 (캡스톤 디자인)
- 팀 구성: 3인 팀 (주민규 · 황호태 · 채수림)
- 역할: 백엔드 + 프론트엔드 (풀스택)
- 규모: Java 파일 108개, DB 테이블 23개, API 엔드포인트 40개+, Next.js 페이지 17개

**담당 역할 — 백엔드**
- Post · Comment · 소셜 기능 (좋아요 · 북마크 · 팔로우) API 구현
- 학교 이메일 OTP 인증 시스템 구축 (SMTP 메일 발송)
- Spring Security + JWT 기반 인증 아키텍처 설계
- Redis를 활용한 OTP 및 세션 캐싱 처리

**담당 역할 — 프론트엔드**
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
    github: null,
    demo: "https://pofol-community.vercel.app/",
    youtube: null,
    period: "2026.03 ~ 2026.06",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
  },
];
