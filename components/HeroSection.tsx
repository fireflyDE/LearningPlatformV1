import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Leftcontent */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003087]">
            Learn More, Achieve More!
          </h1>
          <p className="italic text-lg mt-2 mb-4 text-gray-600">
            Unlock your full potential with us.
          </p>
          <p className="text-sm text-gray-700 max-w-md">
            At LushAiTech, our focus is on educational empowerment, ensuring that the local community can benefit from the global advancements in technology.
          </p>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[311px] h-[414px] bg-[white] rounded-lg overflow-hidden">
            <Image
              src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOk6WyNDvrsaAevfJxjZ8ShLMKDoyE2blgGqQ05" // change to your actual image path or remote URL
              alt="Student"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
