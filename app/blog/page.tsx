'use client';

import BlogHeader from '@/components/blog/BlogHeader';
import BlogList from '@/components/blog/BlogList';
import BlogCategories from '@/components/blog/BlogCategories';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  return (
    <main className="min-h-screen bg-black pt-20">
      <BlogHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <BlogCategories 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <BlogList category={selectedCategory} />
      </div>
    </main>
  );
}