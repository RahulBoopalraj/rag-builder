import Image from "next/image"

export default function Features() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Revolutionize
            </div> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Maximize Customer Retention.
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Empower your business with conversational AI to build lasting
              relationships, increase engagement, and drive loyalty. Let the
              technology handle customer interactions while you focus on
              growth strategies and maximizing revenue.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Image"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="550"
            src="/landing.png"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Personalized Interaction
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tailor conversations to customer preferences and needs
                    with ease.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">24/7 Availability</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Chatbots stay online 247, providing uninterrupted
                    support and assistance.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Enhanced Communication</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Provide instant responses to inquiries, feedback, or assistance requests in real-time.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}