import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./ParticlesBG.css";

const ParticlesBG = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the slim version of tsparticles, which contains all the features needed for most cases
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    fullScreen: { 
                        enable: true,
                        zIndex: -1 
                    },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 10,
                            },
                            attract: {
                                distance: 500,
                                duration: 0.4,
                                factor: 5,
                                speed: 5
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#6366f1", "#ec4899", "#818cf8", "#c084fc", "#f8fafc", "#4f46e5"],
                        },
                        links: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: true,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 200,
                        },
                        opacity: {
                            value: { min: 0.2, max: 0.8 },
                            animation: {
                                enable: true,
                                speed: 0.5,
                                minimumValue: 0.1
                            }
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 0.5, max: 2.5 },
                            animation: {
                                enable: true,
                                speed: 1.5,
                                minimumValue: 0.3
                            }
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    }

    return null;
};

export default ParticlesBG;
