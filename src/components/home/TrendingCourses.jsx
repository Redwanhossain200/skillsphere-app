'use client';

import { LuTrophy } from 'react-icons/lu';
import { motion } from 'motion/react';
import CourseCard from '@/components/CourseCard';

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

export default function TrendingCourses({ trendingCourses, isLoading }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
        <h2 className="text-xl md:text-2xl text-center md:text-left font-bold mb-8 flex items-center gap-2">
          <LuTrophy className="text-warning" /> Trending Courses
        </h2>
        <motion.div
          key={isLoading ? 'loading-trending' : 'loaded-trending'}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : (
            trendingCourses.map((course, i) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseCard course={course} index={i} />
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
