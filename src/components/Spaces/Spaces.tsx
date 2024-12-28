import React from "react";
import { useSpacesStore } from "../../store/spacesStore";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import SpaceCard from "./SpaceCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Spaces: React.FC = () => {
  const { filteredSpaces, loading, error } = useSpacesStore((state) => ({
    filteredSpaces: state.filteredSpaces,
    loading: state.loading,
    error: state.error,
  }));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-bold text-text mb-4 sm:mb-0">
            Our Space Overview
          </h2>
          <SearchBar />
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSpaces.map((space) => (
            <SpaceCard key={space.id} {...space} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Spaces;
