import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Camping = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="havasupai-camping" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Havasupai Camping
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/falls/little-navajo-falls.jpg"
                alt="Little Navajo Falls"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4">
                Camping at Havasupai offers an unparalleled experience amidst stunning natural beauty. All campground reservations are managed through the official reservation system.
              </p>
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Camping Guidelines &amp; Reservations</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All campground reservations are made at <a href="https://havasupaireservations.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">HavasupaiReservations.com</a> and paid in full at reservation time.</li>
                <li>Reservations are non-refundable, non-transferable, and non-changeable.</li>
                <li>Reselling of reservations is strictly prohibited.</li>
                <li>Trip/travel insurance is highly recommended.</li>
                <li>Campground amenities: drinking water, restrooms, picnic tables.</li>
                <li>Campfires are not permitted.</li>
                <li>Bringing young children is not recommended due to the challenging environment.</li>
                <li>Alcohol possession, distribution, or consumption is a crime.</li>
                <li>Drones are prohibited.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

Camping.displayName = 'Camping';
export default Camping;
