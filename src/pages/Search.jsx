import { useState } from 'react';
import { R, fmt } from '../data.js';
import ResortCard from '../components/ResortCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const AMENITIES = ['Breakfast', 'Pool', 'Beach', 'Wi-Fi', 'Parking'];

export default function Search() {
  const [sort, setSort] = useState('rec');
  const [max, setMax] = useState(0);
  const [tags, setTags] = useState([]);

  let list = R.map((_, i) => i).filter((i) => R[i].region === 'Alakol' && (!max || R[i].p <= max) && tags.every((t) => R[i].t.includes(t)));
  if (sort === 'lo') list.sort((a, b) => R[a].p - R[b].p);
  if (sort === 'hi') list.sort((a, b) => R[b].p - R[a].p);
  if (sort === 'rt') list.sort((a, b) => R[b].r - R[a].r);
  const toggle = (t) => setTags((x) => (x.includes(t) ? x.filter((y) => y !== t) : [...x, t]));
  const reset = () => { setMax(0); setTags([]); setSort('rec'); };

  return (
    <>
      <div className="bar"><div className="w">
        <div className="mu">Home / Alakol</div>
        <h1>Recreation Centers in Alakol</h1>
        <span className="mu">5 exceptional stays matching your dates and preferences.</span>
        <SearchBar dates style={{ marginTop: 20 }} />
      </div></div>
      <div className="w lay">
        <aside className="box fil">
          <b>Filters</b>
          <h4>Max price / night</h4>
          <select value={max} onChange={(e) => setMax(+e.target.value)}>
            <option value={0}>Any price</option>
            {[30000, 35000, 45000].map((v) => <option key={v} value={v}>Up to {fmt(v)}</option>)}
          </select>
          <h4>Amenities</h4>
          {AMENITIES.map((t) => (
            <label key={t}><input type="checkbox" checked={tags.includes(t)} onChange={() => toggle(t)} />{t}</label>
          ))}
          <button className="btn o s" style={{ marginTop: 12 }} onClick={reset}>Reset filters</button>
        </aside>
        <div>
          <div className="row" style={{ marginBottom: 16 }}>
            <b>{list.length} properties found</b>
            <select style={{ width: 'auto' }} value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="rec">Recommended</option>
              <option value="lo">Price: low to high</option>
              <option value="hi">Price: high to low</option>
              <option value="rt">Rating</option>
            </select>
          </div>
          {list.length ? list.map((i) => <ResortCard key={i} i={i} list />) : <div className="box">No results. Try resetting filters.</div>}
        </div>
      </div>
    </>
  );
}
