import "./banner.css"

const Banner = () => {
    return (
        <div className="donate-container w-[100%]">
            <div className="title min-h-[200px] relative">
                <div className="donate-overlay absolute inset-0 bg-green-600 opacity-[50%]"></div>
                <div className="absolute inset-0 flex items-center">
                    <h1 className="header w-[100%] text-white text-6xl text-center">DONATE</h1>
                    </div>

            </div>
        </div>
    );
}

export default Banner;    