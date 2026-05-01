'use client';

import Link from 'next/link';
import { LuTrophy, LuArrowRight } from 'react-icons/lu';
import { motion } from 'motion/react';
import CourseCard from '@/components/CourseCard';
import { FaFire } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function PopularCourses({ popularCourses, isLoading }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <FaFire className="text-warning" /> Popular Courses
        </h2>
        <Link
          href="/courses"
          className="text-primary font-medium hover:underline flex items-center gap-1 group">
          View All{' '}
          <LuArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>
      <motion.div
        key={isLoading ? 'loading-popular' : 'loaded-popular'}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <div className="col-span-full flex justify-center py-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          popularCourses.map((course, i) => (
            <motion.div key={course.id} variants={itemVariants}>
              <CourseCard course={course} index={i} />
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
}
