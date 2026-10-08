'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, RotateCcw, Sparkles, X } from 'lucide-react'

const jewelry = [
  ['Emerald Christmas Lady', 'Victorian sticker · winter salon', 'A luxurious die-cut portrait in emerald velvet, gold embroidery, and candlelight.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_luxurious_die-cut_sticker_of_a_Victorian__b82a7e53-932a-402b-befd-d8785cb6bcb5_3-zMoBeMlqJ9LCvC1l6Ec62ALW5WJdfH.png'],
  ['Lantern Keeper', 'Victorian sticker · evening garden', 'A romantic green-gowned figure carrying a glowing antique lantern through snow-covered branches.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_luxurious_die-cut_sticker_of_a_Victorian__b82a7e53-932a-402b-befd-d8785cb6bcb5_2-a8oBXWWKZov98F76G6e06sd3zEKx9Y.png'],
  ['Winter Garden Muse', 'Victorian sticker · frosted pine', 'A richly embellished emerald gown framed by frost, warm light, and evergreen shadows.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_luxurious_die-cut_sticker_of_a_Victorian__b82a7e53-932a-402b-befd-d8785cb6bcb5_1-b8ZjCmUQE7axPS6EtGdNVkVO9g7VSc.png'],
  ['Golden Lantern Portrait', 'Victorian sticker · twilight collection', 'A classic Victorian silhouette with a glowing lantern and softly gilded details.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_luxurious_die-cut_sticker_of_a_Victorian__b82a7e53-932a-402b-befd-d8785cb6bcb5_0-lVTKVlTZBb7fZ5vXj558qLIKrOmelb.png'],
] as const

const stickerNames = ['Botanical sprig', 'Perfume bottle', 'Paris label', 'Victorian rose']

