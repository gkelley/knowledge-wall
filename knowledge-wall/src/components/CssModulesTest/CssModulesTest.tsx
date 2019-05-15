import React from 'react';
import styles from './CssModulesTest.module.css';

const CssModulesTest = () => {
    return (
        <div className={styles.green}>
            <p>This should be green!</p>
        </div>
    );
};

export default CssModulesTest;