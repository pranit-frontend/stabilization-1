import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


  
  

const Header = ()=>{

    return <div>
        
		<header className="relative z-[111]">
		  <div className="bg-[#0468B1] pt-[10px]">
			<div className="container">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/6">
						<div className="logo pb-10 md:w-80 md:mx-auto sm:w-180 col:w-160">
							<a href="index-2.html" className="text-45 col:text-25 font-bold flex items-center text-white">
								<img className="" src="assets/images/logo/logo.png" alt="" />
							</a>
						</div>
					</div>
					<div className="md:w-5/6">
						<div className="relative">
							<div className="before:absolute before:w-full before:h-1 before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-['']">
								<div className="flex flex-col md:flex-row">
									<div className="md:w-9/12">
									
										<ul className="text-left">
											<li className=" text-white inline-block p-[15px]  col:pr-0 pl-0 col:pb-[0]">
												<a href="#">Forum</a>
											</li>
											<li className="relative text-white inline-block p-[15px]  col:pr-0
											before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] before:z-10 before:transform before:-translate-x-1/2 md:before:hidden">
												<a href="#">Gallery</a>
											</li>
											<li className="relative text-white inline-block p-[15px] col:pr-0  before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] md:before:hidden  before:z-10 before:transform before:-translate-x-1/2 ">
												<div>
													<button type="button" data-dropdown-toggle="dropdown" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-white shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
														Download Toolkit
														<svg width="25" height="25" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
														</svg>
														
													</button>
												</div>
												{/* <div className="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" id="dropdown" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
													<div className="py-1" role="none">
														<a href="#" className="text-[#282e3f] block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
														<a href="#" className="text-[#282e3f] block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
														<a href="#" className="text-[#282e3f] block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
													</div>
												</div> */}
												
											</li>
										</ul>
										
									</div>
									<div className="md:w-3/12">
										<div className="flex items-center justify-end md:justify-center md:mb-15">
											<a href="#" className="login-btn flex items-center justify-center text-blue mr-[15px] w-[40px] h-[40px] text-center rounded-[50%] bg-white">
												<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
													<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
												</svg>
											</a>
											<a href="#" className="signup-btn leading-[40px] text-[14px] inline-block capitalize font-semi-bold p-[0_28px] rounded-[55px] border-[2px] border-white text-white hover:text-blue hover:bg-white ts">SignUp</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
						<NavigationMenu>
							<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Introduction</NavigationMenuTrigger>
								<NavigationMenuContent>
								<NavigationMenuLink className="pt-3 w-48 inline-block">Origin</NavigationMenuLink>
								<NavigationMenuLink className="pt-3 w-48 inline-block">Approach</NavigationMenuLink>
								<NavigationMenuLink className="pt-3 w-48 inline-block">Partners / Beneficiaries / Human Rights</NavigationMenuLink>
								<NavigationMenuLink className="pt-3 w-48 inline-block">National / Local Authority</NavigationMenuLink>
								<NavigationMenuLink className="pt-3 w-48 inline-block">Focus on State and People</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Analysis of Approach</NavigationMenuTrigger>
								<NavigationMenuContent>
								<NavigationMenuLink className="pt-3 w-48 inline-block">Assessment of Authority / Security / Other Factors</NavigationMenuLink>
								<NavigationMenuLink className="pt-3 w-48 inline-block">Decision on Engagement</NavigationMenuLink>
								</NavigationMenuContent>
							</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
						</div>
					</div>
					</div>

				</div>
		  	</div>
		</header>

    </div>
}

export default Header