import { useStore } from '../store.jsx';
import ResortCard from '../components/ResortCard.jsx';

export default function Favorites() {
  const { fav } = useStore();
  return (
    <>
      <div className="bar"><div className="w"><h1>Favorites</h1><span className="mu">Places you saved for later.</span></div></div>
      <div className="w" style={{ marginTop: 24 }}>
        {fav.length ? <div className="grid">{fav.map((i) => <ResortCard key={i} i={i} />)}</div> : <div className="box" style={{ textAlign: 'center', padding: 48 }}>No favorites yet</div>}
      </div>
    </>
  );
}
