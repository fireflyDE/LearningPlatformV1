import Image from "next/image";

const features = [
  {
    title: "Interactive Lessons",
    description: "Engage with interactive lessons to enhance your learning experience",
    image: "https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkkRNf6tZB9PXnG8oFwDL67lRjztTgeUrhWK0a",
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry experts with real-world experience",
    image: "https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkNCm9hLvYTvaZdrIiKUMxg051zom4kPsLB36f",
  },
  {
    title: "Flexible Schedule",
    description: "Study at your own pace with a flexible schedule",
    image: "https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkEZIJ50tEe9GpNoaBOJhUsPfKTgmRY6DkFC0Q",
  },
  {
    title: "Community Support",
    description: "Connect with a supportive community of fellow learners",
    image: "https://y6kszdvuln.ufs.sh/f/r58qqbjUXDOkSef85vgGrxnuMB2NOpRcfysJoEVltqmb3X6e",
  },
];

export default function CourseOverview() {
  return (
    <section className="bg-[#E5E4EF] w-full py-16 px-6">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-6xl font-extrabold">Course Overview</h2>
        <p className="text-gray-600 mt-2">
          Discover the key features and benefits of our online course
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 w-[327px] h-[456px] flex flex-col items-center"
          >
            <div className="w-[274px] h-[201px] relative mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-center">{feature.title}</h3>
            <p className="text-gray-600 text-lg mt-2 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
