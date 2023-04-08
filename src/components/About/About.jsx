import React from 'react';
import styles from './about.module.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapperTitle}>
                <p className={styles.title}>
                    Here I write stuff related to computer, anime, 
                    movies and what’s happening in my life?
                </p>
            </div>
            <div className={styles.wrapperLink}>
                <Link to="/about" className={styles.link}>More about me</Link>
            </div>    
            
        </section>
    );
};

export default About;