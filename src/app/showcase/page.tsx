import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import asset1 from "../../assets/asset-1.jpeg";
import asset2 from "../../assets/asset-2.jpeg";
import asset3 from "../../assets/asset-3.jpeg";
import asset4 from "../../assets/asset-4.jpeg";
import asset5 from "../../assets/asset-5.jpeg";
import asset6 from "../../assets/asset-6.jpeg";
import asset7 from "../../assets/asset-7.jpeg";
import asset31 from "../../assets/31.jpeg";
import video1 from "../../assets/video 1.mp4";

const showcaseData = [
  {
    id: 1,
    title: "Cinematic Walkthrough",
    category: "Architecture",
    type: "video",
    src: asset1, // Video thumbnail or poster
    videoUrl: video1
  },
  {
    id: 3,
    title: "Urban Commercial Complex",
    category: "Commercial",
    type: "image",
    src: asset3,
  },
  {
    id: 4,
    title: "Sustainable Eco-Home",
    category: "Architecture",
    type: "image",
    src: asset4,
  },
  {
    id: 5,
    title: "Luxury Kitchen Design",
    category: "Interior Design",
    type: "image",
    src: asset5,
  },
  {
    id: 6,
    title: "Open Concept Office",
    category: "Commercial",
    type: "image",
    src: asset6,
  }
];

export default function ShowcasePage() {
  const [filter, setFilter] = useState("All");
  const [activeMedia, setActiveMedia] = useState<any>(null);

  const categories = ["All", "Architecture", "Interior Design", "Commercial"];

  const filteredData = filter === "All" ? showcaseData : showcaseData.filter(item => item.category === filter);

  useEffect(() => {
    if (activeMedia) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [activeMedia]);

  return (
    <main className="min-h-screen bg-[#F5F2EC] pt-32 pb-24">
      {/* Header Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-forest/30" />
            <span className="font-mono text-sm tracking-[0.2em] uppercase text-forest/70">
              Visuals
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl text-forest mb-8 leading-tight">
            Our Showcase
          </h1>
          <p className="text-xl text-forest/70 font-light">
            Explore our curated collection of images and cinematic videos showcasing the finest details of our construction and design projects.
          </p>
        </motion.div>
      </section>

      {/* Filter Options */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? "bg-forest text-linen shadow-lg scale-105" 
                  : "bg-forest/5 text-forest hover:bg-forest/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredData.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer break-inside-avoid transform-gpu"
              onClick={() => setActiveMedia(item)}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                    {item.type === 'video' ? <Play className="w-4 h-4 ml-0.5" /> : <ImageIcon className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeMedia && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-forest-deep/95 via-forest/80 to-forest-deep/95 backdrop-blur-3xl overflow-hidden"
            >
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,39,28,0.7)_100%)] pointer-events-none" />
              
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={() => setActiveMedia(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[100000] h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300 backdrop-blur-md border border-white/20"
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                className="relative flex items-center justify-center w-full max-w-7xl h-[85vh] z-[99999] mx-4"
              >
                {activeMedia.type === 'video' ? (
                  <video 
                    src={activeMedia.videoUrl} 
                    controls 
                    autoPlay 
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                  />
                ) : (
                  <img 
                    src={activeMedia.src} 
                    alt={activeMedia.title}
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}

