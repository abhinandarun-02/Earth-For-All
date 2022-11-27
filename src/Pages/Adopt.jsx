import NavBar from "../Components/NavBar/Navbar";
import Footer from "../Components/Home/Footer";
import AHero from "../Components/Adopt/AHero";
import Rules from "../Components/Adopt/guidelines";
import Form from "../Components/Adopt/Form";

const Adopt = () => {
    return ( 
        <div>
        <NavBar />
        <AHero />
        <Form/>
        <Rules />
        <Footer />
        </div>
     );
}
 
export default Adopt;