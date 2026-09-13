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
- 팀/역할: 3명 (개발 경험 전무한 학생들로 구성) / 풀스택 (기여도 60~80%)

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
- 풀스택 역량 확장: 프론트에서 백엔드·배포·운영까지

**추후 보완 과제**
- 게시물 기능 고도화 (좋아요, 댓글, 동영상 첨부, 투표)
- 캘린더 UI/UX 재설계
- 더보기 탭 미구현 기능 완성`,
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
    thumbnail: new URL("../assets/icons/moyo.png", import.meta.url).href,
    github: "https://github.com/Moyo-project/Moyo_front",
    demo: null,
    youtube: "https://youtu.be/EiS4uzRdQ9s?si=PsaotVYH29RZe28P",
    period: "2025.09 ~ 2025.12",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
  },
  {
    id: "ganglimi",
    title: "강림이",
    subtitle: "강남대 공지·알림 통합 앱 · 우수상 수상 · 실사용자 800명",
    description:
      "분산된 교내 공지를 한 화면에서 탐색하고, 카테고리 구독 기반 푸시 알림으로 핵심 공지를 놓치지 않도록 돕는 모바일 통합 서비스. App Store · Google Play 출시, 실사용자 800명 확보.",
    longDescription: `분산된 강남대학교 교내 공지를 한 화면에서 탐색하고, 카테고리 구독 기반 푸시 알림으로 핵심 공지를 놓치지 않도록 돕는 모바일 통합 서비스입니다.

**개요**
- 기간: 2025.12.23 ~ 2026.01.31
- 팀/역할: 3명 / 팀장·총괄 기획·풀스택 (기획~개발 전 과정 주도, 팀 구성·예산·교수 컨펌 포함)
- 수상: 동계방학 역량강화 프로젝트 우수상 + 장학금

**주요 기여**
- React Native(Expo) 기반 통합 공지 피드 UI/UX 전체 구현
- FastAPI 기반 공지 크롤링 파이프라인 구축 및 프론트 연동 (강남대학교 학사·장학·취업 등 카테고리별 공지)
- 텍스트 파싱 고도화 (이모티콘 구분, 표 구조 파싱 로직)
- 북마크 기능 구현 및 상세 조회 흐름 설계
- NAVER 지도 API 연동 캠퍼스맵 구현
- Expo Notifications 기반 카테고리 구독형 푸시 알림 구현
- App Store · Google Play 출시, AWS EC2 → Oracle Cloud 서버 이전 (서버 비용 절감 목적)

**기술 아키텍처**
- RN(Expo, TS, TanStack Query) ↔ FastAPI(Python, BeautifulSoup 크롤링) ↔ PostgreSQL / AWS EC2 → Oracle Cloud / Expo Push

**어려웠던 점 & 해결**
- App Store 심사 통과 과정이 예상보다 까다로웠고, 출시 후 특정 이미지 크기가 깨지는 오류가 발생해 재현 환경을 만들어 직접 디버깅
- 14명의 테스터 피드백(지도 UI 개선, 다크모드 UI 등)을 우선순위에 따라 순차 반영
- 서버 비용 부담을 줄이기 위해 Oracle Cloud로 직접 이전 작업 수행

**결과**
- App Store + Google Play 합산 실사용자 800명 확보, 현재도 서비스 운영 중

