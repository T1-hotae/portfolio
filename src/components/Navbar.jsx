import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = isHome
    ? [
        { label: "소개", num: "01", href: "#about" },
        { label: "경험", num: "02", href: "#experience" },
        { label: "프로젝트", num: "03", href: "#projects" },
        { label: "연락", num: "04", href: "#contact" },
      ]
    : [];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">HT.</Link>
        </div>
        <ul className={`nav-menu${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label} style={{ listStyle: "none" }}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                <span className="nav-num">{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
          {!isHome && (
            <li style={{ listStyle: "none" }}>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                홈으로
              </Link>
            </li>
          )}
        </ul>
        <button
          className="nav-toggle"
          aria-label="메뉴"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
