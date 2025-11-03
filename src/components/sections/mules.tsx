import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const defaultContent = {
    title: "Havasupai Mules",
    imageUrl: "https://theofficialhavasupaitribe.com/Havasupai-Mules/Havasupai-Mule-Train-3.jpg",
    content: "<p>Havasupai mules play a vital role in transporting supplies and gear for both tribal members and visitors. They are an integral part of the Havasupai way of life and a traditional means of transport in the rugged canyon terrain.</p><h3>Mule Reservations</h3><p>To ensure availability, it is highly recommended to reserve pack mules online a minimum of <strong>48-72 hours in advance</strong> of your visit.</p><ul><li>All pack mules must be reserved in advance.</li><li>For campground reservations, book at <a href=\"https://havasupaireservations.com\" target=\"_blank\" rel=\"noopener noreferrer\">HavasupaiReservations.com</a>.</li><li>For lodge reservations, book at <a href=\"https://havasupailodge.com\" target=\"_blank\" rel=\"noopener noreferrer\">HavasupaiLodge.com</a>.</li><li>Mule services are subject to availability and tribal regulations.</li></ul><p>Mules are essential for those who prefer not to carry all their gear on the hike to Supai Village and the falls. Please respect the animals and the handlers, and follow all guidelines provided by the Tribe regarding mule usage.</p>"
};

const MulesInfo = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="mules-info" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            {content.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src={content.imageUrl}
                alt="Havasupai Mules"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div
              className="md:w-1/2 text-lg leading-relaxed text-muted-foreground [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:font-headline [&_h3]:text-foreground [&_h3]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_a]:text-accent [&_a]:hover:underline [&_strong]:font-semibold [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: content.content }}
            >
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

MulesInfo.displayName = 'MulesInfo';
export default MulesInfo;
