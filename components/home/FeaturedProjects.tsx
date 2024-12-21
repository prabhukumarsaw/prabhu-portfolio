'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
  {
    title: 'Project Four',
    description: 'E-commerce website built with Shopify',
    image: '/images/project4.jpg',
    link: '/projects/project-four',
  },
  {
    title: 'Project Five',
    description: 'Social media app developed using Flutter',
    image: '/images/project5.jpg',
    link: '/projects/project-five',
  },
  {
    title: 'Project Six',
    description: 'Real-time chat application using WebSockets',
    image: '/images/project6.jpg',
    link: '/projects/project-six',
  },
  {
    title: 'Project Seven',
    description: 'Machine learning model for image recognition',
    image: '/images/project7.jpg',
    link: '/projects/project-seven',
  },
  {
    title: 'Project Eight',
    description: 'Personal portfolio website built with Gatsby',
    image: '/images/project8.jpg',
    link: '/projects/project-eight',
  },
  {
    title: 'Project Nine',
    description: 'Weather forecasting app using OpenWeather API',
    image: '/images/project9.jpg',
    link: '/projects/project-nine',
  },
  {
    title: 'Project Ten',
    description: 'Fitness tracking app developed with React Native',
    image: '/images/project10.jpg',
    link: '/projects/project-ten',
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
                <motion.div
                  className="object-cover w-full h-full transform"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    width={700}
                    height={475}
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <Link
                  href={project.link || '/coming-soon'}
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