import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SupaiMaps = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="supai-maps" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Supai &amp; Trail Maps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/maps/mooney-falls-ladders.jpg"
                alt="Ladders descending to Mooney Falls"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4 text-muted-foreground">
                Understanding the layout and distances within the Havasupai Reservation is crucial for planning your trip.
              </p>
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Key Distances</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Exit Historic Route 66 to Route Indian 18, travel 63 miles north to Hualapai Hilltop.</li>
                <li>From Hualapai Hilltop, it's an 8-mile hike to Supai Village (Lodge &amp; Tourist Office).</li>
                <li>From Supai Village to the Campground: 2 miles.</li>
                <li>From Supai Village to Havasu Falls: 2 miles.</li>
                <li>From Supai Village to Mooney Falls: 3 miles.</li>
                <li>From Supai Village to Beaver Falls: 6 miles.</li>
                <li>From Supai Village to the Colorado River: 11 miles.</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Remember, reservations are required before entering the reservation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

SupaiMaps.displayName = 'SupaiMaps';
export default SupaiMaps;
