import "./heroSection.css";

export default function HeroSection() {
    return (
        <section className="section homeHeroSection">
            <div className="sectionContent homeHeroContent">
                <span className="subtitle homeHeroSubtitle">Hallo <span className="winkhand">👋</span>, ich bin</span>
                <h1 className="heroTitle">COLIN GRAHM</h1>
                <a className="heroCTAButton" href="#personalSection">Lern mich kennen <i className="bi bi-arrow-right"></i></a>
            </div>
        </section>
    );
}
