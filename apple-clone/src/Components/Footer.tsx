import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    const [list1, setList1] = React.useState<boolean>(false);
    const [list2, setList2] = React.useState<boolean>(false);
    const [list3, setList3] = React.useState<boolean>(false);
    const [list4, setList4] = React.useState<boolean>(false);
    const [list5, setList5] = React.useState<boolean>(false);
    const [list6, setList6] = React.useState<boolean>(false);
    const [list7, setList7] = React.useState<boolean>(false);
    const [list8, setList8] = React.useState<boolean>(false);
    const [list9, setList9] = React.useState<boolean>(false);
    const [list10, setList10] = React.useState<boolean>(false);

    return (
        <div className={styles.container}>
            <section>
                <ul>
                    <li>1. Price includes a $30 AT&amp;T, T-Mobile, Sprint, or Verizon discount. Requires activation with carrier. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens&nbsp;One or Apple&nbsp;Card Monthly&nbsp;Installments and iPhone activation with AT&amp;T, Sprint, T-Mobile, or Verizon for purchases in an Apple Store. Taxes and shipping not included. Additional Apple&nbsp;Card Monthly&nbsp;Installments and iPhone Payments terms&nbsp;apply.</li>
                    <li>2. Two-hour delivery on eligible Apple products in most metros. Offer is not available on customized Mac, engraved products, and for certain order types including orders paid for with financing or by bank transfer. Time restrictions apply.&nbsp;Find a store to view local store hours or see checkout for estimated delivery. Delivery times vary according to your selected delivery address, availability of your items, and the time of day you place your order. A signature is required for&nbsp;delivery. Drivers may ask for verbal confirmation of receipt from a safe distance to satisfy the signature requirement.</li>
                    <li>3. $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until canceled. Restrictions and other <a href="/promo/" data-original-tabindex="">terms</a>&nbsp;apply.</li>
                    <li>4. Apple Card Monthly Installments (ACMI) is a payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204 for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay in full or one time payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&amp;T, Sprint, Verizon, or T-Mobile.</li>
                    <li>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with iOS or iPadOS 13.2 or later. Update to the latest version of iOS or iPadOS by going to Settings &gt; General &gt; Software Update. Tap Download and Install.</li>
                    <li>Available for qualifying applicants in the United States.</li>
                    <li>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
                    <li>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</li>
                    <li>Apple&nbsp;TV+ is $4.99/month after free trial. One subscription per Family&nbsp;Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="/promo/" data-original-tabindex="">terms</a>&nbsp;apply.</li>
                </ul>
            </section>
            <section>
                <div className={styles.column}>
                    <button onClick={() => setList1(!list1)}><span>Shop and Learn</span><span className={!list1 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                    <ul className={!list1 ? styles.hide : ''}>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>AirPods</li>
                        <li>HomePod</li>
                        <li>iPod touch</li>
                        <li>AirTag</li>
                        <li>Accessories</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div>
                        <button onClick={() => setList2(!list2)}><span>Services</span><span className={!list2 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list2 ? styles.hide : ''}>
                            <li>Apple Music</li>
                            <li>Apple TV+</li>
                            <li>Apple Fitness+</li>
                            <li>Apple News+</li>
                            <li>Apple Arcade</li>
                            <li>iCloud</li>
                            <li>Apple One</li>
                            <li>Apple Card</li>
                            <li>Apple Books</li>
                            <li>App Store</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setList3(!list3)}><span>Account</span><span className={!list3 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list3 ? styles.hide : ''}>
                            <li>Manage Your Apple ID</li>
                            <li>Apple Store Account</li>
                            <li>iCloud.com</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>
                    <button onClick={() => setList4(!list4)}><span>Apple Store</span><span className={!list4 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                    <ul className={!list4 ? styles.hide : ''}>
                        <li>Find a Store</li>
                        <li>Shop Online</li>
                        <li>Genius Bar</li>
                        <li>Today at Apple</li>
                        <li>Apple Camp</li>
                        <li>Apple Store App</li>
                        <li>Refurbished and Clearance</li>
                        <li>Financing</li>
                        <li>Apple Trade In</li>
                        <li>Order Status</li>
                        <li>Shopping Help</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div>
                        <button onClick={() => setList5(!list5)}><span>For Business</span><span className={!list5 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list5 ? styles.hide : ''}>
                            <li>Apple and Business</li>
                            <li>Shop for Business</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setList6(!list6)}><span>For Education</span><span className={!list6 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list6 ? styles.hide : ''}>
                            <li>Apple and Education</li>
                            <li>Shop for K-12</li>
                            <li>Shop for College</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setList7(!list7)}><span>For Healthcare</span><span className={!list7 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list7 ? styles.hide : ''}>
                            <li>Apple in Healthcare</li>
                            <li>Health on Apple Watch</li>
                            <li>Health Records on iPhone</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setList8(!list8)}><span>For Government</span><span className={!list8 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list8 ? styles.hide : ''}>
                            <li>Shop for Government</li>
                            <li>Shop for Veterans and Military</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <button onClick={() => setList9(!list9)}><span>Apple Values</span><span className={!list9 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list9 ? styles.hide : ''}>
                            <li>Accessibility</li>
                            <li>Education</li>
                            <li>Environment</li>
                            <li>Inclusion and Diversity</li>
                            <li>Privacy</li>
                            <li>Racial Equity and Justice</li>
                            <li>Supplier Responsibility</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setList10(!list10)}><span>About Apple</span><span className={!list10 ? styles.plus : `${styles.plus} ${styles.transform}`}>+</span></button>
                        <ul className={!list10 ? styles.hide : ''}>
                            <li>Newsroom</li>
                            <li>Apple Leadership</li>
                            <li>Career Opportunities</li>
                            <li>Investors</li>
                            <li>Ethics and Compliance</li>
                            <li>Events</li>
                            <li>Contact Apple</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div>More ways to shop: <a href="/retail/">Find an Apple Store</a> or <a href="https://locate.apple.com/">other retailer</a> near you. <span>Or call 1-800-MY-APPLE.</span></div>
                <div>United States</div>
                <div>
                    <div>Copyright 2020 Apple Inc. All rights reserved.</div>
                    <div className={styles['legal-links']}>
                        <div>Privacy Policy</div>
                        <div>Terms of Use</div>
                        <div>Sales and Refunds</div>
                        <div>Legal</div>
                        <div>Site Map</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer;