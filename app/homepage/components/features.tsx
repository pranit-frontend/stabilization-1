'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Features = ()=>{

    return <div> 
        <div className="container">
            <div className="pt-20 pb-20 flex flex-wrap">
                
                <Dialog>
                    <div className="grid w-full gap-5 md:grid-cols-4">
                        <DialogTrigger asChild>
                            <a href="#" className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img src="assets/images/icons/icon-ch-1.gif" />
                                <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Laying the foundations</h5>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">This chapter helps you to think through how to do the following:</p>
                            </a>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                            <a href="#" className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img src="assets/images/icons/icon-ch-2.gif" />
                                <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Laying the foundations</h5>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">This chapter helps you to think through how to do the following:</p>
                            </a>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                            <a href="#" className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img src="assets/images/icons/icon-ch-3.gif" />
                                <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Laying the foundations</h5>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">This chapter helps you to think through how to do the following:</p>
                            </a>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                            <a href="#" className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img src="assets/images/icons/icon-ch-4_3.gif" />
                                <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Laying the foundations</h5>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">This chapter helps you to think through how to do the following:</p>
                            </a>
                        </DialogTrigger>
                    </div>
                    <DialogContent className="sm:max-w-[600px] z-[999] bg-primary">
                        <DialogHeader>
                            <DialogTitle className="pb-4 text-white">Laying the foundations</DialogTitle>
                            <DialogDescription>
                                <p className="pb-2 text-white">This chapter helps you to think through how to do the following:</p>
                                <ul className="list-disc pl-9">
                                    <li className="pb-2"><strong>Take a conflict-sensitive approach:</strong> Programming should begin with a robust analysis of what is happening on the ground and why, using this to inform programming to ensure that interventions ‘do no harm’ and support mechanisms that prevent conflict and build peace.</li>
                                    <li className="pb-2"><strong>Define PVE:</strong> Ensure that there is a clear and shared understanding with UNDP and government and civil society partners of what PVE is from the outset.</li>
                                    <li className="pb-2"><strong>Understand and plan for risk:</strong> PVE programmes are a politically sensitive field of activity conducted in complex and volatile contexts. Any PVE programme should include regular risk management throughout the project cycle.</li>
                                    <li className="pb-2"><strong>Understand gender dynamics:</strong> Gender identities, and how they intersect with other identity markers determine people’s positions of relative power or vulnerability.&nbsp;</li>
                                    <li className="pb-2"><strong>Think thorugh targeting: </strong>Build a process to think through how a community-level PVE programme selects beneficiaries and understand the sensitivities and challenges around this.</li>
                                    <li className="pb-2"><strong>Build capacity</strong>: Put in place a strategy for developing UNDP and partner personnel capacities, confidence and resources for M&amp;E.&nbsp;</li>
                                </ul>
                            </DialogDescription>
                        </DialogHeader>
                        
                    </DialogContent>
                </Dialog>
            </div>
            
        </div>
        
    </div>
}

export default Features