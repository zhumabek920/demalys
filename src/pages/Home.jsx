import { Link } from 'react-router-dom';
import { DESTINATIONS, photo } from '../data.js';
import ResortCard from '../components/ResortCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const FEATURED = [0, 5, 6];

export default function Home() {
  return (
    <>
      <section className="hero" style={{ '--hb': photo('hero', ['#2f7f6b', '#9ccbe0']) }}>
        <div className="w">
          <span className="pill">Explore Kazakhstan’s most beautiful escapes</span>
          <h1>Find Your Perfect Place<br />to Relax</h1>
          <p>Discover and book the best recreation centers across Kazakhstan.</p>
          <SearchBar />
          <div className="chips"><span>✓ Secure booking</span><span>✓ Instant confirmation</span><span>✓ Local support</span></div>
        </div>
      </section>
      <div className="w">
        <div className="row"><h2>Popular destinations</h2><Link to="/search" className="lnk">Explore all destinations →</Link></div>
        <div className="grid">
          {DESTINATIONS.map(([n, c, g, img]) => (
            <Link key={n} to="/search" className="dest" style={{ background: 'linear-gradient(180deg,#0000 40%,#0008),' + photo(img, g) }}>
              <span className="arr">↗</span>{n}<small>{c}</small>
            </Link>
          ))}
        </div>
        <div className="row"><h2>Popular recreation centers</h2><Link to="/search" className="lnk">View all properties →</Link></div>
        <div className="grid">{FEATURED.map((i) => <ResortCard key={i} i={i} />)}</div>
        <h2>Why Demalys.kz?</h2>
        <div className="why">
          <div><b>Verified properties</b><span className="mu">Every base is reviewed.</span></div>
          <div><b>Live availability</b><span className="mu">Real-time free rooms.</span></div>
          <div><b>Easy booking</b><span className="mu">Book in minutes.</span></div>
          <div><b>Local support</b><span className="mu">We help every step.</span></div>
        </div>
        <div className="cta">
          <div><h2>Own a recreation center?</h2>List your property and get new bookings.</div>
          <Link className="btn" to="/register">List your property</Link>
        </div>
      </div>
    </>
  );
}
