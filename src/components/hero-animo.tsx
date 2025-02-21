'use client'
import { motion, AnimatePresence } from "framer-motion";

function HeroAnimo() {
  const heroBannerLightImagePath = "/assets/images/hero-banner-image-light.png";

  return (
    <>
      <AnimatePresence>
        <motion.img
          className="object-contain h-full w-full"
          key="light-hero-animo"
          src={heroBannerLightImagePath}
          alt="Hero Banner" // Remember to provide alternative text for images
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </>
  );
}

export default HeroAnimo;
