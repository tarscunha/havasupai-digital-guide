import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Culture = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="culture" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Respecting Havasupai Culture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/falls/new-falls.jpg"
                alt="A beautiful waterfall in Havasupai"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4 text-muted-foreground">
                The Havasupai Tribe has lived in the Grand Canyon for centuries, deeply connected to the land and water. Our culture is rich with traditions, stories, and a profound respect for nature. When you visit, you are entering our homeland, and we ask that you do so with the utmost respect and reverence.
              </p>
              <p className="mb-4 text-muted-foreground">
                Your visit helps support our community and allows us to continue preserving our unique way of life. Please be mindful of our customs, respect our privacy, and contribute positively to the environment.
              </p>
              <p className="font-semibold text-foreground text-xl font-headline">
                "Havasu 'Baaja" - People of the Blue-Green Water.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

Culture.displayName = 'Culture';
export default Culture;
