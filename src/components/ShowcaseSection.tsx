import { motion } from "framer-motion";
import { ArrowRight, Play, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

import asset1 from "../assets/asset-1.jpeg";
import asset3 from "../assets/asset-3.jpeg";
import asset5 from "../assets/asset-5.jpeg";
import video1 from "../assets/video 1.mp4";

const showcaseItems = [
  {
    id: 1,
    title: "Luxury Modern Villa",
    type: "video",
    src: video1,
  },
  {
    id: 2,
    title: "Luxury Interior Design",
    type: "image",
    src: asset5,
  },
  {
    id: 3,
    title: "Commercial Complex",
    type: "image",
    src: asset3,
  }
];

export default function ShowcaseSection() {
  return (
    <section className="bg-forest-deep bg-mesh-forest text-linen py-24 sm:py-32 relative overflow-hidden">
      {/* Cinematic Vignette Overlay to darken edges and make the center pop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,39,28,0.8)_100%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-clay" />
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-clay">
                Our Visuals
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl text-white"
            >
              Experience our work in motion.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/showcase" 
              className="group flex items-center gap-3 text-linen hover:text-clay transition-colors"
            >
              <span className="font-medium text-lg border-b border-transparent group-hover:border-clay pb-1 transition-all">View Full Showcase</span>
              <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-clay group-hover:bg-clay/10 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer break-inside-avoid transform-gpu"
            >
              <Link to="/showcase" className="absolute inset-0 z-20" />
              {item.type === 'video' ? (
                <video 
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    {item.type === 'video' ? <Play className="w-5 h-5 ml-1" /> : <ImageIcon className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
