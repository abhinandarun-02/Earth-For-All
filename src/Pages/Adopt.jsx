import NavBar from "../Components/NavBar/Navbar";
import Footer from "../Components/Home/Footer";
import AHero from "../Components/Adopt/AHero";
import Rules from "../Components/Adopt/guidelines";
import Form from "../Components/Adopt/Form";

const Adopt = () => {
    return ( 
        <div>
        <NavBar />
        <AHero title={"Adopt Me"} desc={"India’s stray animal population numbers nearly 90 million. However, India’s shelter system already faces population stress with less than 9 million animals. "}/>
        <Form/>
        <Rules />
        <Footer />
        </div>
     );
}
 
export default Adopt;