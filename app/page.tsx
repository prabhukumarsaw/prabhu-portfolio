'use client';

import ScrollProvider from '@/components/animations/ScrollProvider';
import HeroSection from '@/components/home/HeroSection';
import AboutMe from '@/components/home/AboutUs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LatestPosts from '@/components/home/LatestPosts';

export default function Home() {
  return (
    <ScrollProvider>
      <main className="bg-black">
        <HeroSection />
        <AboutMe/>
        <FeaturedProjects />
        <LatestPosts />
      </main>
    </ScrollProvider>
  );
}