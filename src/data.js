export const R = [
  { img: 'resort-1', region: 'Alakol', n: 'Alakol Paradise Resort', l: 'Akshi, Alakol • 120 m to lake', r: 9.2, p: 35000, t: ['Breakfast', 'Pool', 'Private beach'], g: ['#2f7f6b', '#9ccbe0'] },
  { img: 'resort-2', region: 'Alakol', n: 'Pelican Family Club', l: 'Koktal, Alakol • 60 m to lake', r: 9.0, p: 41000, t: ['Kids club', 'Sauna', 'Beach'], g: ['#3b7ea1', '#a5d9b0'] },
  { img: 'resort-3', region: 'Alakol', n: 'Aquamarine Alakol', l: 'Akshi, Alakol • Beachfront', r: 8.9, p: 32500, t: ['Lake view', 'Restaurant', 'Wi-Fi'], g: ['#0b7f8a', '#bfe6dd'] },
  { img: 'resort-4', region: 'Alakol', n: 'Alazis Eco Village', l: 'Kabanbay, Alakol • 350 m to lake', r: 8.7, p: 27000, t: ['Eco cabins', 'Bikes', 'Breakfast'], g: ['#b9772e', '#e8c88a'] },
  { img: 'resort-5', region: 'Alakol', n: 'Windy Bay Recreation Base', l: 'Akshi, Alakol • 600 m to lake', r: 8.5, p: 24000, t: ['Shuttle', 'BBQ', 'Parking'], g: ['#2f7f6b', '#d6e7c5'] },
  { img: 'resort-6', region: 'Burabay', n: 'Burabay Forest Lodge', l: 'Burabay • Inside national park', r: 9.0, p: 42000, t: ['Breakfast', 'Lake access'], g: ['#1f5d50', '#a5c7a5'] },
  { img: 'resort-7', region: 'Kapchagay', n: 'Nomad Coast Retreat', l: 'Kapchagay • Private beach', r: 8.8, p: 29000, t: ['Breakfast', 'Lake access'], g: ['#3b7ea1', '#9ccbe0'] },
];
export const ROOMS = [
  ['Standard Room', '2 guests • 1 queen bed', 28000],
  ['Family Room', '2-4 guests • 2 beds', 35000],
  ['Deluxe Room', '3 guests • king bed', 48000],
];
export const DESTINATIONS = [
  ['Alakol', '42 places', ['#0e6f7a', '#9ccbe0'], 'alakol'],
  ['Burabay', '57 places', ['#2f7f6b', '#a5d9b0'], 'burabay'],
  ['Balkhash', '31 places', ['#b9772e', '#e8c88a'], 'balkhash'],
  ['Kapchagay', '28 places', ['#3b7ea1', '#bfe6dd'], 'kapchagay'],
];
export const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ' ') + ' ₸';

// Placeholder landscape. Replace with real photos: background: url('/img/alakol.jpg') center/cover
export const scene = (g) => {
  const s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${g[1]}"/><stop offset="1" stop-color="#fbe3b8"/></linearGradient><linearGradient id="w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset="1" stop-color="#0b3b36"/></linearGradient></defs><rect width="800" height="500" fill="url(#a)"/><circle cx="540" cy="205" r="46" fill="#fff6dc" opacity=".85"/><path d="M0 270L120 190L210 250L330 150L470 262L590 190L700 250L800 205V330H0Z" fill="${g[0]}" opacity=".55"/><path d="M0 300L150 240L300 300L450 235L620 305L800 250V340H0Z" fill="${g[0]}" opacity=".85"/><rect y="320" width="800" height="180" fill="url(#w)"/><path d="M0 460Q200 420 400 455T800 440V500H0Z" fill="#2f5d3a" opacity=".85"/></svg>`;
  return `url('data:image/svg+xml,${encodeURIComponent(s)}') center/cover`;
};

// Real photos: put files in public/img/ (see README). If a file is missing, the drawn scene is shown instead.
export const photo = (name, g) => `url('/img/${name}.jpg') center/cover, ${scene(g)}`;
