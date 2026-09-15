export const moyo = {
  id: "moyo",
  title: "모요",
  subtitle: "커뮤니티 웹 서비스 · 배포 중단",
  description:
    "Slack·밴드 UX를 참고해 커뮤니티 서비스의 UI/UX를 개선, 게시물·실시간 채팅·캘린더 기능을 통합한 웹 서비스. 배포 자동화까지 포함한 운영 환경 구성.",
  longDescription: `Slack·밴드의 UX를 분석하고 이를 개선한 커뮤니티 웹 서비스를 구축한 프로젝트입니다.

**개요**
- 기간: 2025.09 ~ 2025.12 (2025.09.10 ~ 2025.12.06)
- 팀 구성: 3인 (신소연 · 이유정 · 황호태, 개발 경험 전무한 학생들로 구성)
- 역할: 풀스택 (기여도 60~80%)
- 분류: 팀 프로젝트

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

**추후 보완 과제**
- 게시물 기능 고도화 (좋아요, 댓글, 동영상 첨부, 투표)
- 캘린더 UI/UX 재설계
- 더보기 탭 미구현 기능 완성

**배운 점**
- 애자일 협업 프로세스: 일일 스크럼·스프린트 계획으로 팀 개발의 흐름을 체득했다.
- Shadcn/UI·TailwindCSS 기반으로 UI를 구성하는 경험을 쌓았다.
- 풀스택 역량 확장: 프론트에서 시작해 백엔드·배포·운영까지 직접 맡으며 서비스 전체 흐름을 익혔다.`,
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
  thumbnail: new URL("../../assets/icons/moyo.png", import.meta.url).href,
  github: "https://github.com/Moyo-project/Moyo_front",
  demo: null,
  youtube: "https://youtu.be/EiS4uzRdQ9s?si=PsaotVYH29RZe28P",
  period: "2025.09 ~ 2025.12",
  status: "ended",
  gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
};
