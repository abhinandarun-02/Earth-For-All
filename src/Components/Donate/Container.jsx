import DCard from "./DonationCard";

const Container = () => {
    const data = [{
        title: "Be for pets",
        caption: "feed them with a smile",
        desc: "provide the hungry lifes in the streets and our shelter with food for a day and make them happy",
    }, {
        title: "Be for pets",
        caption: "Care them for good",
        desc: "provide the expense of a pet for a month on its food and medical care. The pet may be a dog, cat, bird, or any other animal admitted to our shelter"
    }]
    return (
        <div className="py-8 lg:px-40">
            {data.map((item, index) => {
                return <DCard key={index} title={item.title} caption={item.caption} desc={item.desc} />
            }
            )}
        </div>
    );
}

export default Container;