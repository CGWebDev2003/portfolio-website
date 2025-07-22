
import "./header.css";

export default function Header() {
    return(
        <header className="header">
            <div className="headerContent">
                <a href="/" className="logo" aria-label="Gehe zur Homepage">
                    <img src="/cg_signature_black.webp" className="logoImage" alt="Colin Grahm Signatur Logo" />
                </a>
                <div className="headerButtonBox">
                    <a className="headerSocialButton" target="_blank" href="https://www.instagram.com/colin_grahm/">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="headerSocialButton" target="_blank" href="https://www.linkedin.com/in/colin-grahm-a79422252/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="headerSocialButton" target="_blank" href="https://github.com/CGWebDev2003">
                        <i class="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}