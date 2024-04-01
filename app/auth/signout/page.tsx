"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Dashboard() {
    const [seconds, setSeconds] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(interval);
                    router.replace("/auth/login");
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <div className="w-full flex justify-center mb-3">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#909090" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>

                        </div>

                        <h1 className="text-3xl font-bold mb-3">Sign Out Successful</h1>
                        <p className="text-balance text-muted-foreground mb-3">
                            You have been successfully signed out. You will be redirected to login page in {seconds} {seconds > 1 ? "seconds" : "second"}.
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