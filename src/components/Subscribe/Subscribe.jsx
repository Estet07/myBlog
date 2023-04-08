import React from 'react';
import styles from  './subscribe.module.css'

const Subscribe = () => {
    return (
        <section className={styles.wrapper}>
            <p className={styles.title}>
                Would you like to recieve emails of my posts every friday, if yes then consider subscribing
            </p>
            <div>
                <input className={styles.email} placeholder="name@domain.com" type="email" />
                <input className={styles.submit} value="Subscribe" type="submit" />
            </div>
        </section>
    );
};

export default Subscribe;