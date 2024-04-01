"use client";

import Image from "next/image"
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Dashboard() {

    const router = useRouter();

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <div className="w-full flex justify-center mb-3">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#909090" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>


                        </div>

                        <h1 className="text-3xl font-bold mb-3">Authentication Error</h1>
                        <p className="text-balance text-muted-foreground mb-3">
                            Sorry, something went wrong with the authentication process. Please try again or contact support for assistance.
                        </p>

                        <Button
                            variant={"link"}
                            onClick={() => {
                                router.replace("/auth/login")
                            }}
                        >
                            <span><ChevronLeft /></span> Back to Login Page
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}