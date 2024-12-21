'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with Next.js and Node.js',
    image: '/images/project1.jpg',
    link: '/projects/project-one',
  },
  {
    title: 'Project Two',
    description: 'Mobile app developed using React Native',
    image: '/images/project2.jpg',
    link: '/projects/project-two',
  },
  {
    title: 'Project Three',
    description: 'AI-powered data analytics platform',
    image: '/images/project3.jpg',
    link: '/projects/project-three',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-gray-900"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-full border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}