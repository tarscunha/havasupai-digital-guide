import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="about" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            About The Havasupai Tribe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <Image
                    src="/images/supai-village/about-supai.jpg"
                    alt="A stunning waterfall in Havasupai"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    data-ai-hint="waterfall canyon"
                />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed space-y-4">
                <p className="font-semibold text-xl font-headline text-primary">
                    Havasu 'Baaja - People of the Blue-Green Water
                </p>
                <p className="text-muted-foreground">
                    The Havasupai Tribe is a small tribe of Native American people who have lived in the Grand Canyon for over 800 years. Havasu 'Baaja, the people of the blue-green waters, are the traditional guardians of the Grand Canyon. The Havasupai are the only tribe that still lives inside the Grand Canyon.
                </p>
                <p className="text-muted-foreground">
                    The Havasupai Reservation consists of 188,077 acres of canyons and plateaus in the western Grand Canyon. The village of Supai is located in Havasu Canyon, accessible only by foot, horseback, or helicopter. There are no roads to the village.
                </p>
                <p className="text-muted-foreground">
                    Known for their beautiful blue-green waterfalls, the Havasupai people have a unique culture and a strong, traditional connection to their land. They are a proud and resilient people.
                </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

About.displayName = 'About';
export default About;