**배운 점**
- 실서비스는 완성이 끝이 아니라 출시 후 QA·피드백 반영·운영이 개발만큼 중요하다는 것을 체감
- 비용을 고려한 인프라 의사결정 경험 (AWS → Oracle Cloud 이전)`,
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
      "Oracle Cloud",
      "Expo Push",
      "NAVER Maps API",
    ],
    thumbnail: new URL("../assets/icons/kangrimi.jpg", import.meta.url).href,
    github: "https://github.com/CampusNotice/Frontend",
    demo: null,
    featured: true,
    impact: "실사용자 800명 · 우수상 수상",
    highlights: [
      "학사·장학·취업 등 분산 공지를 한 화면에 통합, 카테고리 구독 푸시 알림",
      "FastAPI 크롤링 파이프라인 자동화 + 이모티콘·표 구조 텍스트 파싱",
      "캠퍼스맵, 북마크, 다크모드 UI",
      "App Store·Google Play 정식 출시 후 실사용자 800명 확보, 지속 운영 중",
    ],
    youtube: "https://youtu.be/7wnbnJiUuUk?si=oWt6APnP3RjO4aQl",
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
    thumbnail: new URL("../assets/icons/Domeok2.png", import.meta.url).href,
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

**기술적으로 인상 깊었던 부분**
- 퀴즈 로직 — 동일 난수(LCG) 기반 독립 생성: 프론트와 백엔드가 동일한 시드를 공유해 통신 지연 없이 양측에서 똑같은 퀴즈를 독립적으로 생성. 프론트가 즉각 문제를 제공하고, 백엔드가 결과 제출 시 동일 로직으로 재현해 검증하는 구조
- 퀴즈 DB 구조 — 과목 → 대주제 → 소주제(Concept)로 이어지는 계층형 트리 구조. 리프 노드(자식 없는 최하위 개념)만 출제 타겟으로 한정해 일관성 확보. Concept_Detail을 Key-Value 형태로 연결해 객관식·단답형·OX 다형적 문제 생성 지원

**기술 아키텍처**
- 프론트엔드: React Native (Expo 54), TypeScript, Zustand, TanStack Query, Reanimated, Lottie
- 백엔드 (1차): Java 21, Spring Boot, Spring Security + JWT, Spring Data JPA, PostgreSQL, Docker
- 백엔드 (2차, 개인 리팩토링): Node.js, MongoDB, Vercel 서버리스 배포

**Spring → Node.js + MongoDB 전환 이유 (개인 리팩토링)**
- Isomorphic JS: FE(RN)와 BE(Node.js)가 같은 언어를 써서 난수 기반 알고리즘을 공통 모듈로 공유 가능 → 구현 불일치 리스크 원천 차단
- Schema-less: Key-Value 형태의 Concept_Detail을 MongoDB 도큐먼트로 직관적 저장 (RDB의 복잡한 EAV 패턴 불필요)
- 계층형 데이터 조회 최적화: 트리 구조를 Embedding·Aggregation으로 처리 → 복잡한 JOIN 없이 읽기 성능 극대화
- I/O 성능: Node.js 비동기 I/O 특성이 퀴즈 요청처럼 I/O 집중적인 워크로드에 적합

**배운 점**
- 기획 문서의 중요성: PRD·ERD·네이밍 컨벤션 등 협업 기준 문서가 없어 혼선이 생겼고, 명확한 문서화가 팀 개발의 핵심임을 체감했다.
- React Native 애니메이션 심화: SVG 요소별 Reanimated 애니메이션으로 캐릭터를 구현하고, Lottie 라이브러리까지 활용하며 모바일 애니메이션 기법을 폭넓게 익혔다.
- 다양한 협업 스타일 경험: 3명의 백엔드 팀원과 각각 다른 방식(알고리즘 공동 설계, API 문서 기반 티키타카, AI 워크플로 문서 공유)으로 협업하며 상황에 맞는 소통 방식을 찾는 능력을 키웠다.
- 백엔드 개발자의 사고방식 체득: Java GC 원리, Spring vs Node.js vs MongoDB 차이를 잘하는 백엔드 개발자와의 대화로 배우며, 코드 하나하나의 실행 방식을 뜯어보는 사고 습관을 이해하게 됨`,
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
      "Node.js",
      "MongoDB",
      "Vercel",
    ],
    thumbnail: new URL("../assets/icons/Codebite.png", import.meta.url).href,
    github: null,
    demo: null,
    youtube: "https://youtube.com/shorts/AqkF0Z2CXk0?feature=share",
    period: "2026.03 ~ 2026.06",
    gradient: "linear-gradient(135deg, #111111 0%, #1c1c1c 50%, #252525 100%)",
  },
  {
    id: "gyohak",
    title: "교학 점검 배정",
    subtitle: "강의실 점검표 자동 배정 사이트 · 서비스 중",
    description:
      "매일 아침 20~60분씩 소요되던 강의실 점검 배정 업무를 자동화한 사이트. 균등 배분·층수 최소화·퇴근 여유 등 4가지 규칙을 알고리즘으로 정의해 클릭 한 번으로 배정표를 생성.",
    longDescription: `교학1팀 근로 학생이 매일 아침 수작업으로 작성하던 강의실 점검표를 자동화한 사이트입니다.

**개요**
- 기간: 2026.03 ~ 2026.05
- 역할: 개인 프로젝트 (기획 · 설계 · 개발 전 과정)

**문제 정의**
매일 아침 빈 강의실 파악 → 행사 확인 → 출근 근로자 확인 → 배치 작업에 최대 1시간이 소요되었고, "적절히 배분"이라는 추상적 기준이 매번 고민을 만들었습니다.

**알고리즘 핵심 규칙 4가지**
1. 균등 배분 — 학생 1인당 점검 강의실 수 오차 ±1 이내
2. 한 번에 점검 — 한 타임에 모아서 끝낼 수 있도록 배치
3. 층수 최소화 — 한 번의 점검에서 이동 층 최대 2개 이내
4. 퇴근 전 여유 — 퇴근 50분 전 이후로는 배정 제외

**주요 기능**
- HWP·메모장 강의실 시간표 붙여넣기 자동 파싱 (세로형·가로형 지원)
- ⚡ 자동 배정 / 🔀 다시 배정 버튼으로 즉시 결과 생성
- ✏ 수동 배정 모드로 클릭 기반 세부 조정
- 요일별 출근자 자동 로드 및 시간표 편집 (30분 단위)
- 행사 등록 시 해당 시간대 자동 배정 제외
- 📋 표 복사 — HWP에 바로 붙여넣을 수 있는 형식으로 클립보드 복사

**기대 효과**
매일 아침 절약되는 30분 → 일 기준 5,160원 가치의 시간 절감

**기술 스택**
- React 18 + Vite 6, 순수 CSS (외부 UI 라이브러리 미사용)`,
    tech: ["React", "JavaScript", "Vite", "CSS"],
    thumbnail: new URL("../assets/icons/Gyohak.png", import.meta.url).href,
    github: "https://github.com/T1-hotae/Gyohak1Team",
    demo: "https://gyohak1-team.vercel.app",
    featured: true,
    impact: "매일 반복되던 수작업 배정을 클릭 한 번으로 자동화",
    highlights: [
      "균등 배분·층수 최소화 등 배정 기준 4가지를 알고리즘으로 정의",
      "HWP·메모장 강의실 시간표 붙여넣기 자동 파싱 (세로형·가로형 지원)",
      "자동 배정 + 클릭 기반 수동 조정, HWP 붙여넣기용 표 복사 기능",
      "교학1팀 실제 업무에 투입되어 서비스 중",
    ],
    youtube: "https://youtu.be/YiRrBlYtHJk?si=XxjU6quhPRBEiMUf",
    period: "2026.03 ~ 2026.05",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #0d2137 100%)",
  },
  {
    id: "yeflix",
    title: "Yeflix",
    subtitle: "개인 영화 감상 일기 서비스 · 서비스 중",
    description:
      "영화를 검색하고 OTT 플랫폼 바로가기를 확인하며, 별점·관람 날짜·태그가 포함된 감상 일기를 남길 수 있는 개인 영화 기록 서비스.",
    longDescription: `영화를 보기 시작한 후 감상문을 직접 기록하고 싶어서 만들게 된 개인 프로젝트입니다.

**개요**
- 기간: 2026.03 ~ 2026.04
- 역할: 개인 프로젝트 (기획 · 디자인 · 개발 전 과정)

**주요 기능**
- 현재 상영 중·인기·개봉 예정 영화 목록 조회 (TMDB API)
- 제목 기반 영화 검색
- 영화 상세: 포스터, 장르, 상영시간, 감독, 출연진, TMDB 평점
- OTT 바로가기: Netflix·Disney+·Watcha 등 국내 스트리밍 링크 (JustWatch 데이터)
- 볼영화 찜 북마크 저장
- 감상 일기: 별점·관람 날짜·감상문·태그 포함, 작성·수정·삭제
- Google 계정 소셜 로그인

**기술 아키텍처**
- Next.js 14 (App Router), Tailwind CSS
- Firebase Authentication (Google 로그인), Firestore (일기·찜 데이터)
- TMDB API (영화 정보·OTT 정보)

**설계에서 인상 깊은 포인트**
- Firestore 합성 키 전략: 문서 ID를 \`\${userId}_\${movieId}\`로 구성해 "영화당 일기·찜 1개" 제약을 스키마 레벨에서 자연스럽게 구현 (upsert 패턴)
- 복합 인덱스 회피: 정렬을 클라이언트 사이드로 위임해 Firestore 인덱스 비용 절감 — 소규모 개인 프로젝트에 적합한 트레이드오프를 의식적으로 선택
- 단일 fetcher 패턴: TMDB API 요청을 하나의 fetcher 함수로 감싸 api_key·language 파라미터를 공통 주입

**배운 점**
- Firebase Auth + Firestore를 활용한 인증·데이터 관리 전반 경험
- 외부 API(TMDB) 연동 및 래퍼 함수 설계
- 트레이드오프를 의식적으로 선택하는 설계 감각 (인덱스 비용 vs 클라이언트 정렬)
- 내가 직접 쓰는 서비스를 만들며 사용자 관점에서 지속적으로 개선하는 경험`,
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TMDB API", "JavaScript"],
    thumbnail: new URL("../assets/icons/yeflix.png", import.meta.url).href,
    github: "https://github.com/T1-hotae/yeflix",
    demo: "https://yeflix-diary.vercel.app",
    youtube: null,
    period: "2026.03 ~ 2026.04",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #3d1515 50%, #1a0000 100%)",
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
    thumbnail: new URL("../assets/icons/Pofol.png", import.meta.url).href,
    github: null,
    demo: "https://pofol-community.vercel.app/",
    youtube: "https://youtu.be/bewrnvM06zs",
    period: "2026.03 ~ 2026.06",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
  },
  {
    id: "geuljub",
    title: "글줍",
    subtitle: "한글 랜섬노트 앱 · 1인 개발 · 스토어 제출 준비 중",
    description:
      "거리에서 눈에 띈 글자를 하나씩 찍어 모으고, 문장을 입력하면 모아둔 글자 사진이 조각으로 나와 편지지 위에 붙일 수 있는 모바일 앱. 기획·디자인·개발·배포 준비까지 혼자 진행했습니다.",
    longDescription: `신문·잡지 글자를 오려 붙인 협박 편지(랜섬노트) 느낌을 한글로 만들 수 있게 한 모바일 앱입니다. 영어권에는 비슷한 앱이 있지만 한글 음절 단위로 글자를 맞춰 주는 앱은 없어서 직접 만들었습니다.

**개요**
- 기간: 2026.06 ~ 진행 중 (첫 커밋 2026.06.19)
- 팀 구성: 1인 (기획 · 디자인 · 개발 · 배포 준비 전 과정 단독 수행)
- 규모: TypeScript 파일 72개, 약 10,800줄 / 커밋 43개 / 설계·리뷰 문서 27개
- 상태: 기능 구현 완료, 구글 플레이 · 앱스토어 제출 전 점검 중
- 분류: 개인 프로젝트

**핵심 경험 설계**
- 글자 줍기: 카메라로 글자 하나를 찍으면 가위로 오린 듯한 모양으로 잘려 도감에 저장
- 편지 만들기: 문장을 입력하면 모아둔 글자 사진이 조각으로 나오고, 끌어서 편지지에 배치
- 없는 글자는 "+"로 표시되고 누르면 바로 카메라가 켜져 그 자리에서 채우는 흐름

**주요 기여**
- Expo SDK 54 / React Native 0.81 환경 구성, expo-router 파일 기반 라우팅으로 화면 구조 설계
- 촬영 → 모양 자르기 → 저장 → 편지 제작 → 공유까지 이어지는 전체 흐름 구현
- 가이드 틀 회전(15°씩 ±60°), 핀치 확대, 촬영마다 랜덤으로 뽑히는 가위 컷 모양 구현
- 도감(그리드·정렬·검색), 올가미 자유 자르기, 편지지 13종, 편지 보관함, 이미지 공유·저장 구현
- 상용 한글 2,350자 기준 수집률·요일별 수집 그래프·도전과제 등 통계 화면 구현
- 한지·먹선 느낌의 공통 UI 컴포넌트(카드, 버튼, 테두리, 아이콘, 낙관 배지) 디자인 시스템 구축
- AdMob 네이티브·전면 광고 연동, 약관·개인정보 처리방침 정적 사이트 별도 배포 후 앱에서 연결
- 전 과정의 설계·조사·코드리뷰 문서 27개 작성

**기술 아키텍처**
- RN 0.81 + React 19 + TypeScript + Expo SDK 54(expo-router) / Reanimated 4 + Gesture Handler / expo-camera + expo-image-manipulator + react-native-view-shot + SVG / AsyncStorage(메타) + expo-file-system(사진 파일) / AdMob / EAS Build
- 네트워크 없이 100% 동작, 모든 데이터는 기기 내부에만 저장

**어려웠던 점 & 해결**
- 도감에서 글자를 지우면 이미 붙여둔 편지가 깨짐: 붙일 때마다 사진을 복사하면 투명 배경 PNG 한 장이 수백 KB~1MB라 저장 공간이 빠르게 늘어난다고 판단. 복사 대신 "아직 참조가 남아 있으면 지우지 않는" 방식으로 해결하고, 앱 시작 시 도감·편지·보관함 어디에도 없는 파일만 정리하는 작업(mark & sweep과 같은 발상)을 돌림. 정리 시작 시각 이후 생성된 파일은 건드리지 않게 해 저장 중인 사진이 삭제되는 문제를 차단.
- 앱 실행 직후 저장된 편지가 빈 상태로 덮어써질 뻔함: 불러오기는 비동기인데 저장은 상태 변경마다 실행돼 첫 렌더의 빈 캔버스가 먼저 저장됨. 로드 완료 플래그를 두고 그 전에는 저장이 실행되지 않도록 차단.
- 기기마다 편지지 크기가 달라 글자 위치가 밀림: 좌표를 픽셀로 저장하던 것을 저장 시점의 편지지 폭과 함께 기록하고, 불러올 때 현재 폭과 비례 보정하도록 변경(폭 정보가 없는 구버전 저장본도 예외 처리).
- 공유한 이미지가 흐릿함: 압축이 아니라 캡처를 두 번 하고 있던 것이 원인. 자르기 화면도 dp와 px을 섞어 비교하고 있었음. 캡처 라이브러리의 안드로이드 구현까지 열어 "출력 픽셀 = 화면 크기 × 기기 배율"을 확인하고 목표 픽셀 기준으로 계획을 재정리.
- 붓으로 그은 선을 SVG로 표현: stroke는 굵기가 일정해 붓 느낌이 나지 않아 선 대신 면으로 채워 그리는 방식으로 전환. 불규칙 모양에 고정 시드를 써서 리렌더링해도 같은 모양이 나오도록 함.
- 폰트 라이선스 확인: 폰트 파일 내부 라이선스 정보가 비어 있어, 공공누리 공식 배포 페이지에서 OFL 공개 폰트임을 확인하고 THIRD_PARTY_NOTICES.md를 만들어 앱 설정에서도 확인 가능하게 함.
- 광고 배치: 촬영·편집 같은 핵심 화면에는 넣지 않고 수집 완료·통계 화면에만 배치. 배너는 디자인 통제가 불가능해 네이티브 광고로 바꿔 카드 디자인과 리듬을 맞추고, 전면 광고는 빈도(수집 3회마다)만 규칙화.

**배운 점**
- 기능 구현 전에 문서로 정리해 두니 결정을 되돌릴 때 이유를 다시 찾을 수 있었습니다. 27개 문서 중 상당수는 "왜 그렇게 하지 않기로 했는지"에 대한 기록입니다.
- 혼자 하는 프로젝트여도 스스로 코드리뷰 문서를 쓰면 문제를 미리 발견할 수 있습니다. 편지가 깨지는 문제와 데이터가 사라질 뻔한 문제 모두 리뷰 과정에서 찾았습니다.
- 라이브러리가 이상하게 동작할 때 문서만 보지 않고 실제 네이티브 구현을 열어보니 원인을 정확히 알 수 있었습니다.
- 앱을 만드는 것과 출시하는 것은 다른 일입니다. 권한 설명, 개인정보 처리방침, 폰트 라이선스, 광고 정책처럼 코드 밖의 일이 생각보다 많았습니다.`,
    tech: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "expo-router",
      "Reanimated",
      "Gesture Handler",
      "expo-camera",
      "react-native-svg",
      "AsyncStorage",
      "AdMob",
      "EAS Build",
    ],
    thumbnail: new URL("../assets/icons/Geuljub.png", import.meta.url).href,
    github: "https://github.com/T1-hotae/ransomenote",
    demo: null,
    period: "2026.06 ~ 진행 중",
    gradient: "linear-gradient(135deg, #2b2723 0%, #6b5f4e 45%, #d8cdb4 100%)",
  },
  {
    id: "miping",
    title: "미핑",
    subtitle: "공평한 중간 약속 장소 추천 앱 · 출시 준비 중",
    description:
      "여러 사람이 각자 출발 위치와 교통수단을 입력하면, 지도상 가운데가 아니라 실제 예상 이동시간을 비교해 가장 공평한 중간 지역을 추천하는 Flutter 앱.",
    longDescription: `약속 장소를 지도 가운데로 정하면 환승을 여러 번 해야 하는 사람만 손해를 봅니다. 미핑은 후보 지역마다 참여자들의 예상 이동시간을 실제로 계산해, 가장 오래 걸리는 사람의 시간이 제일 짧은 곳을 추천합니다. 강남대학교 ICT융합공학부 하계 SW 집중 프로그램에서 시작해 발표용 데모로 끝내지 않고 스토어 출시를 목표로 이어가는 팀 프로젝트입니다.

**개요**
- 기간: 2026.07 ~ 진행 중 (내 커밋 기간 2026.07.23 ~ 2026.08.20)
- 팀/역할: 4명 / 프론트엔드 (화면·사용 흐름 전반, 카카오 로그인·공유, 설정 화면, 광고)
- 규모: 저장소 작업 커밋 164개 중 내 커밋 70개
- 분류: 팀 프로젝트

**중간지점 선정 로직**
- 후보 지역마다 참여자 전원의 예상 이동시간을 구한 뒤, 최대 이동시간이 가장 짧은 곳을 상위로 배치
- 환승 1회를 5분으로 환산해 가산 → 조금 더 걸려도 갈아타지 않는 경로가 유리해짐
- 참여자 간 이동시간 편차가 20분을 넘는 후보는 순위에서 후순위로 이동 (한 명만 10분, 나머지가 40분인 후보가 상위에 오르는 문제 방지). 초기에는 필터링했으나 후보를 6곳까지 노출하게 되면서 제외 대신 감점 방식으로 변경

**주요 기여**
- 카카오 로그인 화면·상태 관리 구현, 앱 시작 시 토큰 검사로 로그인/홈 분기 처리, 팀 공용 안드로이드·iOS 디버그 키 설정 담당
- 설정 화면 신규 구현 (카카오 프로필·닉네임 연동, 닉네임 수정, 약관 링크, 비로그인 상태 대응)
- 카카오톡 초대 카드 전송 및 초대 링크로 앱이 열리며 코드가 자동 입력되는 딥링크 흐름 구현
- 400줄이 넘던 홈 화면을 장소검색 탭과 결과 카드로 분리하고, 장소검색을 별도 화면으로 추출
- 방 화면 → 결과 화면으로 이동하던 구조를 지도를 유지한 채 바텀시트로 여는 구조로 전환
- 지도 핀 선택 시 카메라가 초기 좌표로 튀는 문제와 화살표가 사라지는 문제 수정
- 방에 들어가지 않아도 장소 두 곳 이상으로 중간지점을 미리 계산하는 서버 진입점 구현 (호출 수 제한 캐시·상한 포함)
- 방 정원 8명 제한을 앱과 Firestore 보안 규칙 양쪽에서 검증
- Google AdMob 배너 광고 연동 및 디버그/릴리스 빌드 분리
- 카카오 로그인·공유, 광고, 디버그 키, 파이어베이스 인수인계 문서 작성

**기술 아키텍처**
- Flutter + Riverpod + go_router ↔ Firebase Cloud Functions(Node.js: 이동시간·중간지점 계산, 카카오 토큰 검증, 방 쓰기) ↔ Cloud Firestore(실시간 구독) + 보안 규칙
- 외부 연동: 카카오맵 SDK, 카카오 모빌리티(자가용), 카카오맵 REST(대중교통), 카카오 로컬 API(장소검색), 카카오 로그인·공유 SDK, Google AdMob

**어려웠던 점 & 해결**
- 카카오톡 초대 링크가 에러 없이 조용히 실패: 안드로이드 매니페스트에 kakao{앱키}://kakaolink 인텐트 필터가 없던 것이 원인. 필터를 추가해 해결하고, 이 설정은 hot reload로 반영되지 않아 팀원 전원 재설치가 필요하다는 점까지 문서로 공유.
- 지도 컨트롤러 충돌로 카메라가 튐: 장소검색에서 쓰던 컨트롤러를 방 화면에서 교체하면 네이티브 지도가 재초기화되며 카메라가 초기 좌표로 복귀. 방 진입 시 기존 컨트롤러를 보관했다가 복귀 시 돌려주는 방식으로 수정.
- 화면 전환 시 상태 단절: 방 화면과 결과 화면이 각각 새 라우트였던 구조를 하나로 합치고 결과를 바텀시트로 올려, 배경 지도가 유지되고 뒤로가기도 자연스러워짐.

**진행 상황**
- 핵심 흐름 동작, 클라이언트의 Firestore 직접 쓰기를 서버 함수 호출로 이관 완료
- 계정 탈퇴·개인정보 삭제, 릴리스 서명 설정, 패키지명 변경 완료. 남은 작업은 실기기 검증과 스토어 출시

**배운 점**
- 카카오 로그인·지도처럼 네이티브 SDK를 붙이는 작업은 에러 없이 조용히 실패하는 경우가 많아, 코드 리뷰만으로는 잡히지 않습니다. 실기기 확인 항목을 체크리스트로 남기는 습관이 생겼습니다.
- Firebase 구조에서는 앱이 어디까지 데이터를 직접 다루고 어디부터 서버 함수에 맡길지 팀과 미리 합의해야 합니다. 뒤늦게 서버로 옮기며 앱 코드까지 함께 고쳐야 했습니다.
- 정상 흐름에서 되는 것과 실기기에서 되는 것은 다릅니다. 완료 기준을 팀 문서로 적어 두니 서로 확인할 거리가 분명해졌습니다.`,
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "go_router",
      "Firebase Cloud Functions",
      "Cloud Firestore",
      "Firestore Security Rules",
      "Kakao Map SDK",
      "Kakao Login/Share SDK",
      "Google AdMob",
    ],
    thumbnail: new URL("../assets/icons/Miping.png", import.meta.url).href,
    github: "https://github.com/miping-team/miping",
    demo: null,
    period: "2026.07 ~ 진행 중",
    gradient: "linear-gradient(135deg, #3b2f2a 0%, #6b4a3a 45%, #e8a58c 100%)",
  },
  {
    id: "guiyeonrok",
    title: "귀연록",
    subtitle: "귀신 캐릭터 매칭 웹 서비스 · 1인 개발 · 배포 중",
    description:
      "이름, 생년월일, 음양력, 출생시간, 지역을 입력하면 열두 귀신 캐릭터 중 하나를 연결해 주는 엔터테인먼트 웹 서비스입니다. 사주 계산 엔진을 직접 구현했고, 개인정보는 동의 전까지 서버로 보내지 않도록 브라우저에서 계산합니다. 기획부터 배포까지 혼자 진행했습니다.",
    longDescription: `**개요**
- 기간: 2026.08 ~ 진행 중
- 팀 구성: 1인 (기획 · 디자인 · 개발 · 배포 전 과정 단독 수행)
- 규모: TypeScript 파일 156개, 화면 22개, DB 마이그레이션 12개, 테스트 파일 24개
- 분류: 개인 프로젝트

**주요 기여 — 분석 엔진**
- 생년월일을 사주 명식으로 변환하는 계산 로직 직접 구현 (음↔양력 변환, 십이지시, 천간지지 → 오행, 십신, 지장간, 십이운성, 합충공망, 용신)
- 모든 계산을 외부 호출 없는 순수 함수로 분리해 동일 입력이면 항상 동일 결과 보장
- 엔진 단위 테스트 24개 파일 작성 (Vitest), 결정성(determinism) 테스트 포함

**주요 기여 — 개인정보 설계**
- 분석 엔진을 브라우저에서 실행하고 서버는 /api/ruleset으로 규칙 스냅샷만 전송, 사용자가 저장에 동의하기 전까지 이름·생년월일이 서버로 가지 않음
- 공유는 원본이 아닌 별도 스냅샷 테이블로 분리 (이름·생년월일·출생시간·지역 컬럼 자체를 두지 않음), 토큰 기반 RPC로만 조회
- Supabase RLS 정책을 마이그레이션 12개로 구성하고, 정책이 의도대로 차단하는지 확인하는 SQL 회귀 테스트 작성
- Server Action마다 권한을 재검증 (Next.js proxy matcher가 Server Function 호출을 커버하지 않음)

**주요 기여 — 프론트엔드 & 배포**
- Next.js 16 App Router 기반 전체 화면 구현 (진단 · 분석 연출 · 결과 · 도감 · 보관함 · 마이페이지 · 관리자 콘솔)
- 캐릭터 도감은 SSG로 생성해 검색 노출, 결과 공유 카드는 next/og로 서버에서 렌더링
- 카카오톡 공유 SDK 연동, 링크 미리보기용 동적 OG 이미지 생성
- Google · 카카오 소셜 로그인 연동, Vercel + Supabase 배포
- Storybook으로 로그인 상태별 컴포넌트를 인증 없이 검증하는 환경 구성

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
      "zod",
      "Vitest",
      "Storybook",
      "Vercel",
    ],
    thumbnail: new URL("../assets/icons/Guiyeonrok.png", import.meta.url).href,
    github: null,
    demo: "https://guiyeonrok-app.vercel.app",
    period: "2026.08 ~ 진행 중",
    gradient: "linear-gradient(135deg, #050812 0%, #14204a 45%, #2f4bb0 100%)",
  },
];
