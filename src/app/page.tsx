
import React, { createRef } from 'react';
import PageClient from './page-client';
import { getContent } from '@/lib/content-service';

export default async function Home() {
  const { content } = await getContent();

  return (
    <PageClient content={content} />
  );
}
