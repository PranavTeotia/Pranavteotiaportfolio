
import React from 'react';
import './CertificateSection.css';

const certificates = [
  {
    title: 'Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    link: 'https://drive.google.com/file/d/1-VY0ZyJv2k1UMdJiE-A1zl63yeZY0sPI/view?usp=sharing',
  },
  {
    title: 'JAVA Certified',
    issuer: 'Hackerrank',
    year: '2025',
    link: 'https://www.hackerrank.com/certificates/f435610c3dab',
  },
  {
    title: 'SQL Certified',
    issuer: 'Hackerrank',
    year: '2024',
    link: 'https://www.hackerrank.com/certificates/100e2f658093',
  },
  {
    title: 'Problem Solving Certified',
    issuer: 'Hackerrank',
    year: '2024',
    link: 'https://www.hackerrank.com/certificates/cd6482d8c331',
  },
  {
    title: 'React.JS Certfied',
    issuer: 'Hackerrank',
    year: '2025',
    link: 'https://www.hackerrank.com/certificates/bc32d71b2906',
  },
  {
    title: 'Career Edge Young Professional',
    issuer: 'TCSiON',
    year: '2024',
    link: 'https://drive.google.com/file/d/15JIsY1gZbBKETz8FBGFHSBp0_YwPpP48/view?usp=sharing',
  },
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="certificate-section">
      <div className="container">
        <h2 className="section-title">CERTIFICATES</h2>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-year">{cert.year}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
