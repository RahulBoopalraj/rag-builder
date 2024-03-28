import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 container px-4 md:px-6">
      <div className="space-y-2 mb-12 w-full sm:px-10">
        {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
          Revolutionize
        </div> */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Choose the plan that&apos;s right for you.
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Simple pricing that suits your usecase. No hidden fees.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-x-4 md:space-y-0 sm:px-10">
        <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Starter</h5>
          <p className="text-gray-500 text-xs mb-4">pause or cancel anytime</p>
          <p className="text-gray-900 text-5xl font-bold mb-4">$20/mo</p>
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
          <Button className="w-full">Buy Now</Button>
          <p className="text-gray-500 text-xs text-center mt-4">Questions?</p>
        </div>
        <div className="max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-md">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Pages</h5>
          <p className="text-gray-500 text-xs mb-4">pause or cancel anytime</p>
          <p className="text-gray-900 text-5xl font-bold mb-4">$30/mo</p>
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
            <li>7-10 days turnaround time</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <Button className="w-full">Buy Now</Button>
          <p className="text-gray-500 text-xs text-center mt-4">Questions?</p>
        </div>
        <div className="max-w-md p-6 bg-gray-900 text-white rounded-lg border border-gray-600 shadow-md">
          <h5 className="text-white text-xl leading-tight font-medium mb-2">Multi Page Website</h5>
          <p className="text-gray-300 text-xs mb-4">starts at</p>
          <p className="text-white text-5xl font-bold mb-4">$100/mo</p>
          <p className="text-gray-400 text-base mb-4">
            Best for small businesses and startups that need a performant website that looks great and converts visitors
            to customers.
          </p>
          <ul className="text-gray-400 text-sm space-y-2 mb-6">
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

