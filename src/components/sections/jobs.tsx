import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const defaultContent = {
    title: "Current Job Openings",
    description: "The Havasupai Tribe is looking for dedicated individuals to join our team. Explore the available opportunities to contribute to our community.",
    applicationUrl: "https://www.theofficialhavasupaitribe.com/files/Jobs/Tourism-Assistant-Manager-2024.pdf",
    jobListings: "Open May 21, 2024: TOURISM ASSISTANT MANAGER\nClosed: HEAD START DIRECTOR FOR THE HAVASUPAI TRIBE\nClosed: TOURISM ASSISTANT MANAGER\nClosed: TOURISM CUSTOMER SERVICE CLERKS\nClosed: SCANNING/DATA ENTRY CLERK\nClosed: SUPAI HEALTH STATION MAINTENANCE WORKER",
    hrContactInfo: "<strong>Human Resources</strong><br>P.O. Box 10, Supai, AZ 86435<br>Phone: (928) 448-2751<br>Fax: (928) 448-2551"
};


const Jobs = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  const jobItems = content.jobListings ? content.jobListings.split('\n').filter(job => job.trim() !== '') : [];

  return (
    <section id="jobs" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2 inline-block mx-auto">
            {content.title}
          </CardTitle>
          <CardDescription className="text-lg max-w-3xl mx-auto">
            {content.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-12">
            {jobItems.length > 0 ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {jobItems.map((job, index) => {
                  const parts = job.split(': ');
                  const statusText = parts[0] || '';
                  const jobTitle = parts.length > 1 ? parts.slice(1).join(': ') : 'Invalid Job Format';
                  const isOpen = statusText.toLowerCase().startsWith('open');

                  return (
                    <Card key={index} className={cn(
                      "flex flex-col",
                      !isOpen && "bg-muted/50 text-muted-foreground"
                    )}>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start gap-2">
                          <div className="space-y-1">
                            <CardTitle className="font-headline text-lg leading-tight text-foreground">{jobTitle}</CardTitle>
                            <CardDescription className="text-xs">{statusText}</CardDescription>
                          </div>
                          <Badge variant={isOpen ? 'default' : 'secondary'} className="shrink-0">
                            {isOpen ? 'Open' : 'Closed'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-0">
                      </CardContent>
                       {isOpen && content.applicationUrl && (
                        <CardFooter className="p-4 pt-0">
                          <Button asChild className="w-full" variant="outline" size="sm">
                            <a href={content.applicationUrl} target="_blank" rel="noopener noreferrer">
                              View Announcement <Download className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                       )}
                    </Card>
                  )
                })}
              </div>
            ) : (
              <p className="text-muted-foreground text-center">There are no open positions at this time. Please check back later.</p>
            )}
          </div>
          
          {content.hrContactInfo && (
            <div className="border-t pt-8">
                <h3 className="text-2xl font-semibold font-headline text-foreground mb-4 text-center">Contact Human Resources</h3>
                <div className="text-center bg-secondary p-6 rounded-lg shadow-md border text-muted-foreground max-w-md mx-auto"
                    dangerouslySetInnerHTML={{ __html: content.hrContactInfo }}
                />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
});

Jobs.displayName = 'Jobs';
export default Jobs;
