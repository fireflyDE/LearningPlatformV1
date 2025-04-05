import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F5CFCF] py-12 px-6 flex flex-col items-center" style={{ height: 401 }}>
      <h2 className="text-5xl font-extrabold text-center">Testimonials</h2>
      <p className="text-gray-700 text-center mt-2 mb-8 max-w-xl">
        Read what our previous students have to say about their experience with our online course:
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Testimonial1 */}
        <div className="w-[400px] h-[144px] bg-white rounded-xl shadow-sm p-4 flex gap-4">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkEgql57tEe9GpNoaBOJhUsPfKTgmRY6DkFC0Q" // Replace with actual path in public folder
            alt="1"
            width={20}
            height={20}
           className="rounded-full object-cover w-full h-full"
          />
          <div>
            <h3 className="font-bold">Emily Zuali</h3>
            <p className="text-sm text-gray-600">
              The online course was a game-changer for me. I learned so much and it was presented in a way that was easy to understand.
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-[400px] h-[144px] bg-white rounded-xl shadow-sm p-4 flex gap-4">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkYmbIcdEvTnS4Rr5F8wOkpqCuaYHeVZ2EoyMG" // Replace with actual path in public folder
            alt="2"
            width={20}
            height={20}
            className="rounded-full object-cover w-full h-full"
          />
          <div>
            <h3 className="font-bold">Lalrinmawia</h3>
            <p className="text-sm text-gray-600">
              I highly recommend this online course to anyone looking to expand their knowledge. The content is engaging and the instructors are top-notch.
            </p>
          </div>
        </div>

        {/* Testimonial3 */}
        <div className="w-[400px] h-[144px] bg-white rounded-lg shadow-sm p-4 flex gap-4">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkL71NTecVE3UoFCB4ytgRJHnNmqhQDOale6pr" // Replace with actual path in public folder
            alt="3"
            width={10}
            height={10}
            className="rounded-full w-full h-full"
          />
          <div>
            <h3 className="font-bold">Michael Khawl</h3>
            <p className="text-sm text-gray-600">
              I was impressed by the quality of the course material. It exceeded my expectations and helped me advance in my career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
