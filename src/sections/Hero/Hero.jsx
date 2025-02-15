import styles from'./HeroStyles.module.css'; 
import heroImg from '../../assets/Screenshot_20250114_190721_Discord.jpg';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import CV from '../../assets/Resume Farrel Rasyad.pdf'

function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picure of Farrel Rasyad" 
            />
            <img sylest
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
            />
        </div>
        <div className={styles.info}>
            <h1>
                Farrel
                <br />
                Rasyad
            </h1>
            <h2>
                Web Developer
            </h2>
            <span>
                <a href="https://linkedin.com/" target='_blank'>
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://linkedin.com/" target='_blank'>
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://linkedin.com/" target='_blank'>
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
            </span>
            <p>web development with hands-on experience in Laravel, React, and building user-focused, dynamically scalable data-driven 
            web applications</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero;