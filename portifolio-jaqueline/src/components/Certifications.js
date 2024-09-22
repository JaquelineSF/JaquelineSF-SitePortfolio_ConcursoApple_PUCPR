import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certificações</h2>
      <ul>
        <li>Certificação AWS Practitioner</li>
        <li>Certificação Microsoft AZ-900</li>
        <li>Certificação OCI Foundations</li>
        {/* Adicione outras certificações */}
      </ul>
    </section>
  );
};

export default Certifications;
