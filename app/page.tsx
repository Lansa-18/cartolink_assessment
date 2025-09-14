import Carousel from "./_components/Carousel";
import Footer from "./_components/Footer";
import GenerateSection from "./_components/GenerateSection";
import { FaWallet, FaBook } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="bg-white px-6 pt-12 dark:bg-black">
        <div className="mx-auto">
          <Carousel />

          <GenerateSection />

          <section className="flex items-center justify-between mb-2 px-6 ">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Gallery
            </h3>

            <div className="flex gap-2">
              <button className="bg-primary-grey relative flex font-semibold cursor-pointer items-center gap-1.5 rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 dark:hover:text-black">
                <FaWallet />
                <span>Legal</span>
              </button>
              <button className="bg-primary-grey relative flex font-semibold cursor-pointer items-center gap-1.5 rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 dark:hover:text-black">
                <FaBook />
                <span>Pricing</span>
              </button>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
