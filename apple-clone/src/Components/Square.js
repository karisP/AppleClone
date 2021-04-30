import styles from './Square.module.css';

const Square = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Header 1</h2>
                <h3>Subheader</h3>
                <p>Availablity</p>
                <div className={styles.links}>
                    <a>Link 1</a>
                    <a>Link 2</a>
                </div>
            </div>
            <div className={styles.image}>image</div>
        </div>
    )
}
export default Square;