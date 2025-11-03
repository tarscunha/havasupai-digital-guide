import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sprout, Bus, PersonStanding } from 'lucide-react';

const vendors = [
  {
    name: 'Canyon Outfitters',
    category: 'Hiking Equipment',
    description: 'Rent or buy top-quality hiking and camping gear for your Havasupai adventure. Located near the trailhead.',
    link: '#',
    icon: <Sprout className="w-8 h-8 text-primary" />,
  },
  {
    name: 'Supai Shuttle Services',
    category: 'Shuttle Options',
    description: 'Reliable shuttle services from major hubs to Hualapai Hilltop. Book in advance to secure your spot.',
    link: '#',
    icon: <Bus className="w-8 h-8 text-primary" />,
  },
  {
    name: 'Havasu Canyon Guides',
    category: 'Local Guides',
    description: 'Experienced, approved local guides to enhance your understanding of the area and ensure a safe trek.',
    link: '#',
    icon: <PersonStanding className="w-8 h-8 text-primary" />,
  },
];

const VendorDirectory = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="vendor-directory" ref={ref} className="transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Approved Vendor Directory
          </CardTitle>
          <CardDescription className="text-lg">
            Connect with tribally approved vendors for gear, transport, and guide services to make your trip safe and memorable.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor) => (
              <Card key={vendor.name} className="flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="p-2 bg-primary/10 rounded-lg">{vendor.icon}</div>
                    <div className="flex-1">
                        <CardTitle className="font-headline text-xl">{vendor.name}</CardTitle>
                        <CardDescription>{vendor.category}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{vendor.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <a href={vendor.link} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
});

VendorDirectory.displayName = 'VendorDirectory';
export default VendorDirectory;
