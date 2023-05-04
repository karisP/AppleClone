import * as React from 'react';
import styles from './Square.module.css';
import { IContent } from '../App';

interface IProps {
    content: IContent;
}

const Square = (props: IProps) => {

    const backgroundStyleLogo = {
        backgroundImage: `url(${props.content.logo})`,
        backgroundRepeat: 'no-repeat',
        height: '45px',
        backgroundPosition: `center`,
        backgroundSize: `contain`,
    }

    return(
        <div className={props.content.colorScheme !== "DARK" ? `${styles.container} ${styles[`bkgr-${props.content.id}`]}` : `${styles.container} ${styles[`bkgr-${props.content.id}`]} ${styles['dark-theme']}`}>
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
                    <div>{props.content.linkOne}<div className={styles.chevron}></div></div>
                    {props.content.linkTwo ? <div>{props.content.linkTwo}<div className={styles.chevron}></div></div> : null}
                </div>
            </div>
        </div>
    )
}
export default Square;