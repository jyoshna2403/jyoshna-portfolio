import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [messageSent, setMessageSent] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const technicalSkills = [
    "Java",
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "JDBC"
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Time Management"
  ];

  const certificates = [
    { title: "CCNA 1 – Introduction to Networks", file: "/certificates/CCNA_1.pdf" },
    { title: "CCNA 2 – Switching, Routing & Wireless Essentials", file: "/certificates/CCNA_2.pdf" },
    { title: "CCNA 3 – Enterprise Networking, Security & Automation", file: "/certificates/CCNA_3.pdf" },
    { title: "Hexart AI Certification", file: "/certificates/Hexart_AI.pdf" },
    { title: "Java Foundation Certification", file: "/certificates/Java_Foundation.pdf" },
    { title: "Oracle Cloud AI Foundations", file: "/certificates/Oracle.pdf" },
    { title: "Salesforce Agentforce Specialist", file: "/certificates/salesforce.jpg" }
  ];

  const hackathons = [
  { title: "Smart India Hackathon (SIH)", file: "/certificates/SIH.jpg" },
  { title: "GDG On Campus Solution Challenge", file: "/certificates/GDG.jpg" },
  { title: "HackWithHyderabad – Microsoft", file: "/certificates/HackWithHyderabad.jpg" },
  { title: "Hack2Skills Hackathon", file: "/certificates/hack2skills.jpeg" },
  { title: "Hack-A-Thon 1.0 – St. Peter’s", file: "/certificates/Hack-A-Thon.jpg" },
  { title: "TechSprint Hackathon – CMRIT", file: "/certificates/TechSprint.jpg" }
];

const internships = [
  {
    title: "Infosys Springboard – Virtual Internship 6.0 (Ongoing)",
    desc: "Engaged in structured learning modules focused on programming fundamentals, problem-solving, and emerging technologies. Enhancing development skills through hands-on virtual training and guided projects."
  },
  {
    title: "1M1B | AI + Sustainability Virtual Internship",
    desc: "Worked on AI-driven solutions addressing sustainability challenges. Explored responsible AI practices and gained exposure to real-world problem solving using technology."
  }
];

  return (
    <div>
      {/* NAVBAR */}
<div style={styles.navbar}>
  <div style={styles.logo}>KJ</div>

  <div style={styles.navLinks}>
    <a href="#about" style={styles.navLink}>About</a>
    <a href="#education" style={styles.navLink}>Education</a>
    <a href="#skills" style={styles.navLink}>Skills</a>
    <a href="#certificates" style={styles.navLink}>Certificates</a>
    <a href="#hackathons" style={styles.navLink}>Hackathons</a>
    <a href="#internships" style={styles.navLink}>Internships</a>
    <a href="#contact" style={styles.navLink}>Contact</a>
  </div>
</div>

      {/* HERO SECTION */}
<div style={styles.heroSection} id="about">

  <div style={styles.heroContainer}>

    {/* LEFT IMAGE */}
    <div style={styles.imageWrapper}>
      <img
        src="/profile.jpeg"
        alt="Jyoshna"
        style={styles.heroImage}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={styles.heroContent}>
      <p style={styles.role}>COMPUTER SCIENCE ENGINEERING STUDENT</p>

      <h1 style={styles.heroName}>Koppisetti Jyoshna</h1>

      <p style={styles.heroTagline}>
        "Building Intelligent Solutions with Code & AI"
      </p>

      <p style={styles.heroDescription}>
        Computer Science Engineering student with strong foundation in Java,
        Python, and AI technologies. Passionate about building scalable,
        intelligent, and efficient software solutions.
      </p>

      {/* BADGES */}
      <div style={styles.badges}>
       <span style={styles.heroBadge}>CGPA 9.0</span>
      <span style={styles.heroBadge}>AI Enthusiast</span>
      <span style={styles.heroBadge}>Hackathon Participant</span>
      <span style={styles.heroBadge}>Java & Python Developer</span>
      </div>

      {/* BUTTONS */}
      <div style={styles.heroButtons}>
        <a href="#projects" style={styles.primaryBtn}>View Projects</a>
        <a href="/resume.pdf" download style={styles.secondaryBtn}>
          Download Resume
        </a>
        <a href="#contact" style={styles.outlineBtn}>Contact Me</a>
      </div>

    </div>

  </div>

</div>

      {/* EDUCATION */}
      <div style={styles.whiteSection} id="education">
        <h2 style={styles.sectionTitle}>Education</h2>

        {[
          {
            title: "Bachelor of Computer Science",
            place: "CMR Institute of Technology",
            year: "2023 – 2027",
            score: "CGPA: 9.00"
          },
          {
            title: "Intermediate",
            place: "Sri Chaitanya Junior College",
            year: "2021 – 2023",
            score: "Percentage: 98%"
          },
          {
            title: "Matriculation / SSC",
            place: "Little Flower High School",
            year: "2012 – 2021",
            score: "Percentage: 100%"
          }
        ].map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            style={styles.card}
          >
            <h3>{edu.title}</h3>
            <p>{edu.place}</p>
            <p>{edu.year}</p>
            <strong>{edu.score}</strong>
          </motion.div>
        ))}
      </div>

      {/* SKILLS */}
      <div style={styles.lightSection} id="skills">
        <h2 style={styles.sectionTitle}>Skills</h2>

        <h3 style={styles.subHeading}>Technical Skills</h3>
        <div style={styles.badgeContainer}>
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              style={styles.badge}
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <h3 style={styles.subHeading}>Soft Skills</h3>
        <div style={styles.badgeContainer}>
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              style={styles.badge}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
<div style={styles.darkSection} id="certificates">
  <h2 style={styles.sectionTitle}>Certifications</h2>

  <div style={styles.certColumns}>

    {/* LEFT COLUMN (4 certificates) */}
    <div style={styles.certColumn}>
      {certificates.slice(0, 4).map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          style={styles.certCard}
          onClick={() => setSelectedCert(cert.file)}
        >
          <h3 style={styles.blueTitle}>{cert.title}</h3>
        </motion.div>
      ))}
    </div>

    {/* RIGHT COLUMN (3 certificates) */}
    <div style={styles.certColumn}>
      {certificates.slice(4).map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          style={styles.certCard}
          onClick={() => setSelectedCert(cert.file)}
        >
          <h3 style={styles.blueTitle}>{cert.title}</h3>
        </motion.div>
      ))}
    </div>

  </div>
