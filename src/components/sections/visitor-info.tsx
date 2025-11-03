
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertTriangle, MapPin, ShieldCheck } from 'lucide-react';

const defaultContent = {
  title: "Important Visitor Information",
  description: "<p>The Havasupai Tribe looks forward to welcoming our visitors back to Supai. Please read carefully and ensure that all members of your reservation group understand and agree to the following information.</p>",
  checkInTitle: "Check-in Process",
  checkInDesc: "<p>Check-in for ALL permit reservations (campground and lodge) takes place at <strong>Grand Canyon Caverns Inn</strong>, located at Mile Marker 115, Route 66 near Peach Springs, Arizona 86434. The trip leader MUST check-in for all members of their group. Failure to do so will result in your reservation being cancelled. No refunds or rescheduling of dates will be issued.</p><p>Office hours for July 2025 are 6 am – 6 pm each day. Please note: checking in by noon on the day of your reservation is no longer required since the trail is open 24 hours. Therefore you can check-in any time the day before or the day of your reservation during business hours.</p>",
  checkInDetails: "<ul><li>The trip leader will need to provide photo ID to receive all permits, wristbands, bag tags, and an entrance form.</li><li>All vehicle license plates must be registered upon check-in.</li><li>You can start the hike on any day of your reservation, and you must depart on or before the last day of your reservation. There is no refund for unused days.</li><li>The trail is open for hiking 24 hours a day. Please use caution as assistance may not be readily available during non-business hours. It is recommended to avoid hiking between the hours of 10AM-3PM during excessive heat.</li></ul>",
  rulesTitle: "General Rules & Recommendations",
  rulesDesc: "<p>It is the responsibility of each tourist to bring the necessary gear and equipment for camping. The tribe does not offer or sell tents, sleeping bags, heaters or other camping supplies. The store stocks a limited number of food items, but you should bring your own food, water, etc. Plan accordingly for changes in weather, the Reservation can experience high and low temperatures, wind, rain and snow.</p><p>Please respect the sovereignty of the Havasupai Tribe and abide by all posted signage and instructions from the rangers. Only hike in designated areas.</p>",
  packInOutTitle: "Pack It In, Pack It Out",
  packInOutInfo: "<p>To address the issue of tourists leaving trash and gear in the canyon, the tribe has authorized a civil citation and fine of up to $1,000. Individuals will be cited for failure to take all their trash and gear out of the canyon. Leave no trace (Pack It In, Pack It Out). Please help keep the Havasupai lands clean. The cost to remove tourist trash and gear by helicopter is substantial. You are responsible to take out what you bring in!</p>",
  trailheadTitle: "Hilltop Trailhead",
  trailheadInfo: "<p>Please note: There is NO camping at Hilltop. That includes no sleeping in your vehicle at Hilltop. There is limited parking at the trailhead. Additional parking is available along the road leading to the trailhead.</p>",
};

const InfoBlock = ({ title, desc, details }: { title: string, desc: string, details?: string }) => (
    <div className="bg-secondary p-6 rounded-lg shadow-md border">
        <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">{title}</h3>
        <div className="text-muted-foreground mb-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: desc }} />
        {details && <div className="text-muted-foreground mt-4 space-y-1 [&_ul]:list-disc [&_ul]:list-inside prose max-w-none" dangerouslySetInnerHTML={{ __html: details }} />}
    </div>
);

const VisitorInfo = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="visitor-info" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            {content.title}
          </CardTitle>
          <CardDescription className="text-lg" dangerouslySetInnerHTML={{ __html: content.description }}/>
        </CardHeader>
        <CardContent className="space-y-8">
            <InfoBlock title={content.checkInTitle} desc={content.checkInDesc} details={content.checkInDetails} />
            <InfoBlock title={content.rulesTitle} desc={content.rulesDesc} />
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/50 border border-accent p-6 rounded-lg shadow-md text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <ShieldCheck className="w-8 h-8 text-accent" />
                        <h3 className="text-2xl font-bold font-headline text-foreground">{content.packInOutTitle}</h3>
                    </div>
                    <div className="text-muted-foreground prose max-w-none" dangerouslySetInnerHTML={{ __html: content.packInOutInfo }} />
                </div>
                <div className="bg-secondary/50 border border-accent p-6 rounded-lg shadow-md text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <MapPin className="w-8 h-8 text-accent" />
                        <h3 className="text-2xl font-bold font-headline text-foreground">{content.trailheadTitle}</h3>
                    </div>
                    <div className="text-muted-foreground prose max-w-none" dangerouslySetInnerHTML={{ __html: content.trailheadInfo }} />
                </div>
            </div>
        </CardContent>
      </Card>
    </section>
  );
});

VisitorInfo.displayName = 'VisitorInfo';
export default VisitorInfo;
