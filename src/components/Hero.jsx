export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          프론트엔드 개발자
        </div>
        <h1 className="hero-title">황호태</h1>
        <p className="hero-title-sub">Frontend Developer</p>
        <p className="hero-desc">
          사용자 관점에서 편리한 경험을 만드는 개발자입니다. 작동하는 UI를 넘어
          흐름과 맥락까지 고민하며, 협업과 코드 품질을 중요하게 생각합니다.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            프로젝트 보기
          </a>
          <a href="#contact" className="btn-secondary">
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
