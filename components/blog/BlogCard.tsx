'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
    >
      <Link href={`/blog/${post.slug || 'coming-soon'}`}>
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <motion.div
            className="object-cover w-full h-full transform"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              layout="responsive"
              width={700}
              height={475}
            />
          </motion.div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-blue-400">{post.category}</span>
            <time className="text-sm text-gray-400">{post.date}</time>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-3"
              width={32}
              height={32}
            />
            <span className="text-sm text-gray-300">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}