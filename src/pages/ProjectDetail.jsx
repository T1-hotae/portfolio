import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

function parseMarkdown(text) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**"))
      return <h4 key={i} className="detail-subheading">{line.slice(2, -2)}</h4>;
    if (line.startsWith("- "))
      return <li key={i}>{line.slice(2)}</li>;
    if (line === "")
      return <br key={i} />;
    return <p key={i}>{line}</p>;
  });
}

function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
  return match ? match[1] : null;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="detail-page">
        <div className="container">
          <p style={{ color: "var(--text-sub)" }}>프로젝트를 찾을 수 없습니다.</p>
          <Link to="/" className="btn-secondary" style={{ marginTop: 24 }}>홈으로</Link>
        </div>
      </main>
    );
  }

  const youtubeId = getYouTubeId(project.youtube);

  return (
    <main className="detail-page">
      <div className="container">
        <div className="detail-back">
          <Link to="/" className="back-link">← 목록으로</Link>
        </div>

        <div className="detail-header">
          <div>
            <span className="detail-period">{project.period}</span>
            <h1 className="detail-title">{project.title}</h1>
            {project.subtitle && <span className="detail-badge">{project.subtitle}</span>}
          </div>
          <div className="detail-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
                <GithubIcon /> GitHub
              </a>
            )}
            {project.appStore && (
              <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
                App Store
              </a>
            )}
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
                Google Play
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                배포 링크
              </a>
            )}
          </div>
        </div>

        {youtubeId ? (
          <div className="detail-video">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={`${project.title} 시연 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="detail-video-placeholder">
            시연 영상은 추후 업데이트 예정입니다.
          </div>
        )}

        <div className="detail-body">
          <div className="detail-description">
            <ul className="detail-md-list">
              {parseMarkdown(project.longDescription)}
            </ul>
          </div>
          <div className="detail-tech-wrap">
            <h3>기술 스택</h3>
            <ul className="tech-tags">
              {project.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
