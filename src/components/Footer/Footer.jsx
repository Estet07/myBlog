import React from 'react';
import styles from './footer.module.css'
import { Link } from 'react-router-dom';
import inImg from './img-in.png'
import gitImg from './img-git.png'
import gImg from './img-g.png'
import mImg from './img-m.png'
import youtubeImg from './img-youtube.png'
import twitterImg from './img-twitter.png'

const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Get in touch with me on other platforms</h2>
                <nav>
                    <Link to="https://ru.linkedin.com/"  className={styles.link}>
                        <img src={inImg} alt="In" />
                    </Link>
                    <Link to="https://git-scm.com/"  className={styles.link}>
                        <img src={gitImg} alt="Git" />
                    </Link>
                    <Link to="/"  className={styles.link}>
                        <img src={gImg} alt="G" />
                    </Link>
                    <Link to="/"  className={styles.link}>
                        <img src={mImg} alt="M" />
                    </Link>
                    <Link to="https://www.youtube.com/"  className={styles.link}>
                        <img src={youtubeImg} alt="YouTube" />
                    </Link>
                    <Link to="https://twitter.com/?lang=ru"  className={styles.link}>
                        <img src={twitterImg} alt="Twitter" />
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;