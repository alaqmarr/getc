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
                  {/* Our Mission */}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  While we take this opportunity to be of service to you and we kindly request you

to mail us the enquires us in case of exigencies and owe our success

to competitive prices and prompt execution of orders.

                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {/* What Sets Us Apart */}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are dealers in all hardware items like M.S. Pipe, Pipe fittings and

all Types of Valves like G.M. valves C.l. valves, all types of motors and pump sets etc. We are specialists in all kinds of ferrous & non-ferrous metals like S.S., Brass, Copper, Gun Metal, Rods, Sheets, Pipes etc,. and all types of lifting & pulling materials, Rubber sheets, Leather Goods, Neoprene Hoses and all types of Hydraulic Jacks &

Mechanical Jacks. M.S. Bolts & Nuts, Hand Tools, Engineering Tools, and

precision tools required time to time and in emergency from ready stock.

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
