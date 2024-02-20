'use client'
import ItemOne from "@/app/homepage/components/itemOne";
export const FeaturesTypes = ()=>{

    return <div className="bg-secondary">
        <div className="container">
            <div className="pt-20 pb-20 flex flex-wrap">
                <div className="grid w-full md:grid-cols-2 gap-6"> 
                    <div className="w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/01.jpg')" }}>
                        <div className="mb-6 flex items-center justify-between">
                            <img src="assets/images/icons/icon-ch-1.gif"/>
                            <h5 className="text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
                                LAYING THE FOUNDATIONS
                            </h5>
                        </div>
                        
                        <ItemOne/>
                    </div>
                    <div className="w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/02.jpg')" }}>
                        <h5 className="mb-6 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
                            LAYING THE FOUNDATIONS
                        </h5>
                        <div className="relative rounded-xl bg-white px-9 pb-14 pt-10" >
                            <div className="space-y-4 text-neutral-800">
                                <h3 className="font-bold text-2xl">Title</h3>
                                <div className="paragraph-l ">Subtitle Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perferendis doloremque expedita accusamus unde ab corrupti dicta eveniet ipsum possimus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/03.jpg')" }}>
                        <h5 className="mb-6 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
                            LAYING THE FOUNDATIONS
                        </h5>
                        <div className="relative rounded-xl bg-white px-9 pb-14 pt-10" >
                            <div className="space-y-4 text-neutral-800">
                                <h3 className="font-bold text-2xl">Title</h3>
                                <div className="paragraph-l ">Subtitle Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perferendis doloremque expedita accusamus unde ab corrupti dicta eveniet ipsum possimus.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full block rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" style={{ backgroundImage: "url('assets/images/background/04.jpg')" }}>
                        <h5 className="mb-6 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
                            LAYING THE FOUNDATIONS
                        </h5>
                        <div className="relative rounded-xl bg-white px-9 pb-14 pt-10" >
                            <div className="space-y-4 text-neutral-800">
                                <h3 className="font-bold text-2xl">Title</h3>
                                <div className="paragraph-l ">Subtitle Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perferendis doloremque expedita accusamus unde ab corrupti dicta eveniet ipsum possimus.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default FeaturesTypes