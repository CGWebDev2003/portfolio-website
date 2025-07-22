
import "./header.css";

export default function Header() {
    return(
        <header className="header">
            <div className="headerContent">
                <a href="/" className="logo" aria-label="Gehe zur Homepage">
                    <img src="/cg_signature_black.webp" className="logoImage" alt="Colin Grahm Signatur Logo" />
                </a>
                <nav className="headerNavigation">
                    <a className="headerNavLink" href="/" aria-label="Gehe zu Home-Seite">Home</a>
                </nav>
                <div className="headerButtonBox">
                    <a className="headerSocialButton" target="_blank" href="https://www.instagram.com/colin_grahm/" aria-label="Gehe zu Colin Grahm's Instagram" title="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="headerSocialButton" target="_blank" href="https://www.linkedin.com/in/colin-grahm-a79422252/" aria-label="Gehe zu Colin Grahm's LinkedIn" title="LinkedIn">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="headerSocialButton" target="_blank" href="https://github.com/CGWebDev2003" aria-label="Gehe zu Colin Grahm's Git Hub" title="GitHub">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}