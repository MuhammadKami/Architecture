import React from "react";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";

function Project() {
  return (
     <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <div className="m-20">
      <h1 className="text-gray-400 text-5xl font-thin">Our</h1>
      <h1 className="font-bold text-5xl tracking-wide">Projects</h1>
      <ProjectCard
        title={"Horizon Villa"}
        image={"./image 30.png"}
        buttonText={"View More"}
        description={
          "A contemporary hillside residence designed to blend with its natural surroundings. Featuring large glass panels, open terraces, and sustainable materials, Horizon Villa offers luxury living with panoramic views."
        }
      />
      <ProjectCard
        image={"./image 33.png"}
        buttonText={"View More"}
        title={"Urban Nexus Complex"}
        description={
          "A mixed-use commercial and residential building located in the heart of the city. The design focuses on vertical green spaces, natural lighting, and smart resource management for a future-forward urban lifestyle."
        }
      />
      <ProjectCard
        image={"./image 32.png"}
        buttonText={"View More"}
        title={"Serenity Cultural Center"}
        description={
          "A modern reinterpretation of traditional architecture, this project includes prayer halls, exhibition spaces, and courtyards. Serenity Cultural Center serves as a peaceful gathering place that celebrates heritage through minimalistic design."
        }
      />
    </div>
    </motion.div>
  );
}

export default Project;
