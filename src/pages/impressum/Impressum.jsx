import "./impressum.css";

export default function ImpressumPage() {
    return(
        <div className="page impressumPage">
            <div className="pageContent">
                <div className="impressumBox">
                    <h1 className="title">Impressum</h1>
                    <h2 className="subtitle">Angaben gemäß § 5 TMG:</h2>
                    <img className="grahmWappen" src="/grahm_wappen.webp" alt="Familieanwappen von Colin Grahm" />
                    <p className="adress text">
                        <span className="cgName">Colin Grahm</span><br/>
                        Schwedenstraße 29A<br/>
                        04420 Markranstädt<br/>
                    </p>
                    <p className="contact text">
                        Tel: <a href="tel:017624693418">Anrufen</a><br/>
                        Email: <a href="mailto:colingrahmmedia@gmail.com" aria-label="Email an colingrahmmedia@gmail.com senden" >Email schreiben</a><br/>
                    </p>
                </div>
            </div>
        </div>
    );
}