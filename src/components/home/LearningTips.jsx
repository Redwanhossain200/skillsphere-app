'use client';

import { LuCircleCheck, LuBookOpen, LuUsers } from 'react-icons/lu';
import { motion } from 'motion/react';

export default function LearningTips() {
  const tips = [
    {
      title: 'Pomodoro Technique',
      desc: 'Study for 25 minutes, then take a 5-minute break to maintain focus.',
    },
    {
      title: 'Active Recall',
      desc: 'Test yourself frequently rather than just passively reading material.',
    },
    {
      title: 'Consistent Practice',
      desc: 'Dedicate at least 30 minutes every day instead of cramming on weekends.',
    },
  ];

  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Effective Learning Tips
            </h2>

            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-sm md:text-lg">
              {tips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: 'easeOut',
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex gap-3 items-start bg-base-100 p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <LuCircleCheck className="text-success mt-1 shrink-0" />
                  <p>
                    <strong>{tip.title}:</strong> {tip.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="stat bg-base-100 rounded-xl shadow-md border border-base-300 hover:shadow-lg transition-all">
              <div className="stat-figure text-primary">
                <LuBookOpen size={48} />
              </div>
              <div className="stat-title font-semibold">Courses</div>
              <div className="stat-value text-primary">100+</div>
              <div className="stat-desc">Available for you</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="stat bg-base-100 rounded-xl shadow-md border border-base-300 hover:shadow-lg transition-all">
              <div className="stat-figure text-secondary">
                <LuUsers size={48} />
              </div>
              <div className="stat-title font-semibold">Students</div>
              <div className="stat-value text-secondary">50k+</div>
              <div className="stat-desc">Learning actively</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
