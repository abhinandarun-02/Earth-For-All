import DCard from "./DonationCard";

const Container = () => {
    const data = [{
        title: "Be for pets",
        caption: "Get started with small steps",
        desc: "The earth is not just for humans. With every rupee you Donate, it helps some animal in need. Donate now and help us save the animals."
    }, {
        title: "Be for pets",
        caption: "Get started with small steps",
        desc: "The earth is not just for humans. With every rupee you Donate, it helps some animal in need. Donate now and help us save the animals."
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