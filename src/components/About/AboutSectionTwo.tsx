import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/2.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our mission is to provide businesses with top-notch packaging solutions that enhance the safety and efficiency of their operations. We aim to build long-term relationships with our clients by offering exceptional products, prompt service, and a commitment to sustainability.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What Sets Us Apart
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  •	Quality Assurance: We source our stretch films from trusted manufacturers who comply with global standards, ensuring that each product delivers consistent performance and reliability.<br />
                  •	Wide Range of Products: From manual stretch films to specialized options like UV stretch films and VCI stretch films, our diverse range of products meets the varied packaging needs of different industries.<br />
                  •	Customer-Centric Approach: At Stellar Industries, we prioritize our clients’ needs. We listen to your requirements and offer tailored solutions to help your business succeed.<br />
                  •	Timely Delivery: We understand the importance of timely delivery. With an efficient logistics network in place, we ensure that your orders are processed and delivered on time, every time.<br />
                  •	Sustainability Focus: As part of our commitment to environmental responsibility, we offer eco-friendly stretch film options and continue to explore ways to reduce our environmental footprint.

                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Values
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  •	Integrity: We believe in conducting business with transparency and honesty, always prioritizing our clients’ needs and building trust.<br />
                  •	Innovation: We stay on top of industry trends, continuously evolving our offerings to meet the changing needs of our customers.<br />
                  •	Excellence: We are dedicated to upholding the highest standards of quality in every product we deliver, ensuring reliable and effective packaging solutions.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