</div>

     {/* PROJECTS */}
<div style={styles.whiteSection}>
  <h2 style={styles.sectionTitle}>Projects</h2>

  {/* Project 1 */}
  <motion.div
    whileHover={{ y: -8 }}
    style={styles.projectVerticalCard}
  >
    {/* GitHub Redirect Icon */}
    <a
      href="https://github.com/jyoshna2403/HMS"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.projectIcon}
    >
      ↗
    </a>

    <h3 style={{ marginBottom: "10px", color: "#93c5fd" }}>
      Hospital Management System
    </h3>

    <p style={{ color: "#cbd5e1" }}>
      Java-based console application managing patients, doctors and appointments using JDBC & MySQL.
    </p>
  </motion.div>

  {/* Project 2 */}
  <motion.div
    whileHover={{ y: -8 }}
    style={styles.projectVerticalCard}
  >
    {/* GitHub Redirect Icon */}
    <a
      href="https://github.com/jyoshna2403/HMS"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.projectIcon}
    >
      ↗
    </a>

    <h3 style={{ marginBottom: "10px", color: "#93c5fd" }}>
      YouTube Video Summarizer
    </h3>

    <p style={{ color: "#cbd5e1" }}>
      AI-powered tool extracting audio, transcribing with Whisper and generating summaries using NLP models.
    </p>
  </motion.div>

