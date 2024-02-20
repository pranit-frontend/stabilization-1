'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export const ItemOne = ()=>{

    return <div>
        
        <Tabs defaultValue="howuse" className="w-full">
                    <TabsList >
                        <TabsTrigger value="howuse" className="relative bg-[#ffffff] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-dark m-0 rounded-s-lg rounded-s-md shadow-slate-700 border bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out">
                            <h4>1</h4>
                        </TabsTrigger>
                        <TabsTrigger value="whenuse" className="relative bg-[#ffffff] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-dark m-0 rounded-s-lg rounded-s-md shadow-slate-700 border bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out">
                            <h4>2</h4>
                        </TabsTrigger>
                        <TabsTrigger value="whattoolkit" className="relative bg-[#ffffff] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-dark m-0 rounded-s-lg rounded-s-md shadow-slate-700 border bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out">
                            <h4>3</h4>
                        </TabsTrigger>
                        
                    </TabsList>
                    <TabsContent value="howuse" className="relative">
                        <div className="p-[4%] rounded-s-lg bg-[#F3F7F8]">
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
                    <TabsContent value="whenuse" className="relative">
                        <div className="p-[4%] rounded-s-lg bg-[#F3F7F8]">
                            <p>The toolkit is designed for use in-house and with partners and beneficiaries at any stage before or during your programming.</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="whattoolkit" className="relative">
                        <div className="p-[4%] rounded-s-lg bg-[#F3F7F8]">
                            <p className="mb-[20px]">This is not a guide to general monitoring and evaluation. The toolkit is intended to complement and be used with existing tools and resources, such as the M&E handbook and ToC guidance, which provide more detail on general M&E tools and good practice.</p>
                            <p>The tools described here are not blueprints but need to be adapted to both the different types of programming and different country and programming contexts. Use your own judgement, skill and experience in deciding whether to use or adapt any tool.</p>
                        </div>
                    </TabsContent>
                </Tabs>
    </div>

}

export default ItemOne