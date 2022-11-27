import Logo from "../../assets/Baby Taylor Finn.png"
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <header class="header text-gray-400 bg-header-offwhite body-font flex flex-row items-center justify-center lg:justify-around bg-slate-400 min-h-[88px]" id="header">
			<div class="flex flex-row items-center md:flex-row md:items-center p-2" id="logo">
				<a class="logo-border" href="index.html">
					{/* <img class="rounded-full logo-size" src={Logo} alt="logo"/> */}
				</a>
			</div>
			<button data-collapse-toggle="navbar-default" type="button" class="absolute top-4 right-4 sm:inline-flex sm:items-center p-2 lg:hidden focus:outline-none text_4 text-white" aria-controls="navbar-default" aria-expanded="false" id="nav-button">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
				</svg>
			</button>
			<nav class="">
				<div class="hidden w-full lg:block z-0" id="navbar">
					<ul class="w-[100vw] h-1/2 top-0 right-0 p-4 text-center space-y-8 lg:space-y-0 lg:space-x-3 lg:static lg:w-auto flex flex-col rounded-lg border border-gray-100 items-center lg:bg-transparent lg:border-0 lg:flex-row justify-center">
						<li>
							<Link to="/" class="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item text-white turn-yellow-hover">Home</Link>
						</li>
						<li>
							<Link to="/adopt" class="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item text-white turn-yellow-hover">Adopt</Link>
						</li>
						<li>
							<Link to="/donate" class="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item text-white turn-yellow-hover">Donate</Link>
						</li>
						<li>
							<Link to="/rescue" class="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item text-white turn-yellow-hover">Rescue</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
    );
}

export default NavBar;