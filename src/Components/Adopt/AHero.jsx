import './ahero.css'

const AHero = (props) => {
    return (
        <div class="main-body-section-div text-white relative">
				<div class="heading-main-body">
					<div class="main-body-heading-text absolute inset-0 flex items-center justify-center flex-col gap-4">
						<h1 class="heading-main-body-h1">{props.title}</h1>
						<div class="heading-main-body-moto text-[20px] font-medium px-[30%]">{props.desc}
	                        
						</div>
					</div>
				</div>
			</div>
    );
}

export default AHero;