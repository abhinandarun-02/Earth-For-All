const DCard = (props) => {
    return (
        <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
            <div class=" px-10 py-10 m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
                <img class="h-10 rounded-[6px]" src="data:image/png;base64,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" alt="Workcation logo" />
                <img class="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl rounded-[6px]" src="https://www.myaccelerate.io/assets/utilities/image/epa.jpg" alt="Ad- woman on a beach" />

                <h1 class="mt-5 font-bold text-lg lg:mt-7">{props.title}</h1>
                <h1 class="font-bold text-lg text-gray-600">{props.caption}</h1>
                <h1 class="text-lg text-gray-600 text-justify pt-2">
                {props.desc }
                </h1>
                <button class="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">Donate Now</button>
            </div>

            <div class="hidden relative lg:block  lg:col-span-3">
                <img class="my-8 absolute inset-0 w-full h-full object-cover object-center rounded-[6px]" src="https://www.myaccelerate.io/assets/utilities/image/epa.jpg" alt="Ad- woman on a beach" />
            </div>
        </div>
    );
}

export default DCard;