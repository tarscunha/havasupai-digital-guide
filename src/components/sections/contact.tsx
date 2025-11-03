import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, AlertTriangle } from 'lucide-react';

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section id="contact" ref={ref} className="scroll-m-24 transform transition duration-500 hover:scale-[1.01]">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-4xl font-bold text-foreground mb-4 border-b-4 border-primary pb-2">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="bg-secondary p-6 rounded-lg shadow-md border">
                    <h3 className="text-2xl font-semibold font-headline text-foreground mb-4">Mailing Address &amp; Email</h3>
                    <address className="not-italic text-muted-foreground">
                        Havasupai Tribe<br />
                        P. O. Box 10<br />
                        Supai, Arizona 86435
                    </address>
                    <p className="mt-4 text-muted-foreground flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:info@havasupaireservations.com" className="text-accent hover:underline">
                            info@havasupaireservations.com
                        </a>
                    </p>
                </div>
                <div className="bg-secondary/50 border border-accent p-6 rounded-lg shadow-md text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <AlertTriangle className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-bold font-headline text-foreground">In Case of Emergency</h3>
                    </div>
                    <p className="text-3xl font-extrabold text-accent mb-2">CALL 911</p>
                    <p className="text-xs text-muted-foreground">
                        Supai, AZ local policing provided by:<br/>Bureau of Indian Affairs Law Enforcement Services
                    </p>
                </div>
            </div>
        </CardContent>
      </Card>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
