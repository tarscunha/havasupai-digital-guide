
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const defaultContent = {
    title: "Supai Store & Cafe",
    imageUrl: "https://www.theofficialhavasupaitribe.com/Supai--640x480-.jpg",
    content: "<p>The store and the cafe will be open to tourists during normal operating hours. It is possible that there will be occupancy restrictions, please abide by all signage and onsite instructions.</p><h3>Cafe Hours & Favorites</h3><ul><li>Cafe hours: 8am to 5pm (may vary).</li><li>Cafe favorites: French Fries, Hamburgers, Supai Signature dishes, Supai Combo.</li></ul><h3>Store Hours & Items</h3><ul><li>Store hours: 7am to 5:30pm (Mon-Fri), 8am to 5pm (Sat-Sun) (may vary).</li><li>Items sold: soda, water, Gatorade, ice cream, travel-sized toiletries, fruit, canned goods.</li><li>Prices are adjusted due to the remote location and transportation costs.</li></ul><p>Please continue to visit our official Facebook tourism page for updates and information. And as always, please visit <a href=\"http://www.havasupaireservations.com\">www.havasupaireservations.com</a> for updated information.</p><p>If you have any questions related to the Tribe’s tourism activities, please reach out to <a href=\"mailto:support@havasupaireservations.com\">support@havasupaireservations.com</a>.</p>"
};

const StoreCafe = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="supai-store-cafe" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
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
                alt="Supai Village store and cafe"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div
              className="md:w-1/2 text-lg leading-relaxed text-muted-foreground [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:font-headline [&_h3]:text-foreground [&_h3]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_a]:text-accent [&_a]:hover:underline [&_strong]:font-semibold [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

StoreCafe.displayName = 'StoreCafe';
export default StoreCafe;
