"use client";

import { Button } from "@/components/ui/button"
import { redirectToCheckout } from "@/lib/checkout";
import { useState } from "react";

export default function Pricing() {
  const [pricingIsMonthly, setPricingIsMonthly] = useState(true);



  return (
    <section className="w-full flex flex-col items-center justify-center py-12 container px-4 md:px-6">
      <div className="space-y-2 mb-6 w-full sm:px-10 text-center">
        {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
          Revolutionize
        </div> */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Choose the plan that&apos;s right for you.
        </h2>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Simple pricing that suits your use case. No hidden fees.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="mx-1 rounded-full"
          onClick={() => setPricingIsMonthly(true)}
          variant={pricingIsMonthly ? "default" : "ghost"}
        >
          Billed Monthly
        </Button>
        <span className="font-bold mx-2">/</span>
        <Button
          className="mx-1 rounded-full"
          onClick={() => setPricingIsMonthly(false)}
          variant={!pricingIsMonthly ? "default" : "ghost"}
        >
            Billed Yearly
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-x-4 md:space-y-0 sm:px-10 py-12">
        <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Starter</h5>
          <p className="text-gray-500 text-xs mb-4">pause or upgrade anytime</p>
          <p className="text-gray-900 text-5xl font-bold mb-4">{pricingIsMonthly ? "$20/mo" : "$199/yr"}</p>
          <p className="text-gray-700 text-base mb-4">
            Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.
          </p>
          <ul className="text-gray-600 text-sm space-y-2 mb-6">
            <li>One component at a time</li>
            <li>React / Next.js / Tailwind CSS code</li>
            <li>Design + Development</li>
            <li>Unlimited Revisions</li>
            <li>24-hour support response time</li>
            <li>Private communication channel</li>
            <li>4-7 days turnaround time</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <Button onClick={() => redirectToCheckout(50)} className="w-full">Buy Now</Button>
          <p className="text-gray-500 text-xs text-center mt-4">Questions?</p>
        </div>
        <div className="max-w-md p-6 bg-white rounded-lg border border-purple-500 shadow-md relative">
          <div className="px-6 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Popular
          </div>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Pro</h5>
          <p className="text-gray-500 text-xs mb-4">pause or upgrade anytime</p>
          <p className="text-gray-900 text-5xl font-bold mb-4">{pricingIsMonthly ? "$50/mo" : "$499/yr"}</p>
          <p className="text-gray-700 text-base mb-4">
            Best for early-stage startups and businesses that need a marketing side and ongoing developmental work.
          </p>
          <ul className="text-gray-600 text-sm space-y-2 mb-6">
            <li>One request / page at a time</li>
            <li>React / Next.js / Tailwind CSS code</li>
            <li>Design + Development</li>
            <li>Unlimited Revisions</li>
            <li>CMS integration</li>
            <li>Search Engine Optimization</li>
            <li>24-hour support response time</li>
            <li>Private communication channel</li>
          </ul>
          <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">Buy Now</Button>
          <p className="text-gray-500 text-xs text-center mt-4">Questions?</p>
        </div>
        <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Enterprise</h5>
          <p className="text-gray-500 text-xs mb-4">starts at</p>
          <p className="text-gray-900 text-5xl font-bold mb-4">{pricingIsMonthly ? "$100/mo" : "$899/yr"}</p>
          <p className="text-gray-700 text-base mb-4">
            Best for small businesses and startups that need a performant website that looks great and converts visitors
            to customers.
          </p>
          <ul className="text-gray-600 text-sm space-y-2 mb-6">
            <li>Multi-page landing page website</li>
            <li>Web Apps and SaaS Development</li>
            <li>AI Apps development</li>
            <li>Design + Development</li>
            <li>24-hour support response time</li>
            <li>Private communication channel</li>
            <li>Unlimited Revisions</li>
            <li>Negotiable delivery time</li>
          </ul>
          <Button className="w-full bg-green-500 text-white">Contact Us</Button>
          <p className="text-gray-500 text-xs text-center mt-4">Questions?</p>
        </div>
      </div>
    </section>
  )
}

