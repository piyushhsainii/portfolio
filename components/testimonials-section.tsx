"use client"

import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            What my clients say
            <br />
            about <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">my work</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices
            nulla sed doler.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-72 lg:pr-72">
              <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                <Image
                  src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                  alt="Quote"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div className="md:max-w-[65%]">
                <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim et minim quis nostrud exercitation ullamco laboris.
                </p>

                <div>
                  <div className="font-bold text-base md:text-lg">Lily Woods</div>
                  <div className="text-gray-600 text-sm md:text-base">VP of Design at Google</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full overflow-hidden hidden lg:block">
              <Image
                src="/images/633b277fc2e3697bb14c6a4f-frances.png"
                alt="Client testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
