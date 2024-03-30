import Image from 'next/image'

export default function Preview() {
  return (
    <section className="w-full py-12">
      <div className="space-y-2 mb-12 w-full sm:px-10 text-center">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
          Lights, Camera, Action!
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Watch It In Action!
        </h2>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Watch a quick demo of how RAG Builder functions.
        </p>
      </div>
      <Image
        src={"/preview.jpg"}
        width={1920}
        height={1080}
        alt='preview image'
        className='w-full h-auto aspect-video rounded-2xl max-w-screen-lg m-auto' 
      />
    </section>
  )
}