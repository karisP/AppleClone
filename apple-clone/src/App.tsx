import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Square from './Components/Square';

export interface IContent {
    id: number;
    header: string | null;
    logo: string | null;
    subheader: string;
    availability: string[] | null;
    linkOne: string;
    linkTwo: string | null;
    images: string[];
    colorScheme: "LIGHT"|"DARK"|"PURPLE";
}

const content: IContent[] = [
  {
    id: 0, header: 'iMac', logo: null, subheader: 'Say hello.', availability: ['Order 4.30 | Available second half of May'], linkOne:'Learn more', linkTwo: 'View pricing', images: ['https://www.apple.com/v/home/y/images/heroes/imac/hero_imac_avail__zbofyl96mzmm_small_2x.jpg', 'https://www.apple.com/v/home/z/images/heroes/imac/hero_imac_avail__zbofyl96mzmm_medium_2x.jpg'], colorScheme: "LIGHT"
  },
  {
    id: 1, header: 'iPhone 12', logo: null, subheader: 'Purple. Now in season.', availability: ['From $29.12/mo. for 24 mo. or $699 before trade-in', 'Purple available 4.30'], linkOne:'Learn more', linkTwo: 'Shop', images: ['https://www.apple.com/v/home/y/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_small_2x.jpg', 'https://www.apple.com/v/home/z/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_medium_2x.jpg'], colorScheme: "PURPLE"
  },
  {
    id: 2, header: 'iPad Pro', logo: null, subheader: 'Supercharged by the Apple M1 chip.', availability: ['Order 4.30 | Available second half of May'], linkOne:'Learn more', linkTwo: 'View pricing', images: ['https://www.apple.com/v/home/y/images/heroes/ipad-pro/hero_ipad_pro__gl982dtu49im_small_2x.jpg', 'https://www.apple.com/v/home/z/images/heroes/ipad-pro/hero_ipad_pro__gl982dtu49im_medium_2x.jpg'], colorScheme: "DARK"
  },
  {
    id: 3, header: 'AirTag', logo: null, subheader: 'Lose your knack for losing things', availability: null, linkOne:'Learn more', linkTwo: 'Buy', images: ['https://www.apple.com/v/home/y/images/promos/airtag/promo_airtag__e6b73a64nno2_small_2x.jpg'], colorScheme: "LIGHT"
  },
  {
    id: 4, header: null, logo: 'https://www.apple.com/v/home/z/images/logos/watch-series-6/promo_logo_watch_series_6_lte__el1kwqt2v52e_small_2x.png', subheader: 'The future of health is on your wrist', availability: ['', ''], linkOne:'Learn more', linkTwo: 'Buy', images: ['https://www.apple.com/v/home/y/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_small_2x.jpg'], colorScheme: "DARK"
  },
  {
    id: 5, header: `Fill Mom's day with color`, logo: null, subheader: `Get 2-hour delivery on select Mother's Day gifts for $9. Or pick up at the Apple Store.`, availability: null, linkOne:'Shop Apple Watch', linkTwo: `Shop gifts for Mother's Day`, images: ['https://www.apple.com/v/home/y/images/promos/mothers-day/tile_lastchance__eos89elmgi6a_small_2x.jpg'], colorScheme: "LIGHT"
  },
  {
    id: 6, header: null, logo: 'https://www.apple.com/v/home/y/images/logos/apple-card/logo__dcojfwkzna2q_small_2x.png', subheader: 'Get 3% back on purchases from Apple when you use Apple Card.', availability: null, linkOne:'Learn more', linkTwo: null, images: ['https://www.apple.com/v/home/y/images/promos/apple-card/tile__cauwwcyyn9hy_small_2x.jpg'], colorScheme: "LIGHT"
  },
];

function App() {
  const [overlay, setOverlay] = React.useState<boolean>(false);
  const toggleOverlay = () => {
    setOverlay(!overlay);
  }

  return (
    <div className="App">
      <div className={overlay ? "overlay" : undefined} onClick={overlay ? toggleOverlay : undefined}/>
      <Navbar toggleOverlay={toggleOverlay} overlay={overlay} />
      <div className="banner"><div><span>Shop online</span> and get Specialist help, free no-contact delivery, and more.</div></div>
      {
        content.slice(0,3).map((c, index) => {
          return <Square key={index} content={c}/>
        })
      }
      <div className="grid">
        {content.slice(3, content.length).map((c, index) => {
            return <Square key={index} content={c}/>
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
