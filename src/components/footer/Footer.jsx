import "./footer.css";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footerContent">
                <div className="footerCol col1">
                    <h1 className="footerColTitle">Rechtliches</h1>
                    <a className="footerLink" href="/impressum" aria-label="Gehe zu Impressum">Impressum</a>
                </div>
            </div>
            <div className="flowefyBanner">
                <p className="flowefyBannerText">Designed & Delivered by <a href="https://flowefy.de" target="_blank" className="flowefy">flowefy.</a></p>
            </div>
        </footer>
    );
}