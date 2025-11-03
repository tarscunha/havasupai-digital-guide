"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from '@/lib/utils';

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

interface HeaderProps {
  onNavLinkClick: (sectionId: SectionId) => void;
  activeSection: SectionId;
}

const Header: React.FC<HeaderProps> = ({ onNavLinkClick, activeSection }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  const mainNavItems = [
    { id: 'home' as SectionId, label: 'Home' },
    { id: 'reservations' as SectionId, label: 'Reservations' },
    { id: 'about' as SectionId, label: 'About' },
    { id: 'havasupai-government' as SectionId, label: 'Government' },
    { id: 'advocacy' as SectionId, label: 'Advocacy' },
    { id: 'culture' as SectionId, label: 'Culture' },
    { id: 'contact' as SectionId, label: 'Contact' },
    { id: 'jobs' as SectionId, label: 'Jobs' },
  ];

  const visitorInfoItems = [
    { id: 'mules-info' as SectionId, label: 'Mules' },
    { id: 'supai-info' as SectionId, label: 'Supai Info' },
    { id: 'supai-maps' as SectionId, label: 'Maps' },
    { id: 'havasupai-camping' as SectionId, label: 'Camping' },
    { id: 'havasupai-lodge' as SectionId, label: 'Lodge' },
    { id: 'supai-store-cafe' as SectionId, label: 'Store & Cafe' },
  ];

  const isVisitorInfoActive = visitorInfoItems.some(item => activeSection === item.id) || activeSection === 'visitor-info';

  const handleVisitorInfoClick = () => {
    onNavLinkClick('visitor-info');
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary font-headline">
              Havasupai Tribe
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavItems.slice(0, 2).map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => onNavLinkClick(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:bg-primary hover:text-white",
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Button>
            ))}
            
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <div className={cn(
                "inline-flex items-center rounded-md text-sm font-medium transition-colors",
                isVisitorInfoActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}>
                <button
                  onClick={handleVisitorInfoClick}
                  className="px-3 py-2 hover:bg-primary hover:text-white transition-colors rounded-l-md"
                >
                  Visitor Info
                </button>
                <div className="w-px h-4 bg-border" />
                <DropdownMenuTrigger asChild>
                  <button
                    onClick={handleDropdownToggle}
                    className="px-2 py-2 hover:bg-primary hover:text-white transition-colors rounded-r-md"
                  >
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent align="start" className="w-48">
                {visitorInfoItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => onNavLinkClick(item.id)}
                    className={cn(
                      "cursor-pointer",
                      activeSection === item.id && "bg-primary/10"
                    )}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {mainNavItems.slice(2).map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => onNavLinkClick(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:bg-primary hover:text-white",
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavLinkClick('home')}
              className="text-sm font-medium"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
