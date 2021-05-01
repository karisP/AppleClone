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
    const backgroundStyleLogo = {
        backgroundImage: `url(${props.content.logo})`,
        backgroundRepeat: 'no-repeat',
        height: '45px',
        backgroundPosition: `center`,
        backgroundSize: `contain`,
    }

    return(
        <div className={props.content.colorScheme !== "DARK" ? styles.container : `${styles.container} ${styles['dark-theme']}`} style={backgroundStyle}>
            <div className={styles.text}>
                {
                    props.content.logo ?
                    <div style={backgroundStyleLogo}></div>
                    :
                    <h2>{props.content.header}</h2>
                }
                <h3>{props.content.subheader}</h3>
                {
                    props.content.availability ? props.content.availability.map((x, key) => (
                        <p key={key}>{x}</p>
                    ))
                    :
                    null
                }
                <div className={styles.links}>
                    <div>{props.content.linkOne}</div>
                    {props.content.linkTwo ? <div>{props.content.linkTwo}</div> : null}
                </div>
            </div>
        </div>
    )
}
export default Square;