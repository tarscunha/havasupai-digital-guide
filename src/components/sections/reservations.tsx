
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const defaultContent = {
    title: "2025 Tourism Season Reservations",
    description: "<p>We are excited to announce the opening of reservations for the 2025 tourism season. Please read all information carefully before proceeding with your booking.</p>",
    campgroundTitle: "Campground Reservations",
    campgroundPrice: "$455 per person",
    campgroundDesc: "For 3 nights, includes all applicable fees and taxes.",
    lodgeTitle: "Lodge Reservations",
    lodgePrice: "$2,277 per lodge room",
    lodgeDesc: "For up to four people, 3 nights, includes all applicable fees and taxes.",
};

const Reservations = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="reservations" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            {content.title}
          </CardTitle>
          <CardDescription className="text-lg" dangerouslySetInnerHTML={{ __html: content.description }} />
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-secondary p-6 rounded-lg shadow-md border">
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">{content.campgroundTitle}</h3>
              <p className="text-xl font-bold text-primary mb-2">{content.campgroundPrice}</p>
              <p className="text-muted-foreground">{content.campgroundDesc}</p>
            </div>

            <div className="bg-secondary p-6 rounded-lg shadow-md border">
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">{content.lodgeTitle}</h3>
              <p className="text-xl font-bold text-primary mb-2">{content.lodgePrice}</p>
              <p className="text-muted-foreground">{content.lodgeDesc}</p>
            </div>
          </div>

          <div className="bg-red-100 border border-red-400 text-red-800 p-4 rounded-lg shadow-inner">
            <p className="font-bold text-lg mb-2 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2" />
              Important Notice:
            </p>
            <p>All reservations are strictly <span className="font-extrabold">non-refundable and non-cancellable</span>. Please ensure your travel plans are firm before booking.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

Reservations.displayName = 'Reservations';
export default Reservations;
