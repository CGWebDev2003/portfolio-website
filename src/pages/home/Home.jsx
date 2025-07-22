import HeroSection from "./sections/heroSection/HeroSection";
import MenuButton from "../../components/menuButton/MenuButton";
import "./home.css";

export default function HomePage() {
    return(
        <div className="page homePage">
            <MenuButton />
            <HeroSection />
        </div>
    );
}