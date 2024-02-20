'use client'

import Header from "@/app/homepage/components/header";
// import Banner from "@/app/homepage/components/banner";
import Features from "@/app/homepage/components/features";
import Introduction from "@/app/homepage/components/introduction";
import AboutToolkits from "@/app/homepage/components/aboutToolkits";
import FeaturesTypes from "@/app/homepage/components/featuresTypes";
 export const Page = ()=>{

    return <div>
        <Header/>
        {/* <Banner/> */}
        <Features/>
        <Introduction/>
        <AboutToolkits/>
        <FeaturesTypes/>
    </div>
}

export default Page