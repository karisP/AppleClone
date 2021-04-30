import './App.css';
import Navbar from './Components/Navbar';
import Square from './Components/Square';

export interface IContent {
    header: string;
    subheader: string;
    availability: string[] | null;
    linkOne: string;
    linkTwo: string | null;
    image: string;
    colorScheme: "LIGHT"|"DARK"|"PURPLE";
}

const content: IContent[] = [
  {
    header: 'iMac', subheader: 'Say hello.', availability: ['Order 4.30 | Available second half of May'], linkOne:'Learn more', linkTwo: 'View pricing', image: 'https://www.apple.com/v/home/y/images/heroes/imac/hero_imac_avail__zbofyl96mzmm_small_2x.jpg', colorScheme: "LIGHT"
  },
  {
    header: 'iPhone 12', subheader: 'Purple. Now in season.', availability: ['From $29.12/mo. for 24 mo. or $699 before trade-in', 'Purple available 4.30'], linkOne:'Learn more', linkTwo: 'Shop', image: 'https://www.apple.com/v/home/y/images/heroes/iphone-12-purple/hero_iphone_12_purple__eybnx2ju5mky_small_2x.jpg', colorScheme: "PURPLE"
  },
  {
    header: 'iPad Pro', subheader: 'Supercharged by the Apple M1 chip.', availability: ['Order 4.30 | Available second half of May'], linkOne:'Learn more', linkTwo: 'View pricing', image: 'https://www.apple.com/v/home/y/images/heroes/ipad-pro/hero_ipad_pro__gl982dtu49im_small_2x.jpg', colorScheme: "DARK"
  },
  {
    header: 'AirTag', subheader: 'Lose your knack for losing things', availability: null, linkOne:'Learn more', linkTwo: 'Buy', image: 'https://www.apple.com/v/home/y/images/promos/airtag/promo_airtag__e6b73a64nno2_small_2x.jpg', colorScheme: "LIGHT"
  },
  {
    header: 'Watch', subheader: 'The future of health is on your wrist', availability: ['', ''], linkOne:'', linkTwo: '', image: 'https://www.apple.com/v/home/y/images/promos/watch-series-6/promo_watch_series_6_lte__f8lrasjnry2y_small_2x.jpg', colorScheme: "DARK"
  },
  {
    header: `Fill Mom's day with color`, subheader: '', availability: null, linkOne:'Learn more', linkTwo: 'Buy', image: 'https://www.apple.com/v/home/y/images/promos/mothers-day/tile_lastchance__eos89elmgi6a_small_2x.jpg', colorScheme: "LIGHT"
  },
  {
    header: 'Card', subheader: 'Get 3% back on purchases from Apple when you use Apple Card.', availability: null, linkOne:'Learn more', linkTwo: null, image: 'https://www.apple.com/v/home/y/images/promos/apple-card/tile__cauwwcyyn9hy_small_2x.jpg', colorScheme: "LIGHT"
  },
  // {
  //   header: '', subheader: '', availability: ['', ''], linkOne:'', linkTwo: '', image: 'https://www.apple.com', colorScheme: "LIGHT"
  // },
];

function App() {
  return (
    <div className="App">
      {/* navbar component */}
      <Navbar/>
      {/* banners at top */}
      <div className="banner one">Evaluate COVID-19 symptoms and understand next steps</div>
      <div className="banner two"><div><span>Shop online</span> and get Specialist help, free no-contact delivery, and more.</div></div>
      {/* squares */}
      {
        content.map((c, index) => {
          return <Square key={index} content={c}/>
        })
      }
      {/* footer */}
    </div>
  );
}

export default App;
