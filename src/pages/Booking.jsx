import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { R, ROOMS, fmt } from '../data.js';
import { useStore } from '../store.jsx';

const NIGHTS = 4;

export default function Booking() {
  const { state } = useLocation();
  const nav = useNavigate();
  const { addBooking } = useStore();
  const [f, setF] = useState({ fn: '', ln: '', em: '', ph: '', rq: '' });
  const [agree, setAgree] = useState(false);
  const [err, setErr] = useState('');
  if (!state) return <Navigate to="/search" replace />;
  const r = R[state.id];
  const m = ROOMS[state.room];
  const total = m[2] * NIGHTS;
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const confirm = () => {
    if (!f.fn || !f.ln || !/.+@.+/.test(f.em) || !f.ph || !agree) return setErr('Please complete all fields and accept the terms.');
    addBooking({ n: r.n, room: m[0], nights: NIGHTS, total, i: state.id, guest: f.fn + ' ' + f.ln });
    nav('/confirmation');
  };
  const Field = ({ label, k, type = 'text' }) => (
    <label className="fld"><span>{label}</span><input className="f" type={type} value={f[k]} onChange={set(k)} /></label>
  );

  return (
    <>
      <div className="bar"><div className="w"><h1>Complete Your Booking</h1><span className="mu">Details → Confirm → Done</span></div></div>
      <div className="w lay b">
        <div className="box">
          <h3 style={{ marginTop: 0 }}>Guest details</h3>
          <div className="two">{Field({ label: 'First name', k: 'fn' })}{Field({ label: 'Last name', k: 'ln' })}</div>
          {Field({ label: 'Email', k: 'em', type: 'email' })}
          {Field({ label: 'Phone', k: 'ph', type: 'tel' })}
          <label className="fld"><span>Special requests</span><textarea rows={3} value={f.rq} onChange={set('rq')} /></label>
        </div>
        <div className="box">
          <h3 style={{ marginTop: 0 }}>{r.n}</h3>
          <div className="mu">{m[0]} • Jul 10 – Jul {10 + NIGHTS}, 2026</div>
          <div className="row" style={{ margin: '16px 0' }}><span>{fmt(m[2])} × {NIGHTS} nights</span><b>{fmt(total)}</b></div>
          <div className="row" style={{ borderTop: '1px solid var(--bd)', paddingTop: 12 }}><b>Total</b><b className="price">{fmt(total)}</b></div>
          <label style={{ display: 'flex', gap: 8, margin: '16px 0' }}>
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />I agree to the booking terms
          </label>
          <div className="err">{err}</div>
          <button className="btn" style={{ width: '100%' }} onClick={confirm}>Confirm Booking</button>
        </div>
      </div>
    </>
  );
}
