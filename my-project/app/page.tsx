import React from "react";
import "./globals.css";

const SKILLS = [
  { name: "C#", level: 85 },
  { name: "Python", level: 75 },
  { name: "Java", level: 70 },
  { name: "JavaScript", level: 90 },
];

export default function Home() {
  return (
    <main className="container">
      {/* Profil & Giriş Bölümü */}
      <section className="profile-section">
        <h1 id="about-title">Yiğit Şenyörek</h1>
        <p className="lead-text">Full-Stack Developer & Teknoloji Meraklısı</p>
        <div className="bio-detail">
          <p>
            Yazılım dünyasına adım attığımdan beri karmaşık problemleri basit ve kullanıcı dostu 
            çözümlere dönüştürmeye odaklanıyorum. Özellikle modern web teknolojileri ve 
            performans odaklı backend sistemleri üzerine kendimi geliştiriyorum.
          </p>
        </div>
      </section>

      {/* Detaylı Bilgi Bölümü */}
      <section className="info-grid">
        <div className="info-card">
          <h4>Deneyim</h4>
          <ul>
            <li><strong>Full -Stack Geliştirici</strong> — 2023 - Günümüz</li>
            <li><strong>Yazılım Geliştirme Stajyer</strong> MyTek Reality (9ay)</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Eğitim</h4>
          <ul>
            <li><strong>Yazılım Geliştirme</strong> — İto vakfı süleyman taştekin mesleki ve teknik anadolu lisesi</li>
            <li><strong>Bilgisayar destekli tasarım ve animasyon</strong> —  Yaşar Üniversitesi</li>
          </ul>
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section className="skills-section">
        <h2>Teknik Yetenekler</h2>
        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                  role="progressbar" 
                  aria-valuenow={skill.level} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (Bağlantılar) */}
      <footer className="footer-section">
        <h3>Bağlantıda Kalalım</h3>
        
        <nav className="social-links" aria-label="Sosyal Medya">
          <a href="https://github.com/Senyorek" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/..." target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a>E-posta: senyurekyigit@gmail.com</a>
        </nav>

        <p className="copyright">
          © {new Date().getFullYear()} — <b>Yiğit Şenyörek</b> tarafından tasarlandı.
        </p>
      </footer>
    </main>
  );
}