'use client'
import SectionOne from "@/app/homepage/components/sectionOne";
import SectionTwo from "@/app/homepage/components/sectionTwo";
import SectionThree from "@/app/homepage/components/sectionTwo";
import SectionFour from "@/app/homepage/components/sectionTwo";
export const FeaturesTypes = ()=>{

    return <div className="bg-secondary">
        <div className="container">
            <div className="pt-20 pb-20 flex flex-wrap">
                <div className="grid w-full md:grid-cols-2 gap-6"> 
                    <div className="relative w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/01.jpg')" }}>
                        <div className="mb-6 flex items-center justify-between">
                            <img src="assets/images/icons/icon-ch-1.gif"/>
                            <h5 className="absolute top-0 right-0 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 bg-primaryColor p-[15px_30px] text-white">
                                Evaluation / Analysis <br/>of Approach
                            </h5>
                        </div>
                        
                        <SectionOne/>
                    </div>
                    <div className="relative w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/02.jpg')" }}>
                        <div className="mb-6 flex items-center justify-between">
                            <img src="assets/images/icons/icon-ch-2.gif"/>
                            <h5 className="absolute top-0 right-0 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 bg-yellow p-[15px_30px] text-white">
                                Preparation of <br/>Country Officers
                            </h5>
                        </div>
                        
                        
                        <SectionTwo/>
                    </div>
                    <div className="relative w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/03.jpg')" }}>
                        <div className="mb-6 flex items-center justify-between">
                            <img src="assets/images/icons/icon-ch-3.gif"/>
                            <h5 className="absolute top-0 right-0 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 bg-cyan p-[15px_30px] p-3 text-white">
                                Programs
                            </h5>
                        </div>
                        <SectionThree/>
                    </div>
                    <div className="relative w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/04.jpg')" }}>
                        <div className="mb-6 flex items-center justify-between">
                            <img src="assets/images/icons/icon-ch-4_3.gif"/>
                            <h5 className="absolute top-0 right-0 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 bg-orange p-[15px_30px] p-3 text-white">
                                Management
                            </h5>
                        </div>
                        <SectionFour/>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default FeaturesTypes