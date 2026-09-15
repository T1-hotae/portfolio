export const codebite = {
  id: "codebite",
  title: "코드바이트",
  subtitle: "CS 개념 학습 모바일 앱 · 2026년 1학기",
  description:
    "CS 개념을 퀴즈 형식으로 학습하는 모바일 앱. 4지선다·OX·단답·매칭 등 다양한 문제 유형과 연속 학습 스트릭, 도토리 재화 시스템, 팔로우 기반 소셜 랭킹 등 게이미피케이션 요소를 결합한 학습 플랫폼.",
  longDescription: `CS 개념을 퀴즈 형식으로 학습하는 모바일 앱입니다. 개념을 계층형 트리로 정리해 문제를 자동 생성하고, 연속 학습 스트릭과 도토리 재화·소셜 랭킹 같은 게이미피케이션 요소를 붙여 학습이 이어지도록 설계했습니다.

**개요**
- 기간: 2026.03 ~ 2026.06
- 팀 구성: 4인 (신인규 · 임동환 · 정수한 · 황호태)
- 역할: 프론트엔드 (UI/UX 구현 · 퀴즈 핵심 로직)
- 규모: 앱 TypeScript 파일 102개, 약 12,100줄 / 커밋 167개 중 내 커밋 149개
- 분류: 팀 프로젝트 (2026년 1학기)

**주요 기여**
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

**핵심 설계 포인트**
- 퀴즈 로직 — 동일 난수(LCG) 기반 독립 생성: 프론트와 백엔드가 동일한 시드를 공유해 통신 지연 없이 양측에서 똑같은 퀴즈를 독립적으로 생성. 프론트가 즉각 문제를 제공하고, 백엔드가 결과 제출 시 동일 로직으로 재현해 검증하는 구조
- 퀴즈 DB 구조 — 과목 → 대주제 → 소주제(Concept)로 이어지는 계층형 트리 구조. 리프 노드(자식 없는 최하위 개념)만 출제 타겟으로 한정해 일관성 확보. Concept_Detail을 Key-Value 형태로 연결해 객관식·단답형·OX 다형적 문제 생성 지원

**기술 아키텍처**
- 프론트엔드: React Native (Expo 54), TypeScript, Zustand, TanStack Query, Reanimated, Lottie
- 백엔드 (1차): Java 21, Spring Boot, Spring Security + JWT, Spring Data JPA, PostgreSQL, Docker
- 백엔드 (2차, 개인 리팩토링 시도 · 현재 보류): Node.js, MongoDB, Vercel 서버리스 배포

**Spring → Node.js + MongoDB 전환 검토 (개인 리팩토링 · 현재 보류)**
- Isomorphic JS: FE(RN)와 BE(Node.js)가 같은 언어를 써서 난수 기반 알고리즘을 공통 모듈로 공유 가능 → 구현 불일치 리스크 원천 차단
- Schema-less: Key-Value 형태의 Concept_Detail을 MongoDB 도큐먼트로 직관적 저장 (RDB의 복잡한 EAV 패턴 불필요)
- 계층형 데이터 조회 최적화: 트리 구조를 Embedding·Aggregation으로 처리 → 복잡한 JOIN 없이 읽기 성능 극대화
- I/O 성능: Node.js 비동기 I/O 특성이 퀴즈 요청처럼 I/O 집중적인 워크로드에 적합
- 현재 상태: Node.js + MongoDB 버전과 앱 출시용 빌드를 만들어봤으나 보류했고, 이후 Next.js 웹앱으로 다시 만들 예정

**배운 점**
- 기획 문서의 중요성: PRD·ERD·네이밍 컨벤션 등 협업 기준 문서가 없어 혼선이 생겼고, 명확한 문서화가 팀 개발의 핵심임을 체감했다.
- React Native 애니메이션 심화: SVG 요소별 Reanimated 애니메이션으로 캐릭터를 구현하고, Lottie 라이브러리까지 활용하며 모바일 애니메이션 기법을 폭넓게 익혔다.
- 다양한 협업 스타일 경험: 3명의 백엔드 팀원과 각각 다른 방식(알고리즘 공동 설계, API 문서 기반 티키타카, AI 워크플로 문서 공유)으로 협업하며 상황에 맞는 소통 방식을 찾는 능력을 키웠다.
- 백엔드 개발자의 사고방식 체득: Java GC 원리, Spring vs Node.js vs MongoDB의 차이를 잘하는 백엔드 개발자와의 대화로 배우며, 코드 하나하나의 실행 방식을 뜯어보는 사고 습관을 이해하게 되었다.`,
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
  thumbnail: new URL("../../assets/icons/Codebite.png", import.meta.url).href,
  github: "https://github.com/CodeBiteApp/frontend",
  demo: null,
  youtube: "https://youtube.com/shorts/AqkF0Z2CXk0?feature=share",
  period: "2026.03 ~ 2026.06",
  status: "ended",
  gradient: "linear-gradient(135deg, #111111 0%, #1c1c1c 50%, #252525 100%)",
};