</div>
{/* HACKATHONS */}
<div style={styles.lightSection} id="hackathons">
  <h2 style={styles.sectionTitle}>Hackathons</h2>

  <div style={styles.certColumns}>

    {/* LEFT COLUMN */}
    <div style={styles.certColumn}>
      {hackathons.slice(0, 3).map((hack, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          style={styles.certCard}
          onClick={() => setSelectedCert(hack.file)}
        >
          {hack.title}
        </motion.div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div style={styles.certColumn}>
      {hackathons.slice(3).map((hack, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          style={styles.certCard}
          onClick={() => setSelectedCert(hack.file)}
        >
          {hack.title}
        </motion.div>
      ))}
    </div>

  </div>
</div>

 {selectedCert && (
  <div style={styles.modalOverlay} onClick={() => setSelectedCert(null)}>
    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <button
        style={styles.closeBtn}
        onClick={() => setSelectedCert(null)}
      >
        ✕
      </button>

      {selectedCert.endsWith(".pdf") ? (
        <iframe
          src={selectedCert}
          title="Certificate"
          style={styles.modalIframe}
        />
      ) : (
        <img
          src={selectedCert}
          alt="Certificate"
          style={styles.modalImage}
        />
      )}
    </div>
  </div>
)}
{/* INTERNSHIPS */}
<div style={styles.darkSection} id="internships">
  <h2 style={styles.sectionTitle}>Internships</h2>

  {internships.map((intern, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      style={styles.internVerticalCard}
    >
      <h3
        style={{
          marginBottom: "10px",
          color: "#93c5fd",
          fontWeight: "600",
          fontSize: "1.2rem"
        }}
      >
        {intern.title}
      </h3>

      <p
        style={{
          color: "#cbd5e1",
          lineHeight: "1.6",
          fontSize: "0.95rem"
        }}
      >
        {intern.desc}
      </p>
    </motion.div>
  ))}
</div>

{/* CONTACT SECTION */}
<div id="contact" style={styles.contactSection}>
  <h2 style={styles.contactTitle}>Get In Touch</h2>

  <div style={styles.contactWrapper}>

    {/* LEFT SIDE */}
    <div style={styles.contactLeft}>
      <p style={styles.contactIntro}>
        I'm always open to discussing new opportunities, collaborations,
        or just a friendly chat about technology. Feel free to reach out!
      </p>

      <div style={styles.contactItem}>
        <span style={styles.contactIcon}>📧</span>
        <div>
          <strong>Email</strong>
          <p>jyoshnak798@gmail.com</p>
        </div>
      </div>

      <div style={styles.contactItem}>
        <span style={styles.contactIcon}>📞</span>
        <div>
          <strong>Phone</strong>
          <p>+91 6309804199</p>
        </div>
      </div>

      <div style={styles.contactItem}>
        <span style={styles.contactIcon}>🔗</span>
        <div>
          <strong>LinkedIn</strong>
          <p>
            <a
              href="https://www.linkedin.com/in/jyoshna-koppisetti-b45a73352/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b82f6", textDecoration: "none" }}
            >
              Connect with me
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div style={styles.contactCard}>
      <form
  style={styles.contactForm}
  onSubmit={(e) => {
    e.preventDefault();
    setMessageSent(true);
  }}>
        <input type="text" placeholder="Full Name *" style={styles.input} />
        <input type="email" placeholder="Email *" style={styles.input} />
        <input type="text" placeholder="Phone (Optional)" style={styles.input} />
        <input type="text" placeholder="Subject *" style={styles.input} />
        <textarea
          placeholder="Message *"
          rows="4"
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.sendButton}>
  ✈ Send Message
</button>

{messageSent && (
  <p style={styles.successMessage}>
    Thank you for contacting me! I’ll get back to you soon.
  </p>
)}
      </form>
    </div>

  </div>
</div>

    </div>
    
  );
}

const styles = {
  darkSection: {
  padding: "100px 20px",
  background: "#0f172a",
  color: "white"
},
  navbar: {
  position: "fixed",
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 60px",
  background: "#0f172a",
  zIndex: 1000
},

logo: {
  fontWeight: "700",
  fontSize: "1.2rem",
  color: "white"
},

navLinks: {
  display: "flex",
  gap: "30px"
},

navLink: {
  color: "white",
  textDecoration: "none",
  fontSize: "0.95rem",
  cursor: "pointer"
},
  heroSection: {
  padding: "120px 20px",
  background: "#0f172a",
  color: "white",
  display: "flex",
  alignItems: "center"
},
heroContainer: {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: "60px",
  flexWrap: "wrap"
},

imageWrapper: {
  flex: "1",
  display: "flex",
  justifyContent: "center"
},

heroImage: {
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "6px solid rgba(255,255,255,0.15)"
},

heroContent: {
  flex: "2",
  minWidth: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
},

role: {
  letterSpacing: "2px",
  fontSize: "0.9rem",
  color: "#93c5fd",
  marginBottom: "15px"
},

heroName: {
  fontSize: "3.5rem",
  fontWeight: "700",
  marginBottom: "10px"
},

heroTagline: {
  fontStyle: "italic",
  marginBottom: "20px",
  color: "#cbd5e1"
},

heroDescription: {
  maxWidth: "600px",
  lineHeight: "1.6",
  marginBottom: "25px",
  color: "#e2e8f0"
},
heroBadge: {
  padding: "7px 16px",   // slightly bigger padding
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "22px",
  fontSize: "0.8rem",    // medium size
  fontWeight: "500",
  color: "white"
},
badges: {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "20px",
  marginBottom: "30px"
},
heroButtons: {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap"
},

primaryBtn: {
  padding: "12px 24px",
  background: "#3b82f6",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "600"
},

secondaryBtn: {
  padding: "12px 24px",
   background: "#1e293b",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "600"
},

outlineBtn: {
  padding: "12px 24px",
  border: "1px solid rgba(255,255,255,0.4)",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "600"
},
  sectionTitle: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.3rem"
  },
