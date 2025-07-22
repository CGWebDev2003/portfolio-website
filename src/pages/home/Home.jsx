import HeroSection from "./sections/heroSection/HeroSection";
import "./home.css";

export default function HomePage() {
    return(
        <div className="page homePage">
            <HeroSection />
        </div>
    );
}