import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-12 pb-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Build AI Chatbots in Minutes
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Turn Conversations Into Conversions
            </h2>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 sm:max-w-52"
              href="#"
            >
              Get Started Now <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              The Future of Customer Engagement
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              RAG Builder let&apos;s you build and deploy chatbots in minutes that help you engage with your customers and drive sales. With our platform turning conversations into conversions has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}