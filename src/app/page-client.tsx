
"use client";

import React, { useRef, createRef, useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Reservations from '@/components/sections/reservations';
import VisitorInfo from '@/components/sections/visitor-info';
import MulesInfo from '@/components/sections/mules';
import SupaiInfo from '@/components/sections/supai-info';
import SupaiMaps from '@/components/sections/supai-maps';
import Camping from '@/components/sections/camping';
import Lodge from '@/components/sections/lodge';
import StoreCafe from '@/components/sections/store-cafe';
import Government from '@/components/sections/government';
import Culture from '@/components/sections/culture';
import Contact from '@/components/sections/contact';
import Advocacy from '@/components/sections/advocacy';
import About from '@/components/sections/about';
import Jobs from '@/components/sections/jobs';

type SectionId = 
  | 'home' 
  | 'reservations' 
  | 'visitor-info' 
  | 'mules-info' 
  | 'supai-info' 
  | 'supai-maps' 
  | 'havasupai-camping' 
  | 'havasupai-lodge' 
  | 'supai-store-cafe'
  | 'about'
  | 'havasupai-government' 
  | 'advocacy'
  | 'culture' 
  | 'contact'
  | 'jobs';

const sectionIds: SectionId[] = [
  'home', 
  'reservations', 
  'visitor-info', 
  'mules-info', 
  'supai-info', 
  'supai-maps', 
  'havasupai-camping', 
  'havasupai-lodge', 
  'supai-store-cafe', 
  'about',
  'havasupai-government', 
  'advocacy',
  'culture', 
  'contact',
  'jobs'
];

export default function PageClient({ content }: { content: any }) {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const sectionRefs = useRef<Record<SectionId, React.RefObject<HTMLDivElement>>>(
    sectionIds.reduce((acc, id) => {
      acc[id] = createRef<HTMLDivElement>();
      return acc;
    }, {} as Record<SectionId, React.RefObject<HTMLDivElement>>)
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px', // Trigger when top of section is 100px from top of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = sectionRefs.current;
    Object.values(refs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  const handleNavLinkClick = React.useCallback((sectionId: SectionId) => {
    sectionRefs.current[sectionId]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        
        const currentIndex = sectionIds.indexOf(activeSection);
        let nextIndex = currentIndex;

        if (event.key === 'ArrowRight') {
          nextIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
        } else {
          nextIndex = Math.max(currentIndex - 1, 0);
        }

        if (nextIndex !== currentIndex) {
          const nextSectionId = sectionIds[nextIndex];
          handleNavLinkClick(nextSectionId);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, handleNavLinkClick]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavLinkClick={handleNavLinkClick} activeSection={activeSection} />
      <main className="flex-grow">
        <Hero ref={sectionRefs.current.home} content={content?.hero} />
        <div className="container mx-auto px-6 md:px-12 py-12 space-y-12">
          <Reservations ref={sectionRefs.current.reservations} content={content?.reservations} />
          <VisitorInfo ref={sectionRefs.current['visitor-info']} content={content?.['visitor-info']} />
          <MulesInfo ref={sectionRefs.current['mules-info']} content={content?.['mules-info']} />
          <SupaiInfo ref={sectionRefs.current['supai-info']} />
          <SupaiMaps ref={sectionRefs.current['supai-maps']} />
          <Camping ref={sectionRefs.current['havasupai-camping']} />
          <Lodge ref={sectionRefs.current['havasupai-lodge']} />
          <StoreCafe ref={sectionRefs.current['supai-store-cafe']} content={content?.['store-cafe']} />
          <About ref={sectionRefs.current.about} />
          <Government ref={sectionRefs.current['havasupai-government']} content={content?.government} />
          <Advocacy ref={sectionRefs.current.advocacy} content={content?.advocacy} />
          <Culture ref={sectionRefs.current.culture} />
          <Contact ref={sectionRefs.current.contact} />
          <Jobs ref={sectionRefs.current.jobs} content={content?.jobs} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
