import Carousel from "./_components/Carousel";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-black pt-12 px-6">
        <div className="mx-auto">
          <Carousel />
        </div>
      </section>
      <Footer />
    </>
  );
}
