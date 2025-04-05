import Image from "next/image";

export default function LinksSection() {
  return (
    <section className="w-full h-[600px] bg-[#E5E4EF] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-black">Don’t know where to Start?</h2>
        <p className="text-gray-700">
          Explore programs that can make you stand out among your peers
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* AI */}
        <div className="w-[320px] h-[400px] bg-white rounded-xl shadow p-4 text-center">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkDR5SKkNf3HvhCDFTZX801c7OwtJY5nPqKegs"
            alt="Artificial Intelligence"
            width={280}
            height={210}
            className="mx-auto rounded"
          />
          <h3 className="mt-6 text-xl font-bold text-black">Artificial<br />Intelligence</h3>
        </div>

        {/* Data Analytics */}
        <div className="w-[320px] h-[400px] bg-white rounded-xl shadow p-4 text-center">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkD86XnCNf3HvhCDFTZX801c7OwtJY5nPqKegs"
            alt="Data Analytics"
            width={280}
            height={210}
            className="mx-auto rounded"
          />
          <h3 className="mt-6 text-xl font-bold text-black">Data<br />Analytics</h3>
        </div>

        {/* Cloud Computing */}
        <div className="w-[320px] h-[400px] bg-white rounded-xl shadow p-4 text-center">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkaRDJizUM0epoOEuqaR7KJGnCZh4Db1rwyW5v"
            alt="Cloud Computing"
            width={280}
            height={210}
            className="mx-auto rounded"
          />
          <h3 className="mt-6 text-xl font-bold text-black">Cloud<br />Computing</h3>
        </div>

        {/* Python Programming */}
        <div className="w-[320px] h-[400px] bg-white rounded-xl shadow p-4 text-center">
          <Image
            src="https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkedLVAre5oa4IzNyLG6x0A1Uh2OS8icjsWtYp"
            alt="Python Programming"
            width={280}
            height={210}
            className="mx-auto rounded"
          />
          <h3 className="mt-6 text-xl font-bold text-black">Python<br />Programming</h3>
        </div>
      </div>
    </section>
  );
}
