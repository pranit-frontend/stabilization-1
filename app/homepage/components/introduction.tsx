'use client'

export const Introduction = ()=>{

    return <div className="bg-secondary">
        <div className="container">
            <div className="pt-20 pb-20 flex flex-wrap">
                <div className="grid w-full gap-5 md:grid-cols-2">
                    <div className="w-3/4 p-6">
                        <div className="mb-[20px]">
							 <h2 className="text-[#282e3f] text-[50px] font-bold">About Us</h2>
							 <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,</p>
							 <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]"> and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
							 <div className="mb-[50px] col:mb-[20px]">
								 <a href="about.html" className="bg-[#0468B1] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#00add8]
								 col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
								 ">More About Us..</a>
							 </div>
						 </div>
                    </div>
                    <div className="w-1/4 p-6">
                        <div className="relative mb-[20px] flex items-center justify-end">
							<div className=" relative max-w-[520px] before:absolute before:bg-[#0468B1] before:w-full before:h-full before:content-[''] before:-z-10 before:left-[-20px] before:top-[-20px] ">
							   <img className="w-full" src="assets/images/about.jpg" />
							   
							   <div className="absolute left-0 top-0 w-full h-full transition-all ease-in-out flex justify-center flex-col text-center z-[99]">
								
                                    <ul>
                                        <li>
                                            <a href="https://www.youtube.com/embed/uQBL7pSAXR8?autoplay=1" className="video-btn" data-type="iframe">
                                                {/* <i className="fa fa-play border border-white p-[20px] rounded-full text-white"></i> */}
                                                
                                            </a>
                                        </li>
                                    </ul>
                                </div>
							</div>
						</div>
                    </div>
                </div>
            </div>  
        </div>
    </div>

}

export default Introduction