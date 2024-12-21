'use client';

import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { blogPosts } from '@/lib/blogData';

interface BlogListProps {
  category: string;
}

export default function BlogList({ category }: BlogListProps) {
  const filteredPosts = category === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === category);

  return (
    <motion.div 
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {filteredPosts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </motion.div>
  );
}