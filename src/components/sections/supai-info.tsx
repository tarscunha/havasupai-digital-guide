import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SupaiInfo = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="supai-info" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Supai Village Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://www.theofficialhavasupaitribe.com/Hilltop-View--640x427-.jpg"
                alt="View from the Hualapai Hilltop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4 text-muted-foreground">
                Supai Village is the capital of the Havasupai Indian Reservation and the only way to access the famous Havasu Falls. It is a remote village, and visitors must be prepared for the journey.
              </p>
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Visitor Preparedness</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Reservations are required for all visits.</li>
                <li>The hike to Supai is difficult; visitors must be fit, athletic, well-hydrated, and prepared.</li>
                <li>Summer temperatures can reach 115°F (46°C); trails may close.</li>
                <li>Emergency assistance is limited; carry one gallon of water per person (no water sources on trail).</li>
                <li>Be aware of dehydration, flash floods (monsoon season), snakes, scorpions.</li>
                <li>Hike during cooler parts of the day and wear appropriate footwear.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

SupaiInfo.displayName = 'SupaiInfo';
export default SupaiInfo;
