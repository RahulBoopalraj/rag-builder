import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Boxes } from "@/components/aceternity/background-boxes";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import CTA from "@/components/landing/cta";
import Pricing from "@/components/pricing";
import Preview from "@/components/landing/preview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 pt-9 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span>TBA ;]</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" >
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing" >
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" >
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" >
            Contact
          </Link>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Hero />

        <svg className="m-auto my-10" width={400} viewBox="0 0 687 155" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" strokeWidth={7} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20" opacity=".1" /><path d="M20 78c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".2" /><path d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".6" /><path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" /></g></svg>

        <Features />

        <Preview />

        <Pricing />
        
        <CTA />

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
