import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mim</h2>
      <p>Sou estudante de Engenharia de Computação com foco em Cloud Computing e DevOps...</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="link_para_o_video"
          title="Jaqueline Sousa"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default About;
