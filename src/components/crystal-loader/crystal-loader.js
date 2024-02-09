import styles from "./CrystalLoader.module.scss";

export default function CrystalLoader() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loaderOrbit}>
                <div className={styles.loaderL1}>
                    <div className={styles.inner}></div>
                </div>
                <div className={styles.loaderL2}>
                    <div className={styles.inner}></div>
                </div>
                <div className={styles.loaderL3}>
                    <div className={styles.inner}></div>
                </div>
                <div className={styles.loaderL4}>
                    <div className={styles.inner}></div>
                </div>
                <div className={styles.loaderL5}>
                    <div className={styles.inner}></div>
                </div>
            </div>
            <div className={styles.loaderCenter}>
                <div className={styles.inner}></div>
            </div>
        </div>
    );
}
