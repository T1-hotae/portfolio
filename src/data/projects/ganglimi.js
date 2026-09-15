export const ganglimi = {
  id: "ganglimi",
  title: "강림이",
  subtitle: "강남대 공지·알림 통합 앱 · 우수상 수상 · 실사용자 800명",
  description:
    "분산된 교내 공지를 한 화면에서 탐색하고, 카테고리 구독 기반 푸시 알림으로 핵심 공지를 놓치지 않도록 돕는 모바일 통합 서비스. App Store · Google Play 출시, 실사용자 800명 확보.",
  longDescription: `분산된 강남대학교 교내 공지를 한 화면에서 탐색하고, 카테고리 구독 기반 푸시 알림으로 핵심 공지를 놓치지 않도록 돕는 모바일 통합 서비스입니다.

**개요**
- 기간: 2025.12 ~ 2026.01
- 팀 구성: 3인 (신인규 · 황주연 · 황호태)
- 역할: 팀장 · 총괄 기획 · 풀스택 (기획~개발 전 과정 주도, 팀 구성·예산·교수 컨펌 포함)
- 규모: 프론트 TypeScript 64개·약 9,500줄 / 백엔드 Python 34개·약 4,200줄 / 커밋 185개 중 내 커밋 131개
- 분류: 팀 프로젝트 · 동계방학 역량강화 프로젝트 우수상 + 장학금

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
- 실서비스는 완성이 끝이 아니라 출시 후 QA·피드백 반영·운영이 개발만큼 중요하다는 것을 체감했다.
- 비용을 고려한 인프라 의사결정을 직접 경험했다 (AWS → Oracle Cloud 이전).`,
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
  thumbnail: new URL("../../assets/icons/kangrimi.jpg", import.meta.url).href,
  github: "https://github.com/CampusNotice/Frontend",
  demo: null,
  appStore:
    "https://apps.apple.com/kr/app/%EA%B0%95%EB%A6%BC%EC%9D%B4/id6758569535",
  playStore:
    "https://play.google.com/store/apps/details?id=com.campusnotice.fe",
  youtube: "https://youtu.be/7wnbnJiUuUk?si=oWt6APnP3RjO4aQl",
  featured: true,
  impact: "실사용자 800명 · 우수상 수상",
  highlights: [
    "학사·장학·취업 등 분산 공지를 한 화면에 통합, 카테고리 구독 푸시 알림",
    "FastAPI 크롤링 파이프라인 자동화 + 이모티콘·표 구조 텍스트 파싱",
    "캠퍼스맵, 북마크, 다크모드 UI",
    "App Store·Google Play 정식 출시 후 실사용자 800명 확보, 지속 운영 중",
  ],
  period: "2025.12 ~ 2026.01",
  status: "live",
  gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
};
