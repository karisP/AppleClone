import * as React from 'react';
import styles from './Square.module.css';
import { IContent } from '../App';

interface IProps {
    content: IContent;
}
const Square = (props: IProps) => {
    const backgroundStyle = {
        background: `url(${props.content.image})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
    }

    return(
        <div className={props.content.colorScheme !== "DARK" ? styles.container : `${styles.container} ${styles['dark-theme']}`} style={backgroundStyle}>
            <div className={styles.text}>
                <h2>{props.content.header}</h2>
                <h3>{props.content.subheader}</h3>
                <p>{props.content.availability}</p>
                <div className={styles.links}>
                    <a>{props.content.linkOne}</a>
                    <a>{props.content.linkTwo ? props.content.linkTwo : ''}</a>
                </div>
            </div>
            {/* <div className={styles.image}><img src={props.content.image} /></div> */}
        </div>
    )
}
export default Square;