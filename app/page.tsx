'use client'

import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUpRight, Camera, Menu, X } from 'lucide-react'

const collections = [
  { name: 'All adventures', color: 'bg-[#f5c84b]' },
  { name: 'Rainbow Daydreams', color: 'bg-[#f26b9b]' },
  { name: 'Vintage Wanderlust', color: 'bg-[#63c7bd]' },
  { name: 'Travel Diaries', color: 'bg-[#8f72d9]' },
  { name: 'Scenic Escapes', color: 'bg-[#f09a64]' },
]

const stickers = [
  { title: 'Sunshine safari', category: 'Rainbow Daydreams', image: '/yessy-stickers.png', position: 'object-left' },
  { title: 'Postcards from everywhere', category: 'Vintage Wanderlust', image: '/yessy-hero.png', position: 'object-center' },
  { title: 'Little road trip', category: 'Travel Diaries', image: '/yessy-stickers.png', position: 'object-right' },
  { title: 'Quiet places', category: 'Scenic Escapes', image: '/yessy-hero.png', position: 'object-left' },
]

const books = [
  { title: 'Magical Landscapes', blurb: 'Mountains, moons, and tiny places to wonder.', image: '/yessy-coloring.png' },
  { title: 'Around the World', blurb: 'A passport full of places to color in.', image: '/yessy-coloring.png' },
  { title: 'Secret Gardens', blurb: 'A quiet hideaway of leaves, blooms, and bugs.', image: '/yessy-coloring.png' },
]

