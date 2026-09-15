export const dugomukgo = {
  id: "dugomukgo",
  title: "두고먹고",
  subtitle: "냉장고 식재료 관리 앱 · 배포 중단",
  description:
    "냉장고 식재료를 등록·관리하고, 보유 재료를 기반으로 만들 수 있는 레시피를 AI로 추천해 유통기한 낭비와 장보기 고민을 줄여주는 앱.",
  longDescription: `냉장고에 있는 식재료를 등록·관리하고, 보유 재료를 기반으로 만들 수 있는 레시피를 AI로 추천해 유통기한 낭비와 장보기 고민을 줄여주는 앱입니다.

**개요**
- 기간: 2025.12 ~ 2026.02
- 팀 구성: 2인 (정영훈 · 황호태)
- 역할: 프론트엔드 · 디자인
- 분류: 팀 프로젝트

**주요 기여**
- React Native(Expo) 기반 UI/UX 전체 구현
- Figma 활용: 앱 주요 기능의 사용자 플로우·기능 흐름도 설계 및 팀 공유
- 카메라 기능을 통한 이미지 캡처 및 AI Vision API(OCR) 연동
- 요청·응답 처리, 로딩/에러 핸들링, 결과 시각화 클라이언트 통합 구현

**기술 아키텍처**
- RN(Expo) ↔ FastAPI(Python, AI 레시피 추천 API) ↔ PostgreSQL / Push(유통기한 알림)

**배운 점**
- API 명세서를 기준으로 백엔드와 협업하는 과정을 경험했다.
- AI Vision API(OCR·이미지 분석)를 클라이언트에 직접 통합해봤다.`,
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
  thumbnail: new URL("../../assets/icons/Domeok2.png", import.meta.url).href,
  github: "https://github.com/T1-hotae/domeok-public",
  demo: null,
  youtube: null,
  period: "2025.12 ~ 2026.02",
  status: "ended",
  gradient: "linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 50%, #1a1a2e 100%)",
};
