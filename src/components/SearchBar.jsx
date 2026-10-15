import { useNavigate } from 'react-router-dom';

export default function SearchBar({ style, dates }) {
  const nav = useNavigate();
  const F = ({ ic, label, children }) => (
    <label><i className="ic">{ic}</i><span><small>{label}</small>{children}</span></label>
  );
  return (
    <div className="sb" style={style}>
      <F ic="⌖" label="Destination"><input defaultValue="Alakol, Kazakhstan" /></F>
      <F ic="▦" label="Check-in"><input placeholder="Select date" defaultValue={dates ? 'Jul 10, 2026' : ''} /></F>
      <F ic="▦" label="Check-out"><input placeholder="Select date" defaultValue={dates ? 'Jul 15, 2026' : ''} /></F>
      <F ic="☺" label="Guests"><input defaultValue="2 guests" /></F>
      <button className="btn" onClick={() => nav('/search')}>⌕ Search</button>
    </div>
  );
}
