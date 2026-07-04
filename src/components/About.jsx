import img1 from "../assets/profiles/img1.jpg";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "HTML & CSS",
];

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">About</p>
      <h2 className="section-heading">소개</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            안녕하세요. <strong>강남대학교 소프트웨어응용학부</strong>에 재학
            중인 프론트엔드 개발자 황호태입니다. (GPA 4.31 / 4.5)
          </p>
          <p>
            사람들의 불편을 발견하면 지나치지 않고, 직접 서비스로 만들어
            해결하는 개발자입니다. 흩어진 학교 공지를 놓쳐 기회를 잃었던 경험을
            계기로 대학 알림 앱 &lsquo;강림이&rsquo;를 React Native로 개발해
            출시했고, 현재 800명의 사용자가 이용하며 지속적으로 피드백을 반영해
            운영하고 있습니다.
          </p>
          <p>
            단순히 기능을 구현하는 것을 넘어, 사용자가 직관적으로 사용할 수 있는
            인터페이스를 만들어갑니다. 협업 과정에서는 문제를 빠르게 정리해
            공유하고, 코드 품질과 유지보수성을 높이는 작업을 적극적으로
            맡습니다.
          </p>
          <p>주로 사용하는 기술 스택입니다.</p>
          <div className="skills-grid">
            {skills.map((s) => (
              <span className="skill-tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="about-image-wrap">
          <img src={img1} alt="황호태" className="about-img" />
        </div>
      </div>
    </section>
  );
}
