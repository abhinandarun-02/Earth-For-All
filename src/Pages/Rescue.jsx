import NavBar from "../Components/NavBar/Navbar";
import Footer from "../Components/Home/Footer";
import AHero from "../Components/Adopt/AHero";

const Rescue = () => {
    return (
        <div>
            <NavBar />
            <AHero title={"Save  Me"} desc={"India’s animals face a culture of extreme abuse. We’re working to change that. The national government does not fund anti-cruelty initiatives and often abused animals undergo years of suffering due to the ignorance or malice of their owners."}/>
            <iframe src="https://form.typeform.com/to/kAzdXy5Q" className="w-[100%] h-[100vh] border-none">
        </iframe>
            <Footer />
        </div>
    );
}

export default Rescue;