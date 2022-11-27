import './ahero.css'

const AHero = (props) => {
    return (
        <div class="main-body-section-div text-white relative">
				<div class="heading-main-body">
					<div class="main-body-heading-text absolute inset-0 flex items-center justify-center flex-col gap-4">
						<h1 class="heading-main-body-h1">Adopt Me</h1>
						<div class="heading-main-body-moto text-[20px] font-medium px-[30%]">
                        India’s stray animal population numbers nearly 90 million. However, India’s shelter system already faces population stress with less than 9 million animals. Be a part of our mission by adopting a pet today and spread love and care.
						</div>
					</div>
				</div>
			</div>
    );
}

export default AHero;