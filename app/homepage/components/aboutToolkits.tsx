'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export const AboutToolkits = ()=>{

    return <div>
        <div className="container">
            
            <div className="fancy-feature-toolkit pt-20 pb-20">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <h2 className=" text-[50px] md:text-[26px] font-bold text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#333]">About Toolkit</h2>
                    </div>
                </div>
                <Tabs defaultValue="howuse" className="w-full">
                    <TabsList >
                        <TabsTrigger value="howuse" className=" bg-[#2c7ebe] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-white m-0 rounded-none border-b-[5px] border-b-transparent border-0 border-solid lg:text-[17px] lg:p-[30px_60px] md:text-[17px] md:p-[15px_30px] sm:text-[17px] sm:p-[22px_15px] xsm:text-[17px] xsm:p-[22px_15px]">
                            {/* <div className="relative before:w-6 before:h-16 before:bg-amber-500 before:content before:absolute before:mt-[-10px] before:bg-[#F3F7F8] before:left-[50%] before:top-[75px] before:[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"><h4>How to use the toolkit</h4></div> */}
                            <h4>How to use the toolkit</h4>
                        </TabsTrigger>
                        <TabsTrigger value="whenuse" className="relative bg-[#fec131] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-white m-0 rounded-none border-b-[5px] border-b-transparent border-0 border-solid lg:text-[17px] lg:p-[30px_60px] md:text-[17px] md:p-[15px_30px] sm:text-[17px] sm:p-[22px_15px] xsm:text-[17px] xsm:p-[22px_15px]">
                        {/* <div className="relative before:w-6 before:h-16 before:bg-amber-500 before:content before:absolute before:mt-[-10px] before:bg-[#F3F7F8] before:left-[50%] before:top-[75px] before:[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"><h4>When to use the toolkit</h4></div> */}
                        <h4>When to use the toolkit</h4>
                        </TabsTrigger>
                        <TabsTrigger value="whattoolkit" className="relative bg-[#6ac9d1] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-white m-0 rounded-none border-b-[5px] border-b-transparent border-0 border-solid lg:text-[17px] lg:p-[30px_60px] md:text-[17px] md:p-[15px_30px] sm:text-[17px] sm:p-[22px_15px] xsm:text-[17px] xsm:p-[22px_15px]">
                        {/* <div className="relative before:w-6 before:h-16 before:bg-amber-500 before:content before:absolute before:mt-[-10px] before:bg-[#F3F7F8] before:left-[50%] before:top-[75px] before:[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"><h4>What the toolkit does not do</h4></div>  */}
                        <h4>What the toolkit does not do</h4>
                        </TabsTrigger>
                        {/* <ul className="nav nav-tabs block flex justify-between border overflow-hidden text-center rounded-[15px] border-solid border-[#f3f3f3] flex-wrap mb-0 pl-0">
                            <li className="nav-item w-[33.33333%] relative border-r-[#f3f3f3] border-r border-solid before:content-['\f285'] before:w-10 before:h-10 before:border before:text-center before:leading-[38px] before:text-[14px] before:absolute before:-translate-y-1/2 before:z-[1] before:rounded-[50%] before:border-solid before:border-[#EAE7E7] before:-right-5 before:top-2/4 last:border-0 last:before:hidden before:font-Bootstrap before:bg-white sm:w-full sm:border-r-0 sm:border-b-[#f3f3f3] sm:border-b sm:border-solid xsm:w-full xsm:border-r-0 xsm:border-b-[#f3f3f3] xsm:border-b xsm:border-solid md:before:w-[35px] md:before:h-[35px] md:before:leading-[35px] sm:before:w-[35px] sm:before:h-[35px] sm:before:leading-[35px] xsm:before:w-[35px] xsm:before:h-[35px] xsm:before:leading-[35px] sm:bottom-[-17px] sm:-translate-x-2/4 sm:before:translate-y-0 sm:before:rotate-90 sm:before:left-2/4 sm:before:top-auto xsm:before:bottom-[-17px] xsm:before:-translate-x-2/4 xsm:before:translate-y-0 xsm:before:rotate-90 xsm:before:left-2/4 xsm:before:top-auto">
                                
                            </li>
                            <li className="nav-item w-[33.33333%] relative border-r-[#f3f3f3] border-r border-solid before:content-['\f285'] before:w-10 before:h-10 before:border before:text-center before:leading-[38px] before:text-[14px] before:absolute before:-translate-y-1/2 before:z-[1] before:rounded-[50%] before:border-solid before:border-[#EAE7E7] before:-right-5 before:top-2/4 last:border-0 last:before:hidden before:font-Bootstrap before:bg-white sm:w-full sm:border-r-0 sm:border-b-[#f3f3f3] sm:border-b sm:border-solid xsm:w-full xsm:border-r-0 xsm:border-b-[#f3f3f3] xsm:border-b xsm:border-solid md:before:w-[35px] md:before:h-[35px] md:before:leading-[35px] sm:before:w-[35px] sm:before:h-[35px] sm:before:leading-[35px] xsm:before:w-[35px] xsm:before:h-[35px] xsm:before:leading-[35px] sm:bottom-[-17px] sm:-translate-x-2/4 sm:before:translate-y-0 sm:before:rotate-90 sm:before:left-2/4 sm:before:top-auto xsm:before:bottom-[-17px] xsm:before:-translate-x-2/4 xsm:before:translate-y-0 xsm:before:rotate-90 xsm:before:left-2/4 xsm:before:top-auto">
                                
                            </li>
                            <li className="nav-item w-[33.33333%] relative border-r-[#f3f3f3] border-r border-solid before:content-['\f285'] before:w-10 before:h-10 before:border before:text-center before:leading-[38px] before:text-[14px] before:absolute before:-translate-y-1/2 before:z-[1] before:rounded-[50%] before:border-solid before:border-[#EAE7E7] before:-right-5 before:top-2/4 last:border-0 last:before:hidden before:font-Bootstrap before:bg-white sm:w-full sm:border-r-0 sm:border-b-[#f3f3f3] sm:border-b sm:border-solid xsm:w-full xsm:border-r-0 xsm:border-b-[#f3f3f3] xsm:border-b xsm:border-solid md:before:w-[35px] md:before:h-[35px] md:before:leading-[35px] sm:before:w-[35px] sm:before:h-[35px] sm:before:leading-[35px] xsm:before:w-[35px] xsm:before:h-[35px] xsm:before:leading-[35px] sm:bottom-[-17px] sm:-translate-x-2/4 sm:before:translate-y-0 sm:before:rotate-90 sm:before:left-2/4 sm:before:top-auto xsm:before:bottom-[-17px] xsm:before:-translate-x-2/4 xsm:before:translate-y-0 xsm:before:rotate-90 xsm:before:left-2/4 xsm:before:top-auto">
                                
                            </li>
                        </ul> */}
                        
                    </TabsList>
                    <TabsContent value="howuse" className="relative lg:mt-10 md:mt-20 sm:mt-20 xsm:mt-20">
                        <div className="p-[4%] rounded-[20px] bg-[#F3F7F8]">
                            <p className="mb-[20px]">The toolkit is divided into four sections to help you navigate to the parts that are most relevant to you:</p>
                            <ul className="pl-[50px]">
                                <li className="p-[10px] list-decimal">Laying the foundations explains approaches and principles that need to underpin projects related to PVE, including conflict and gender sensitivity.</li>
                                <li className="p-[10px] list-decimal">Building the framework offers tools for identifying factors of vulnerability and resilience to violent extremism in the project context, building theories of change, and developing indicators and monitoring.</li>
                                <li className="p-[10px] list-decimal">Monitoring strategy and data collection provides guidance and tools on developing a monitoring strategy and discusses and compiles different data collection methods.</li>
                                <li className="p-[10px] list-decimal">Evaluation using the learning provides details on evaluating PVE projects.</li>
                            </ul>
                            <p className="mt-[20px]">Some of these tools can be used independently, others work best when they are used together. At the beginning of each tool, there is information on the tool’s purpose, how and when to use the tool, and which other tools it can be used in conjunction with.</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="whenuse" className="relative lg:mt-10 md:mt-20 sm:mt-20 xsm:mt-20">
                        <div className="p-[4%] rounded-[20px] bg-[#F3F7F8]">
                            <p>The toolkit is designed for use in-house and with partners and beneficiaries at any stage before or during your programming.</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="whattoolkit" className="relative lg:mt-10 md:mt-20 sm:mt-20 xsm:mt-20">
                        <div className="p-[4%] rounded-[20px] bg-[#F3F7F8]">
                            <p className="mb-[20px]">This is not a guide to general monitoring and evaluation. The toolkit is intended to complement and be used with existing tools and resources, such as the M&E handbook and ToC guidance, which provide more detail on general M&E tools and good practice.</p>
                            <p>The tools described here are not blueprints but need to be adapted to both the different types of programming and different country and programming contexts. Use your own judgement, skill and experience in deciding whether to use or adapt any tool.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>

}

export default AboutToolkits