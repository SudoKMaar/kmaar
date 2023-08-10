import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";

type Props = {};

const ParticlesContainer: React.FC<Props> = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      className="w-[100vw] h-[100vh] absolute translate-z-0 -z-2"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: { quantity: 90 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#e68e22" },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detechRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
