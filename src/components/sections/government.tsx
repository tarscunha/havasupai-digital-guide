
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const defaultContent = {
    clothingAssistanceTitle: "HAVASUPAI TRIBE SCHOOL CLOTHING ASSISTANCE",
    clothingAssistanceDesc: "School clothing funding assistance is available for students from Early Head Start through 12th grade. Please complete the application and submit it to the Tribal Secretary's office via email at htsec1@havasupai-nsn.gov or mail to Tribal Secretary, P.O. Box 10 Supai, Arizona 86435.",
    clothingAssistanceUrl: "https://theofficialhavasupaitribe.com/files/2021_School_Clothing_Assistance_Application.pdf",
    vaccineIncentiveTitle: "Havasupai Tribe Vaccination Incentive Program",
    vaccineIncentiveDesc: "The Havasupai Tribal Council has approved a vaccination incentive program to encourage all members to get vaccinated.",
    vaccineIncentiveUrl: "https://www.theofficialhavasupaitribe.com/files/Havasupai_Vaccination_Incentive_Program.pdf",
};

const Government = React.forwardRef<HTMLDivElement, { content?: typeof defaultContent }>(({ content = defaultContent }, ref) => {
  return (
    <section id="havasupai-government" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Havasupai Government &amp; Community
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/government/tribal-seal.jpg"
                alt="Havasupai Tribal Council"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4 text-muted-foreground">
                The Havasupai Tribe is a federally recognized Indian Tribe located in northwestern Arizona. Our reservation is governed by a Tribal Council, elected by tribal members, dedicated to the well-being and sovereignty of our people.
              </p>
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Tribal Council</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Chairwoman Bernadine Jones</li>
                <li>Vice Chairman Armando Marshall</li>
                <li>Council Member Sybil Hanna</li>
                <li>Council Member Fawn Manakaja</li>
                <li>Council Member Felicia Siyuja</li>
                <li>Council Member Thomas Siyuja, Sr.</li>
                <li>Council Member Tim Uqualla</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                For visitors to Havasu Canyon, please be aware of the fragile environment and the possibility of flash floods.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t grid md:grid-cols-2 gap-8">
            <div className="max-w-3xl mx-auto bg-secondary p-6 rounded-lg shadow-md border text-center flex flex-col">
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">
                {content.clothingAssistanceTitle}
              </h3>
              <p className="mb-6 text-muted-foreground flex-grow">
                {content.clothingAssistanceDesc}
              </p>
              <Button asChild>
                <a href={content.clothingAssistanceUrl} target="_blank" rel="noopener noreferrer">
                  Download the application here
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
             <div className="max-w-3xl mx-auto bg-secondary p-6 rounded-lg shadow-md border text-center flex flex-col">
              <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">
                {content.vaccineIncentiveTitle}
              </h3>
              <p className="mb-6 text-muted-foreground flex-grow">
                {content.vaccineIncentiveDesc}
              </p>
              <Button asChild>
                <a href={content.vaccineIncentiveUrl} target="_blank" rel="noopener noreferrer">
                  Click here for more information
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

        </CardContent>
      </Card>
    </section>
  );
});

Government.displayName = 'Government';
export default Government;
