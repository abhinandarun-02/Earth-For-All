import NavBar from "../Components/NavBar/Navbar";
import Footer from "../Components/Home/Footer";
import AHero from "../Components/Adopt/AHero";
import Rules from "../Components/Adopt/guidelines";
import Form from "../Components/Adopt/Form";

const Adopt = () => {
    return ( 
        <div>
        <NavBar />
        <AHero title={"Adopt Me"} desc={"India’s stray animal population numbers nearly 90 million. However, India’s shelter system already faces population stress with less than 9 million animals. SAFI’s work finding forever homes for these neglected animals not only gives each pet the love they deserve but frees up critically important housing and veterinary capacity for those remaining in shelters."}/>
        <Form/>
        <Rules />
        <Footer />
        </div>
     );
}
 
export default Adopt;