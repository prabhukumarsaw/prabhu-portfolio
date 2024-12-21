import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Applications with Microservices",
    slug: "building-scalable-applications",
    excerpt: "Learn how to design and implement microservices architecture for modern applications.",
    content: "Full content here...",
    date: "Dec 13, 2023",
    category: "Engineering",
    coverImage: "/images/blog/microservices.jpg",
    author: {
      name: "John Doe",
      avatar: "/images/authors/john.jpg"
    },
    readTime: "5 min read"
  },
  {
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    excerpt: "Exploring upcoming trends and technologies shaping the future of web development.",
    content: "Full content here...",
    date: "Dec 10, 2023",
    category: "Industry Insights",
    coverImage: "/images/blog/web-dev.jpg",
    author: {
      name: "Jane Smith",
      avatar: "/images/authors/jane.jpg"
    },
    readTime: "4 min read"
  },
  // Add more blog posts...
];