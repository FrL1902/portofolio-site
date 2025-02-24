// import styles from'./HeroStyles.module.css'; 
// import heroImg from '../../assets/Screenshot_20250114_190721_Discord.jpg';
// import themeIcon from '../../assets/sun.svg';
// import twitterIcon from '../../assets/twitter-light.svg';
// import CV from '../../assets/Resume Farrel Rasyad.pdf'
// import { useTheme } from '../../common/ThemeContext';


// import styles from './HeroStyles.module.css';
// import heroImg from '../../assets/Screenshot_20250114_190721_Discord.jpg';
// import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
// import githubLight from '../../assets/github-light.svg';
// import githubDark from '../../assets/github-dark.svg';
// import linkedinLight from '../../assets/linkedin-light.svg';
// import linkedinDark from '../../assets/linkedin-dark.svg';
// import CV from '../../assets/Resume Farrel Rasyad.pdf'
// import { useTheme } from '../../common/ThemeContext';

// function Hero() {
//     const { theme, toggleTheme } = useTheme();

//     const themeIcon = theme === 'light' ? sun : moon;
//     const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
//     const githubIcon = theme === 'light' ? githubLight : githubDark;
//     const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

//   return (
//     <section id="hero" className={styles.container}>
//         <div className={styles.colorModeContainer}>
//             <img 
//                 className={styles.hero} 
//                 src={heroImg} 
//                 alt="Profile picure of Farrel Rasyad" 
//             />
//             <img sylest
//                 className={styles.colorMode}
//                 src={themeIcon} 
//                 alt="Color mode icon" 
//             />
//         </div>
//         <div className={styles.info}>
//             <h1>
//                 Farrel
//                 <br />
//                 Rasyad
//             </h1>
//             <h2>
//                 Web Developer
//             </h2>
//             <span>
//                 <a href="https://linkedin.com/" target='_blank'>
//                     <img src={twitterIcon} alt="Twitter icon" />
//                 </a>
//                 <a href="https://linkedin.com/" target='_blank'>
//                     <img src={twitterIcon} alt="Twitter icon" />
//                 </a>
//                 <a href="https://linkedin.com/" target='_blank'>
//                     <img src={twitterIcon} alt="Twitter icon" />
//                 </a>
//             </span>
//             <p>web development with hands-on experience in Laravel, React, and building user-focused, dynamically scalable data-driven 
//             web applications</p>
//             <a href={CV} download>
//                 <button className='hover'>Resume</button>
//             </a>
//         </div>
//     </section>
//   )
// }

// export default Hero;

import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Screenshot_20250114_190721_Discord.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume Farrel Rasyad.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Farrel Rasyad"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Farrel
          <br />
          Rasyad
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        web development with hands-on experience in Laravel, React, and building user-focused, dynamically scalable data-driven web applications
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;