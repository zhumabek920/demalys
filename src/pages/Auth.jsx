import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store.jsx';

export default function Auth({ mode }) {
  const reg = mode === 'register';
  const nav = useNavigate();
  const { setUser } = useStore();
  const [f, setF] = useState({ fn: '', ln: '', em: '', pw: '' });
  const [agree, setAgree] = useState(false);
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = () => {
    const okMail = /.+@.+/.test(f.em);
    if (reg ? !f.fn || !okMail || f.pw.length < 4 || !agree : !okMail || f.pw.length < 4)
      return setErr(reg ? 'Fill all fields and accept the terms.' : 'Enter a valid email and password (4+ chars).');
    setUser(reg ? f.fn : f.em.split('@')[0]);
    nav('/');
  };

  return (
    <div className="auth">
      <h1>{reg ? 'Create your account' : 'Sign in to your account'}</h1>
      <p className="mu">{reg ? 'Join Demalys.kz and book in minutes.' : 'Welcome back! Please enter your details.'}</p>
      {reg && (
        <div className="two">
          <label className="fld"><span>First name</span><input className="f" value={f.fn} onChange={set('fn')} /></label>
          <label className="fld"><span>Last name</span><input className="f" value={f.ln} onChange={set('ln')} /></label>
        </div>
      )}
      <label className="fld"><span>Email</span><input className="f" type="email" placeholder="name@example.com" value={f.em} onChange={set('em')} /></label>
      <label className="fld"><span>Password</span><input className="f" type="password" value={f.pw} onChange={set('pw')} /></label>
      {reg && <label style={{ display: 'flex', gap: 8 }}><input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />I agree to the Terms of Use</label>}
      <div className="err">{err}</div>
      <button className="btn" style={{ width: '100%' }} onClick={submit}>{reg ? 'Create account' : 'Sign In'}</button>
      <p className="mu" style={{ textAlign: 'center' }}>
        {reg ? 'Already have an account? ' : "Don't have an account? "}
        <Link to={reg ? '/login' : '/register'} style={{ color: 'var(--pri)', fontWeight: 600 }}>{reg ? 'Sign In' : 'Register'}</Link>
      </p>
    </div>
  );
}
