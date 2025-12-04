import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ExperienceSection() {
  const experiences = [
    {
      period: "Feb 2025 - Nov  2025",
      title: "Founding Engineer",
      description:
        "Building the core infrastructure and AI systems at Alace AI. Leading full-stack development to create an autonomous advertising platform that optimizes ROAS and CPA using machine learning algorithms.",
      icon: "https://res.cloudinary.com/dzow59kgu/image/upload/v1752521374/AlaceAiLogo_gsymte.png",
      company: "Alace AI",
      location: "Remote",
    },
    {
      period: "Dec 2024 - Feb 2025",
      title: "Full Stack Developer",
      description:
        "Developed and deployed scalable web applications for Dream Launch Studios. Implemented modern frontend architectures and backend services, focusing on performance optimization and user experience.",
      icon: "https://pbs.twimg.com/profile_images/1893716032113823744/EI5zkPl-_400x400.png",
      company: "Dream Launch Studios",
      location: "Remote",
    },
    {
      period: "Aug 2024 - Oct 2024",
      title: "Frontend Engineer",
      description:
        "Built responsive and performant user interfaces at Vexio. Collaborated with design and backend teams to deliver seamless user experiences using modern React patterns and best practices.",
      icon: "https://cdn.vexio.in/vlogo.jpeg?w=48&q=75",
      company: "Vexio",
      location: "Remote",
    },
  ];
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">
                past experience
              </span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Eu pellentesque arcu ornare velit faucibus egestas gravida sed in
              purus enim molestie gravida imperdiet integer.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              See full resume
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
