"use client";

import { motion } from "motion/react";
import { FaAward } from "react-icons/fa";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TopInstructors() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        <FaAward className="text-secondary inline-block mr-2 mb-2" size={28} />
        Meet Our Top Instructors
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {[
          {
            name: "John Doe",
            role: "Sr. Developer",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            name: "Sarah Smith",
            role: "Design Lead",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
          },
          {
            name: "Emily Chen",
            role: "Marketing Pro",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
          },
        ].map((inst, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="card bg-base-100 shadow-md items-center text-center p-8 border border-base-200 hover:-translate-y-3 transition-all duration-500 group hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="avatar mb-6 relative z-10">
              <div className="w-28 rounded-full ring-2 ring-primary/20 ring-offset-base-100 ring-offset-4 shadow-lg group-hover:ring-primary transition-all duration-500 overflow-hidden">
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 transition-all duration-500 ease-in-out group-hover:text-primary group-hover:-translate-y-1 relative z-10">
              {inst.name}
            </h3>

            <p className="text-base-content/60 font-medium transition-all duration-500 ease-in-out group-hover:text-base-content relative z-10">
              {inst.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
