import React from 'react';
import Image from 'next/image';

const defaultContent = {
  title: "Welcome to Havasupai",
  description: "The Official Home of the Havasupai Tribe. Discover the beauty and culture of our ancestral lands.",
  imageUrl: "/images/hero/havasu-falls-hero.jpg",
};

const Hero = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="home" ref={ref} className="relative h-96 md:h-[600px] flex items-center justify-center text-white">
      <Image
        src={content.imageUrl}
        alt="A stunning waterfall in Havasupai with turquoise water"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center p-4 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg font-headline">
          {content.title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          {content.description}
        </p>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
