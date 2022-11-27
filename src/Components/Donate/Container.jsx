import DCard from "./DonationCard";

const Container = () => {
    const data = [{}]
    return ( 
        <div className="py-8 lg:px-40">
            <DCard />
            <DCard />
            <DCard />
        </div>
     );
}
 
export default Container;