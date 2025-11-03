import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Lodge = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="havasupai-lodge" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Havasupai Lodge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/lodge/havasupai-lodge.jpg"
                alt="Havasupai Lodge"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4">
                The Havasupai Lodge offers a comfortable stay within Supai Village for those seeking an alternative to camping.
              </p>
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Lodge Check-in &amp; Amenities</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Upon arrival, check in at Grand Canyon Caverns Inn to receive permits.</li>
                <li>Trip leader needs photo ID for permits, wristbands, bag tags, and entrance form.</li>
                <li>Lodge check-in: 2-5 pm; check-out: no later than 11 am.</li>
                <li>Each room has 2 queen beds for up to 4 adults, includes bedding, towels, soap, and a couch.</li>
                <li>Charcoal grills available (tribe does not provide camping supplies).</li>
                <li>No camping allowed at Hilltop; parking is limited.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

Lodge.displayName = 'Lodge';
export default Lodge;
