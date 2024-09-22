import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="link_da_sua_foto_de_perfil" alt="Jaqueline Sousa" className="profile-pic" />
      <h1>Jaqueline Sousa</h1>
      <p>Engenharia de Computação | Cloud Computing & DevOps</p>
      <a href="#about">Sobre mim</a>
    </header>
  );
};

export default Header;
