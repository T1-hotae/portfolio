import { Link } from "react-router-dom";

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function FeaturedProjectCard({ project, reverse }) {
  return (
    <div className={`featured-card${reverse ? " reverse" : ""}`}>
      <Link to={`/projects/${project.id}`} className="featured-thumb" style={{ background: project.gradient }}>
        {project.thumbnail && (
          <img src={project.thumbnail} alt={project.title} className="featured-thumb-img" />
        )}
      </Link>
      <div className="featured-body">
        <span className="featured-tag">대표 프로젝트</span>
        <p className="featured-period">{project.period}</p>
        <h3 className="featured-title">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        {project.subtitle && <p className="featured-subtitle">{project.subtitle}</p>}
        {project.impact && <p className="featured-impact">{project.impact}</p>}

        {project.highlights?.length > 0 && (
          <ul className="featured-highlights">
            {project.highlights.map((h) => (
              <li key={h}>
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="featured-tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="featured-links">
          <Link to={`/projects/${project.id}`} className="overlay-link primary">
            자세히 보기 <ArrowIcon />
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
              <GithubIcon /> GitHub
            </a>
          )}
          {project.appStore && (
            <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
              App Store
            </a>
          )}
          {project.playStore && (
            <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
              Google Play
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
