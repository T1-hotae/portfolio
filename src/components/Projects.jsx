import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function getYoutubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

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

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    if (selected) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="projects" className="section">
      <p className="section-label">Projects</p>
      <h2 className="section-heading">프로젝트</h2>
      <p className="projects-intro">
        카드를 클릭하면 프로젝트 설명과 기술 스택을 확인할 수 있습니다.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            {getYoutubeEmbedUrl(selected.youtube) ? (
              <div className="modal-video">
                <iframe
                  src={getYoutubeEmbedUrl(selected.youtube)}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="modal-thumb" style={{ background: selected.gradient }}>
                {selected.thumbnail && (
                  <img src={selected.thumbnail} alt={selected.title} className="modal-thumb-img" />
                )}
              </div>
            )}
            <div className="modal-body">
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="닫기">✕</button>
              <p className="overlay-period">{selected.period}</p>
              <h3 className="overlay-title">{selected.title}</h3>
              {selected.subtitle && <p className="overlay-subtitle">{selected.subtitle}</p>}
              <p className="overlay-desc">{selected.description}</p>
              {selected.tech.length > 0 && (
                <div className="overlay-tech">
                  {selected.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              )}
              <div className="overlay-links">
                <Link
                  to={`/projects/${selected.id}`}
                  className="overlay-link primary"
                  onClick={() => setSelected(null)}
                >
                  자세히 보기 <ArrowIcon />
                </Link>
                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
                    <GithubIcon /> GitHub
                  </a>
                )}
                {selected.appStore && (
                  <a href={selected.appStore} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
                    App Store
                  </a>
                )}
                {selected.playStore && (
                  <a href={selected.playStore} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
                    Google Play
                  </a>
                )}
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="overlay-link secondary">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
