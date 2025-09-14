import Carousel from "./_components/Carousel";
import Footer from "./_components/Footer";
import GenerateSection from "./_components/GenerateSection";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-black pt-12 px-6">
        <div className="mx-auto">
          <Carousel />

          <GenerateSection />
        </div>
      </section>
      <Footer />
    </>
  );
}
