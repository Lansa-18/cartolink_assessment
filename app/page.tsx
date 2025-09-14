import Image from "next/image";
import WanCard from "./_components/CarouselCard";
import FluxCard from "./_components/FluxCard";
import VoiceCard from "./_components/VoiceCard";
import CodeCard from "./_components/CodeCard";
import Carousel from "./_components/Carousel";

export default function Home() {

  return (
    <section className="min-h-screen bg-white dark:bg-black py-12 px-6">
      <div className="mx-auto">
        <Carousel />
      </div>
    </section>
  );
}
