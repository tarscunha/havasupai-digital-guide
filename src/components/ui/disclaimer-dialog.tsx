"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DisclaimerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DisclaimerDialog({ open, onOpenChange }: DisclaimerDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Important Disclaimer
          </DialogTitle>
          <DialogDescription className="text-center">
            This is a personal coding project created for learning and demonstration purposes only.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center space-y-4">
          <div className="text-base font-medium">
            This is <strong>NOT</strong> the official website of the Havasupai Tribe.
          </div>
          <div className="text-sm">
            For official information, services, and communications, please visit the 
            official Havasupai Tribe website:
          </div>
        </div>
        <DialogFooter className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-2">
          <Button 
            variant="outline" 
            onClick={() => window.open('https://theofficialhavasupaitribe.com/', '_blank')}
            className="w-full sm:w-auto transition-all duration-200 hover:scale-105"
          >
            Visit Official Site
          </Button>
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto transition-all duration-200 hover:scale-105"
          >
            Continue to Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}