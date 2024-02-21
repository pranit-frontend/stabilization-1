'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export const SectionOne = ()=>{

    return <div>
        
        <Tabs defaultValue="assessment" className="w-full">
                    <TabsList >
                        <TabsTrigger value="assessment" className="relative bg-[#ffffff] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-dark m-0 rounded-s-lg active:text-baseColor rounded-s-md shadow-slate-700 border bg-white mx-[2px] py-2 px-4 hover:bg-gray-50 peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out">
                            <h4>1</h4>
                        </TabsTrigger>
                        <TabsTrigger value="decision" className="relative bg-[#ffffff] nav-link w-full h-full text-[22px] capitalize leading-[1.41em] text-dark m-0 rounded-s-lg active:text-baseColor rounded-s-md shadow-slate-700 border bg-white mx-[2px] py-2 px-4 hover:bg-gray-50 peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out">
                            <h4>2</h4>
                        </TabsTrigger>
                        
                    </TabsList>
                    <TabsContent value="assessment" className="relative">
                        <div className="p-[4%] rounded-s-lg bg-[#F3F7F8]">
                            <a href="#"><h3 className="mb-[20px] text-2xl text-sky-400 font-semibold">Assessment of Authority / Security / Other Factors</h3></a>
                            <p>
                                Programming should begin with a robust analysis of what is happening on the ground and why, using this to inform programming to ensure that interventions 'do no harm' and support mechanisms that prevent conflict and build peace
                            </p>
                        </div>
                    </TabsContent>
                    <TabsContent value="decision" className="relative">
                        <div className="p-[4%] rounded-s-lg bg-[#F3F7F8]">
                            <a href="#"><h3 className="mb-[20px] text-2xl text-sky-400 font-semibold">Decision on Engagement</h3></a>
                            <p>Ensure that there is a clear and shared understanding with UNDP and government and civil society partners of what PVE is from the outset.</p>
                        </div>
                    </TabsContent>
                </Tabs>
    </div>

}

export default SectionOne