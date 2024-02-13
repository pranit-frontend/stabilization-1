'use client'

import Header from "@/app/homepage/components/header";
// import Banner from "@/app/homepage/components/banner";
import Features from "@/app/homepage/components/features";
import Introduction from "@/app/homepage/components/introduction";
 export const Page = ()=>{

    return <div>
        <Header/>
        {/* <Banner/> */}
        <Features/>
        <Introduction/>
    </div>
}

export default Page