lightSection: {
  padding: "100px 20px",
  background: "#0f172a",
  color: "white"
},

whiteSection: {
  padding: "100px 20px",
  background: "#0f172a",
  color: "white"
},
 card: {
  background: "#1e293b",
  border: "1px solid #334155",
  maxWidth: "600px",
  margin: "20px auto",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 0 18px rgba(59,130,246,0.2)", // subtle glow
  transition: "all 0.3s ease"
},
  badgeContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px"
  },
badge: {
  padding: "10px 20px",
  background: "#1e293b",
  color: "#93c5fd",
  border: "1px solid #334155",
  borderRadius: "25px",
  fontSize: "0.9rem",
  fontWeight: "500",
  transition: "all 0.3s ease"
},
subHeading: {
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "600",
  color: "#e2e8f0",
  marginTop: "40px",
  marginBottom: "20px",
},
  certGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  },
  certCard: {
    padding: "20px",
    width: "300px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(59,130,246,0.15)",
    cursor: "pointer",
    textAlign: "center"
  },
certCard: {
  padding: "20px",
  width: "300px",
  background: "#1e293b",
  border: "1px solid #334155",
  borderRadius: "16px",
  textAlign: "center",
  color: "#93c5fd", // blue text
  boxShadow: "0 0 18px rgba(59,130,246,0.25)", // 🔥 permanent glow
  transition: "all 0.3s ease",
  cursor: "pointer",
  fontSize: "0.8rem",
},

certColumns: {
  display: "flex",
  justifyContent: "center",
  gap: "80px",
  marginTop: "40px"
},

certColumn: {
  display: "flex",
  flexDirection: "column",
  gap: "25px"
},
  projectContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },
  projectCard: {
    padding: "25px",
    width: "320px",
    background: "#f1f5f9",
    borderRadius: "16px",
    textDecoration: "none",
    color: "#0f172a"
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },
  modalContent: {
    width: "80%",
    height: "85%",
    background: "white",
    borderRadius: "12px",
    position: "relative",
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  },
  modalIframe: {
    flex: 1,
    border: "none"
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "22px",
    cursor: "pointer"
  },
projectVerticalCard: {
  position: "relative", // IMPORTANT
  background: "#1e293b",
  border: "1px solid #334155",
  maxWidth: "650px",
  margin: "20px auto",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 0 20px rgba(59,130,246,0.4)",
  transition: "all 0.3s ease",
},

projectIcon: {
  position: "absolute",
  top: "15px",
  right: "15px",
  fontSize: "1.2rem",
  color: "#3b82f6",
  textDecoration: "none",
},
modalImage: {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  borderRadius: "8px"
},
internVerticalCard: {
  background: "#1e293b",
  border: "1px solid #334155",
  maxWidth: "700px",
  margin: "20px auto",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 0 20px rgba(59,130,246,0.25)", // permanent glow
  transition: "all 0.3s ease",
  cursor: "pointer"
},
contactSection: {
  padding: "100px 20px",
  background: "#0f172a",
  color: "white",
  textAlign: "center"
},

contactTitle: {
  fontSize: "2.5rem",
  marginBottom: "60px"
},

contactWrapper: {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "60px",
  flexWrap: "wrap",
  textAlign: "left"
},

contactLeft: {
  flex: "1",
  minWidth: "280px"
},

contactIntro: {
  marginBottom: "30px",
  lineHeight: "1.6",
  color: "#cbd5e1"
},

contactItem: {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "25px"
},

contactIcon: {
  fontSize: "1.5rem",
  background: "rgba(59,130,246,0.15)",
  padding: "12px",
  borderRadius: "12px"
},

contactCard: {
  flex: "1",
  minWidth: "300px",
  background: "#1e293b",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
},

contactForm: {
  display: "flex",
  flexDirection: "column",
  gap: "18px"
},

input: {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white"
},

textarea: {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white"
},

sendButton: {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#3b82f6",
  color: "white",
  fontWeight: "600",
  cursor: "pointer"
}
};
export default App;