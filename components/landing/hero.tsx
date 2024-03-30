import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100dvh-3.5rem)] flex items-center justify-center relative overflow-hidden">
      {/* <Boxes /> */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
      >
        <rect width="100%" height="100%" fill="url(#:R4d6:)" strokeWidth={0} />
        <svg x="50%" y={-96} strokeWidth={0} className="overflow-visible">
          <path transform="translate(64 160)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
          <path transform="translate(128 320)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
          <path transform="translate(288 480)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
          <path transform="translate(512 320)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
          <path transform="translate(544 640)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
          <path transform="translate(320 800)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
        </svg>
        <defs>
          <pattern id=":R4d6:" width={96} height={480} x="50%" patternUnits="userSpaceOnUse" patternTransform="translate(0 -96)" fill="none" >
            <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128" />
          </pattern>
        </defs>
      </svg>

      <div className="container px-4 md:px-6 z-20 overflow-x-hidden flex items-stretch flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="lg:leading-snug text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl">
            Turn Visitors into Customers with Conversational AI
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Engage your customers with automated conversational
            experiences. Turn Conversations into Conversions with RAG Builder.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 sm:max-w-52"
            href="#"
          >
            Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <Image
          alt="Image"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full h-auto lg:order-last"
          height="1041"
          src="/landing.png"
          width="1041"
        />
      </div>
    </section>
  )
}