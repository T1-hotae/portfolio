export const yeflix = {
  id: "yeflix",
  title: "Yeflix",
  subtitle: "개인 영화 감상 일기 서비스 · 서비스 중",
  description:
    "영화를 검색하고 OTT 플랫폼 바로가기를 확인하며, 별점·관람 날짜·태그가 포함된 감상 일기를 남길 수 있는 개인 영화 기록 서비스.",
  longDescription: `영화를 보기 시작한 후 감상문을 직접 기록하고 싶어서 만들게 된 개인 프로젝트입니다.

**개요**
- 기간: 2026.03 ~ 2026.04
- 팀 구성: 1인
- 역할: 기획 · 디자인 · 개발 전 과정 단독 수행
- 분류: 개인 프로젝트

**주요 기능**
- 현재 상영 중·인기·개봉 예정 영화 목록 조회 (TMDB API)
- 제목 기반 영화 검색
- 영화 상세: 포스터, 장르, 상영시간, 감독, 출연진, TMDB 평점
- OTT 바로가기: Netflix·Disney+·Watcha 등 국내 스트리밍 링크 (JustWatch 데이터)
- 볼영화 찜 북마크 저장
- 감상 일기: 별점·관람 날짜·감상문·태그 포함, 작성·수정·삭제
- Google 계정 소셜 로그인

**핵심 설계 포인트**
- Firestore 합성 키 전략: 문서 ID를 \`\${userId}_\${movieId}\`로 구성해 "영화당 일기·찜 1개" 제약을 스키마 레벨에서 자연스럽게 구현 (upsert 패턴)
- 복합 인덱스 회피: 정렬을 클라이언트 사이드로 위임해 Firestore 인덱스 비용 절감 — 소규모 개인 프로젝트에 적합한 트레이드오프를 의식적으로 선택
- 단일 fetcher 패턴: TMDB API 요청을 하나의 fetcher 함수로 감싸 api_key·language 파라미터를 공통 주입

**기술 아키텍처**
- 프론트엔드: Next.js 14 (App Router), Tailwind CSS
- 데이터·인증: Firebase Authentication (Google 로그인), Firestore (일기·찜 데이터)
- 외부 연동: TMDB API (영화 정보·OTT 정보)

**배운 점**
- Firebase Auth + Firestore로 인증과 데이터 관리 전반을 직접 구성해봤다.
- 외부 API(TMDB) 연동과 래퍼 함수 설계를 경험했다.
- 트레이드오프를 의식적으로 선택하는 설계 감각을 익혔다 (인덱스 비용 vs 클라이언트 정렬).
- 내가 직접 쓰는 서비스를 만들며 사용자 관점에서 지속적으로 개선하는 경험을 쌓았다.`,
  tech: ["Next.js", "Tailwind CSS", "Firebase", "TMDB API", "JavaScript"],
  thumbnail: new URL("../../assets/icons/yeflix.png", import.meta.url).href,
  github: "https://github.com/T1-hotae/yeflix",
  demo: "https://yeflix-diary.vercel.app",
  youtube: null,
  period: "2026.03 ~ 2026.04",
  status: "live",
  gradient: "linear-gradient(135deg, #1a0a0a 0%, #3d1515 50%, #1a0000 100%)",
};