const archiveImages = [
  ['Jewelry cabinet', 'A sunlit vanity with an open scrapbook and treasured pieces.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_cinematic_3D_vintage_atelier_for_a_jewelr_8a0e9e68-4dea-4a2a-8202-473f93a155bb_2-Nv0DhOADYC1fmY5IuBC9FbJTvflquZ.png'],
  ['The dressing room', 'A jewel box, mirror, and paper keepsakes gathered in warm light.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_cinematic_3D_vintage_atelier_for_a_jewelr_8a0e9e68-4dea-4a2a-8202-473f93a155bb_3-8z2NSzCKM4HGBXfZsEXYXoxiLkptFv.png'],
  ['Rosewood keepsake box', 'Vintage jewelry resting beside botanical correspondence.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_reate_a_wide_cinematic_website_hero_showing_an_ope_0021af75-1bfb-4b4a-8a9b-72f3faa5b585_3-TPj3I5scvJ9pvenef4IvzcizqwfXJI.png'],
  ['Open jewelry case', 'Gold pieces and illustrated cards arranged like a private collection.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_cinematic_3D_vintage_atelier_for_a_jewelr_8a0e9e68-4dea-4a2a-8202-473f93a155bb_0-qvLWZg9zekhzihkKti0qoBmAmTRMYd.png'],
  ['The collector’s drawer', 'A close study of chains, charms, and floral ephemera.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_reate_a_wide_cinematic_website_hero_showing_an_ope_0021af75-1bfb-4b4a-8a9b-72f3faa5b585_0-i6zI0FBjElbENIRT1vD4frrfgAeeQq.png'],
  ['Botanical correspondence', 'Pressed flowers and old-world jewelry tucked into a mahogany drawer.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_reate_a_wide_cinematic_website_hero_showing_an_ope_0021af75-1bfb-4b4a-8a9b-72f3faa5b585_2-5CGkG3mnCNeUuWBf20ks42D4T2J3na.png'],
  ['Winter promenade', 'A back-facing burgundy gown moving through a snow-covered woodland.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_Victorian_fashion_sticker_featuring_a_wom_df92d695-5a4e-46d0-b432-d28e6f2a1bef_3%20%281%29-7SazLyDK7sCGZJxocuU5Orw9VzRAdf.png'],
  ['The winter portrait', 'A Victorian figure in a high-collared velvet dress against frosted trees.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_Victorian_fashion_sticker_featuring_a_wom_df92d695-5a4e-46d0-b432-d28e6f2a1bef_2%20%281%29-f84YPXvchIfMUlTsJYzIf2DyDqR9pP.png'],
  ['Burgundy profile', 'A richly layered gown framed by a pale, snowy forest.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_Victorian_fashion_sticker_featuring_a_wom_df92d695-5a4e-46d0-b432-d28e6f2a1bef_0%20%281%29-FjxYivwXbiM8MK4MyKCvigafUSieDB.png'],
  ['Snowfall silhouette', 'A graceful rear view of the velvet dress with a crisp sticker edge.', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yess_27737_Create_a_Victorian_fashion_sticker_featuring_a_wom_df92d695-5a4e-46d0-b432-d28e6f2a1bef_1%20%281%29-DRgp8FI1PXIQseNpU1iqDMWkWqJKs3.png'],
] as const

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [focus, setFocus] = useState<'atelier' | 'jewelry' | 'journal'>('atelier')
  const [placed, setPlaced] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<(typeof jewelry)[number] | null>(null)

  const addSticker = (name: string) => setPlaced((items) => items.includes(name) ? items : [...items, name])
  const resetJournal = () => setPlaced([])

  return (
    <main className="atelier min-h-screen overflow-hidden bg-[#ede2cf] text-[#30231f]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-[#7e2330]/30 px-6 py-5 lg:px-10">
        <a href="#top" className="brand font-display text-xl font-semibold tracking-[.08em]" aria-label="Yessy's Vintage Finds home">Yessy&apos;s <span>Vintage Finds</span></a>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-5 right-5 top-20 flex-col gap-5 border border-[#7e2330]/20 bg-[#f8f0df] p-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          <a href="#jewelry" onClick={() => setMenuOpen(false)}>Jewelry cabinet</a><a href="#scrapbook" onClick={() => setMenuOpen(false)}>Sticker scrapbook</a><a href="#about" onClick={() => setMenuOpen(false)}>The story</a>
        </nav>
        <button className="rounded-sm border border-[#7e2330]/30 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[.76fr_1.24fr] lg:px-10 lg:py-20">
        <div className="relative z-10"><p className="eyebrow">An independent vintage seller</p><h1 className="font-display mt-5 max-w-xl text-6xl font-medium leading-[.94] sm:text-8xl">Step inside a world of <em>timeless treasures.</em></h1><p className="mt-7 max-w-md text-lg leading-8 text-[#624b42]">A lovingly curated cabinet of vintage Avon jewelry and paper curiosities, gathered for the modern collector.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#jewelry" className="button button-primary">Explore Jewelry <ArrowDown /></a><a href="#scrapbook" className="button button-outline">Discover Stickers <ArrowUpRight /></a></div></div>
        <AtelierScene focus={focus} onFocus={setFocus} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 border-y border-[#7e2330]/25 px-6 py-7 sm:grid-cols-3 lg:px-10"><div><span className="number">01</span><h2>Collected with care</h2><p>Authentic vintage pieces, clearly described.</p></div><div><span className="number">02</span><h2>A slower kind of shopping</h2><p>Details, patina, and stories worth noticing.</p></div><div><span className="number">03</span><h2>Always independent</h2><p>Concept imagery is labeled; information is editable.</p></div></section>

      <section id="jewelry" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="section-heading"><div><p className="eyebrow">The Victorian sticker collection</p><h2 className="font-display">Die-cut ladies in emerald velvet.</h2></div><p>A quartet of luxurious Victorian portrait stickers, made for winter journals, gift wrap, and collectors of beautiful paper curiosities.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{jewelry.map(([name, meta, description, image], index) => <article className="product-card" key={name}><div className={`jewel jewel-${index + 1}`}><img src={image} alt={name} /></div><p className="eyebrow mt-5">{meta}</p><h3 className="font-display mt-2 text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#624b42]">{description}</p><button type="button" onClick={() => setSelectedItem([name, meta, description, image])} className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-[#7e2330] underline underline-offset-4">View details</button></article>)}</div></section>

      {selectedItem && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#30231f]/70 p-6" role="dialog" aria-modal="true" aria-labelledby="item-detail-title"><div className="relative grid max-w-2xl gap-6 bg-[#f8f0df] p-5 shadow-2xl sm:grid-cols-2"><button type="button" onClick={() => setSelectedItem(null)} className="absolute right-3 top-3 rounded-full bg-[#f8f0df] p-2 text-[#7e2330]" aria-label="Close item details"><X /></button><img src={selectedItem[3]} alt={selectedItem[0]} className="h-full min-h-64 w-full object-cover" /><div className="flex flex-col justify-center pr-4"><p className="eyebrow">{selectedItem[1]}</p><h2 id="item-detail-title" className="font-display mt-3 text-4xl">{selectedItem[0]}</h2><p className="mt-4 leading-7 text-[#624b42]">{selectedItem[2]}</p><button type="button" onClick={() => setSelectedItem(null)} className="button button-primary mt-6 self-start">Close details <X /></button></div></div></div>}

      <section className="mx-auto max-w-7xl border-t border-[#7e2330]/25 px-6 py-20 lg:px-10"><div className="section-heading"><div><p className="eyebrow">The complete image cabinet</p><h2 className="font-display">Every collected scene, kept together.</h2></div><p>The original atelier studies and the newest winter fashion stickers now live in one growing visual archive.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{archiveImages.map(([name, description, image]) => <article key={name} className="product-card group"><div className="jewel"><img src={image} alt={name} /></div><h3 className="font-display mt-5 text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#624b42]">{description}</p></article>)}</div></section>

      <section id="scrapbook" className="scrapbook-wrap mx-auto max-w-7xl px-6 py-10 lg:px-10"><div className="section-heading"><div><p className="eyebrow">The traveling scrapbook</p><h2 className="font-display">Make a page of your own.</h2></div><p>Tap a sticker to place it on the journal. The samples are conceptual imagery, ready to be swapped for your collection.</p></div><div className="mt-10 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center"><div className="sticker-tray">{stickerNames.map((name, index) => <button key={name} onClick={() => addSticker(name)} className={`sample-sticker sticker-${index + 1}`} aria-label={`Place ${name} sticker`}>{name}</button>)}<p className="mt-8 text-center text-xs uppercase tracking-[.18em] text-[#f8f0df]/70">Tap to collect</p></div><div className="journal"><div className="journal-header"><span>Travel notes · vol. 12</span><button onClick={resetJournal} aria-label="Reset journal composition"><RotateCcw /></button></div><div className="journal-page"><p className="font-display text-3xl italic text-[#7e2330]">Souvenirs from<br />somewhere lovely</p><p className="mt-3 max-w-xs text-sm leading-6 text-[#624b42]">A page for pressed flowers, perfume labels, and places I mean to return to.</p>{placed.map((name, index) => <span key={name} className={`placed-sticker placed-${index + 1}`}>{name}</span>)}{placed.length === 0 && <span className="journal-hint">Your collected stickers will appear here.</span>}</div></div></div></section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="about-card"><p className="eyebrow">A note from the cabinet</p><h2 className="font-display mt-4 text-5xl">For the romantics, collectors, and curious.</h2><p className="mt-5 max-w-2xl leading-8 text-[#624b42]">Yessy&apos;s Vintage Finds is an independent seller celebrating the beauty of old things: a clasp with a little wear, a brooch that remembers an evening, a paper sticker that makes a blank page feel like a journey. Product information is intentionally editable for your real inventory.</p></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#7e2330]/30 px-6 py-8 text-sm sm:flex-row sm:justify-between lg:px-10"><span className="brand font-display">Yessy&apos;s Vintage Finds</span><span>Conceptual imagery · Independent seller</span><a href="mailto:hello@yessysvintage.com">hello@yessysvintage.com</a></footer>
    </main>
  )
}

function AtelierScene({ focus, onFocus }: { focus: string; onFocus: (focus: 'atelier' | 'jewelry' | 'journal') => void }) {
  return <div className={`scene scene-${focus}`} role="img" aria-label="Interactive vintage atelier with a jewelry tray and travel journal"><div className="mirror"><span>YV</span></div><div className="table"><button className="tray" onClick={() => onFocus('jewelry')} aria-label="Focus on jewelry tray"><span className="brooch">✦</span><span className="pearl pearl-a" /><span className="pearl pearl-b" /><small>Jewelry cabinet</small></button><button className="journal-object" onClick={() => onFocus('journal')} aria-label="Focus on travel journal"><span>Travel<br />notes</span></button><div className="vase">❀</div></div><div className="scene-caption"><Sparkles />{focus === 'atelier' ? 'Select an object to explore' : focus === 'jewelry' ? 'Jewelry collection' : 'Sticker scrapbook'}</div></div>
}
