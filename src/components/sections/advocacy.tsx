
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const defaultContent = {
    title: "Advocacy & News",
    imageUrl: "https://www.theofficialhavasupaitribe.com/Protect-Havasupai-From-Uranium-Mining-Evangeline-Kissoon.png",
    content: "<h3>Uranium mining still threatens the Grand Canyon, our tribe's sacred home</h3><p><em>Written by Chairwoman Bernadine Jones in an opinion piece for AZ Central:</em></p><blockquote>\"Uranium mining still threatens the Grand Canyon, our tribe's sacred home. We are often forgotten deep in the canyon. But we are here, and we’re here to fight against harm - both past and likely to come - facing Natives and others in the region.\"</blockquote><p><a href=\"https://www.azcentral.com/story/opinion/op-ed/2024/06/05/grand-canyon-monument-lawsuit-uranium-mining-havasupai/73967579007\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>View Article on AZ Central</strong></a></p><hr/><p>&nbsp;</p><h3>Congress Must Act to Save the Havasupai Tribe from Extinction</h3><p><em>Written by Chairwoman Kissoon in an opinion piece for Newsweek:</em></p><blockquote>\"We have seen the irreparable damage uranium mining can do. For generations we have been at the forefront, working to permanently protect our homelands from uranium mining... We urge the Senate to do the right thing and protect the Grand Canyon now and for future generations.\"</blockquote><p><a href=\"https://www.newsweek.com/congress-must-act-save-havasupai-tribe-extinction-opinion-1654939\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>View Newsweek Article</strong></a></p><hr/><p>&nbsp;</p><h3>Havasupai Tribe Provides Testimony at United States Senate Committee</h3><p>Hearing on S. 387, To protect, for current and future generations, the watershed, ecosystem, and cultural heritage of the Grand Canyon region in the State of Arizona...</p><p><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>View PDF</strong></a></p>"
};

const Advocacy = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="advocacy" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card className="border-accent bg-accent/5">
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-accent pb-2">
            {content.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                    <div
                        className="prose prose-lg max-w-none text-muted-foreground prose-h3:text-foreground prose-h3:font-headline prose-blockquote:border-accent prose-blockquote:text-foreground prose-a:text-accent prose-a:font-semibold hover:prose-a:underline [&_hr]:my-8"
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                </div>
                <div className="md:w-1/3">
                {content.imageUrl && (
                    <Image
                        src={content.imageUrl}
                        alt="Advocacy poster for protecting Havasupai lands from uranium mining"
                        width={400}
                        height={520}
                        className="rounded-lg shadow-lg w-full h-auto object-contain"
                        data-ai-hint="activism poster"
                    />
                )}
                </div>
            </div>
        </CardContent>
      </Card>
    </section>
  );
});

Advocacy.displayName = 'Advocacy';
export default Advocacy;
