'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    title: 'Building Scalable Applications with Microservices',
    excerpt: 'Learn how to design and implement microservices architecture...',
    date: '2023-10-15',
    readTime: '5 min read',
    slug: 'building-scalable-applications',
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development...',
    date: '2023-10-10',
    readTime: '4 min read',
    slug: 'future-of-web-development',
  },
  {
    title: 'Mastering TypeScript',
    excerpt: 'A comprehensive guide to TypeScript features and best practices...',
    date: '2023-10-05',
    readTime: '6 min read',
    slug: 'mastering-typescript',
  },
];

export default function LatestPosts() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Latest Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg bg-gray-900 p-6"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mb-4 text-gray-400">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-400 hover:text-blue-300"
              >
                Read more →
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}