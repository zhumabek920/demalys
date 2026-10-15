import { createContext, useContext, useState } from 'react';

const Ctx = createContext(null);
export const useStore = () => useContext(Ctx);

export function StoreProvider({ children }) {
  const [fav, setFav] = useState([0, 1, 2]);
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  const toggleFav = (i) => setFav((f) => (f.includes(i) ? f.filter((x) => x !== i) : [...f, i]));
  const addBooking = (b) => {
    const nb = { ...b, id: 'DM-2026-' + String(124 + bookings.length).padStart(5, '0') };
    setBookings((x) => [...x, nb]);
    return nb;
  };
  const cancel = (i) => setBookings((x) => x.map((b, k) => (k === i ? { ...b, cancelled: true } : b)));

  return <Ctx.Provider value={{ fav, toggleFav, bookings, addBooking, cancel, user, setUser }}>{children}</Ctx.Provider>;
}