export default function Page() {
  const [activeCollection, setActiveCollection] = useState('All adventures')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleStickers = useMemo(() => activeCollection === 'All adventures' ? stickers : stickers.filter((item) => item.category === activeCollection), [activeCollection])

  return (
    <main className="vintage-page min-h-screen overflow-hidden bg-[#f5eddf] text-[#392b25]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#1d2453]/15 py-5">
          <a href="#top" className="font-display text-xl font-bold tracking-tight" aria-label="Yessy's Creative Studio home">Yessy&apos;s <span className="text-[#ed6d9a]">Creative Studio</span></a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-5 right-5 top-20 z-20 flex-col gap-5 rounded-2xl border border-[#1d2453]/10 bg-[#fffaf2] p-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a href="#stickers" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-[#ed6d9a]">Sticker collections</a>
            <a href="#coloring" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-[#ed6d9a]">Coloring books</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-[#ed6d9a]">About Yessy</a>
          </nav>
          <button className="rounded-full border border-[#1d2453]/20 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </header>

        <section id="top" className="grid items-center gap-10 py-12 md:grid-cols-[0.92fr_1.08fr] md:py-20">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rotate-[-2deg] rounded-full bg-[#63c7bd] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1d2453]">Illustrated with curiosity</p>
            <h1 className="font-display max-w-xl text-6xl font-bold leading-[.94] tracking-[-.06em] sm:text-8xl">Little adventures.<br /><span className="text-[#ed6d9a]">Endless color.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#39406e]">Discover imaginative stickers and coloring books inspired by magical worlds, memorable places, and the beauty around us.</p>
            <a href="#stickers" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1d2453] px-6 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-1">Explore the collections <ArrowDown size={17} /></a>
          </div>
          <div className="relative rotate-[2deg] rounded-[2rem] border-[10px] border-white bg-white p-2 shadow-[8px_12px_0_#f5c84b]">
            <img src="/yessy-hero.png" alt="A colorful illustrated cat traveling in a camper through a rainbow landscape" className="aspect-[1.15] w-full rounded-[1.25rem] object-cover" />
            <span className="absolute -right-5 -top-7 grid size-20 rotate-12 place-items-center rounded-full bg-[#ed6d9a] text-center text-xs font-bold text-white shadow-lg">made with<br />wonder</span>
            <span className="absolute -bottom-7 -left-7 grid size-20 -rotate-12 place-items-center rounded-full bg-[#8f72d9] text-center text-xs font-bold text-white shadow-lg">go<br />explore!</span>
          </div>
        </section>

        <section className="grid gap-4 border-y border-[#1d2453]/15 py-7 sm:grid-cols-3">
          {[['01', 'Collect little joys', 'Sticker stories for your everyday adventures.'], ['02', 'Make room to wander', 'Coloring pages for slow, happy afternoons.'], ['03', 'See the magic nearby', 'Inspired by everywhere and everything.']].map(([number, title, text]) => <div key={number} className="flex gap-4"><span className="font-display text-3xl font-bold text-[#ed6d9a]">{number}</span><div><h2 className="font-display text-lg font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-[#39406e]">{text}</p></div></div>)}
        </section>

        <section id="stickers" className="py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ed6d9a]">The sticker shelf</p><h2 className="font-display mt-3 text-5xl font-bold tracking-[-.04em] sm:text-6xl">Pick a little world.</h2></div><p className="max-w-sm text-sm leading-6 text-[#39406e]">Every collection is a tiny postcard from Yessy&apos;s imagination. Tap any preview for a closer look.</p></div>
          <div className="mt-9 flex gap-2 overflow-x-auto pb-2">{collections.map((collection) => <button key={collection.name} onClick={() => setActiveCollection(collection.name)} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-colors ${activeCollection === collection.name ? `${collection.color} border-transparent` : 'border-[#1d2453]/20 bg-white'}`}>{collection.name}</button>)}</div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visibleStickers.map((sticker, index) => <button key={sticker.title} onClick={() => setSelectedImage(sticker.image)} className={`group text-left ${index % 2 ? 'rotate-[1.5deg]' : 'rotate-[-1deg]'}`}><div className="overflow-hidden rounded-2xl border-[7px] border-white bg-[#f5c84b] shadow-[4px_6px_0_#1d2453]/15"><img src={sticker.image} alt={sticker.title} className={`aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 ${sticker.position}`} /></div><div className="mt-4 flex items-start justify-between gap-3"><div><span className="text-[10px] font-bold uppercase tracking-wider text-[#ed6d9a]">Concept preview</span><h3 className="font-display mt-1 text-xl font-bold">{sticker.title}</h3><p className="text-xs text-[#39406e]">{sticker.category}</p></div><ArrowUpRight className="mt-1 shrink-0" size={19} /></div></button>)}</div>
        </section>

        <section id="coloring" className="rounded-[2.5rem] bg-[#1d2453] px-6 py-12 text-white sm:px-12 md:py-16"><div className="grid items-end gap-8 md:grid-cols-[1fr_0.8fr]"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5c84b]">The coloring club</p><h2 className="font-display mt-4 text-5xl font-bold leading-none tracking-[-.04em] sm:text-6xl">Color outside<br /><span className="text-[#63c7bd]">the ordinary.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/70">Colorful covers on the outside. Detailed little worlds on the inside. Made for curious hands and quiet moments.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{books.map((book, index) => <button key={book.title} onClick={() => setSelectedImage(book.image)} className="group text-left"><div className="overflow-hidden rounded-2xl bg-white p-2"><img src={book.image} alt={`${book.title} color cover and line-art interior preview`} className="aspect-[1.05] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105" /></div><span className="mt-4 block text-[10px] font-bold uppercase tracking-wider text-[#f5c84b]">Concept preview · 0{index + 1}</span><h3 className="font-display mt-1 text-2xl font-bold">{book.title}</h3><p className="mt-1 text-sm text-white/65">{book.blurb}</p></button>)}</div></section>

        <section id="about" className="grid gap-8 py-20 md:grid-cols-[0.7fr_1fr] md:items-center"><div className="relative mx-auto max-w-sm"><div className="aspect-square rotate-[-4deg] rounded-[2rem] bg-[#f5c84b] p-3 shadow-[8px_8px_0_#ed6d9a]"><img src="/yessy-stickers.png" alt="A playful sheet of travel and rainbow stickers" className="h-full w-full rounded-[1.4rem] object-cover" /></div></div><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8f72d9]">A note from the studio</p><h2 className="font-display mt-3 text-5xl font-bold tracking-[-.04em]">Hi, I&apos;m Yessy.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#39406e]">I&apos;m an illustrator who collects color, curious details, and little moments from the places I go. Yessy&apos;s Creative Studio is where my love of creativity, travel, architecture, and the natural world turns into playful paper treasures.</p><a href="mailto:hello@yessyscreative.studio" className="mt-7 inline-flex items-center gap-2 font-bold text-[#ed6d9a] underline decoration-2 underline-offset-4">Say hello <ArrowUpRight size={17} /></a></div></section>

        <footer className="flex flex-col gap-4 border-t border-[#1d2453]/15 py-8 text-sm sm:flex-row sm:items-center sm:justify-between"><span className="font-display text-lg font-bold">Yessy&apos;s Creative Studio</span><span className="text-[#39406e]">Concept previews for a colorful future.</span><a href="https://instagram.com" aria-label="Instagram" className="hover:text-[#ed6d9a]"><Camera size={19} /></a></footer>
      </div>

      {selectedImage && <div role="dialog" aria-modal="true" aria-label="Enlarged artwork preview" className="fixed inset-0 z-50 grid place-items-center bg-[#1d2453]/80 p-5" onClick={() => setSelectedImage(null)}><div className="relative max-h-[90vh] max-w-3xl rounded-3xl bg-white p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}><button onClick={() => setSelectedImage(null)} aria-label="Close preview" className="absolute -right-3 -top-3 grid size-10 place-items-center rounded-full bg-[#ed6d9a] text-white shadow-lg"><X /></button><img src={selectedImage} alt="Enlarged concept artwork preview" className="max-h-[82vh] rounded-2xl object-contain" /></div></div>}
    </main>
  )
}
