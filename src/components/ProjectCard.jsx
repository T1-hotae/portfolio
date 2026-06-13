export default function ProjectCard({ project, onClick }) {
  return (
    <div className="pcard" onClick={onClick}>
      <div className="pcard-thumb" style={{ background: project.gradient }}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="pcard-thumb-img" />
        ) : (
          <div className="pcard-gradient" style={{ background: project.gradient }} />
        )}
      </div>
      <div className="pcard-footer">
        <p className="pcard-period">{project.period}</p>
        <h3 className="pcard-title">{project.title}</h3>
        {project.subtitle && <span className="pcard-badge">{project.subtitle}</span>}
      </div>
    </div>
  );
}
