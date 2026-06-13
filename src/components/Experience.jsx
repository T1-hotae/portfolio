import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Experience</p>
      <h2 className="section-heading">경험</h2>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-period">{exp.period}</div>
            <div className="exp-body">
              <div className="exp-dot" />
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-desc">
                {exp.description.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
