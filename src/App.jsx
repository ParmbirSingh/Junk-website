import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Home,
  Leaf,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Recycle,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Warehouse,
} from 'lucide-react'
import heroTruck from './assets/hero-truck.jpeg'
import logo from './assets/father-son-logo.jpeg'
import workDoneCleanoutRoom from './assets/work-done-cleanout-room.jpeg'
import workDoneHallway from './assets/work-done-hallway.jpeg'
import workDoneSideYard from './assets/work-done-side-yard.jpeg'
import workDoneYardCleanout from './assets/work-done-yard-cleanout.jpeg'
import './App.css'

const businessName = 'Father and Son Junk Removal'
const phoneNumber = '604-655-3336'
const telHref = 'tel:6046553336'
const email = 'Fathersonjunk@gmail.com'
const quoteFormEndpoint = `https://formsubmit.co/${email}`

const navItems = [
  ['Services', '#services'],
  ['How It Works', '#how-it-works'],
  ['Reviews', '#reviews'],
  ['Service Area', '#service-area'],
  ['Contact', '#contact'],
]

const services = [
  {
    title: 'Junk Removal',
    text: 'Household junk, furniture, clutter, and unwanted items removed quickly with careful loading and cleanup.',
    icon: Truck,
  },
  {
    title: 'Lawn Maintenance',
    text: 'Seasonal yard cleanup, trimming, green waste hauling, and tidy outdoor care for homes and rentals.',
    icon: Leaf,
  },
  {
    title: 'Pressure Washing',
    text: 'Driveways, patios, walkways, siding, and exterior surfaces refreshed with a clean professional finish.',
    icon: Sparkles,
  },
  {
    title: 'Window Cleaning',
    text: 'Clear, streak-free window cleaning for brighter homes, storefronts, suites, and rental properties.',
    icon: CheckCircle2,
  },
  {
    title: 'Gutter Cleaning',
    text: 'Leaves, debris, and buildup cleared so your gutters can drain properly through wet weather.',
    icon: Warehouse,
  },
  {
    title: 'Roof Cleaning',
    text: 'Roof debris and organic buildup handled with care to help protect curb appeal and drainage.',
    icon: Home,
  },
]

const steps = [
  ['Send Photo / Call', 'Text a photo or call with a quick description of what needs to go.'],
  ['Get Quote', 'We give you clear pricing before the job starts, with no surprise add-ons.'],
  ['We Load Everything', 'Our crew arrives ready to lift, sort, load, sweep, and haul it away.'],
  ['Space Is Cleared', 'You get your space back clean, usable, and ready for what comes next.'],
]

const reasons = [
  ['Local owner', 'Talk directly with Happy and a local family team that understands your neighborhood.', ShieldCheck],
  ['Affordable pricing', 'Simple, honest quotes starting from $80, based on volume, access, and disposal needs.', BadgeCheck],
  ['Donation and recycling', 'We donate and recycle as much as possible, including donation runs with The Salvation Army Thrift Store.', Recycle],
  ['Fast response', 'Same-day and next-day appointments are available for urgent junk removal and cleanup jobs.', Clock],
]

const reviews = [
  {
    name: 'Bernadette Hadisandjaja',
    rating: 5,
    date: '4 days ago',
    text: `I had a great experience with Father & Son Junk Removal. They were incredibly fast, efficient, and professional from start to finish. I needed some large items removed, and they handled everything smoothly without any hassle. On top of that, they offered the best price compared to others I looked into, which was a huge bonus. Highly recommend them if you're looking for reliable and affordable junk removal!`,
  },
  {
    name: 'Sara m',
    rating: 5,
    date: 'a week ago',
    text: 'Harpreet arrived immediately, when contacted.. assisted me in junk removal at rental property. Tenants left a mess. They finished the job in one day. Reliable, punctual and reasonable price.',
  },
  {
    name: 'Karla McCullagh',
    rating: 5,
    date: 'a week ago',
    text: `I had a great experience with Father & Son Junk Removal. They were incredibly fast and efficient from start to finish. What really stood out was how they took the time to sort through everything, making sure usable items were set aside and donated rather than just thrown away. It's clear they care about reducing waste and helping others. They also did an excellent job cleaning up after the removal, leaving the space spotless and ready to use. Professional, respectful, and thorough, I wouldn't hesitate to recommend Father & Son Junk Removal to anyone looking for reliable service.`,
  },
  {
    name: 'Nandhini Ramachandran',
    rating: 5,
    date: '2 weeks ago',
    text: 'Harpreet Singh is very nice landscaper to work with .He and his family is very sincere and dedicated to work . I would highly recommend.',
  },
  {
    name: 'Jennifer Yang',
    rating: 5,
    date: '2 weeks ago',
    text: 'Extremely careful and precise in their work. Highly professional.',
  },
  {
    name: 'Léo Lavoie',
    rating: 5,
    date: '3 weeks ago',
    text: 'They did a very good job removing my 3 places couch. No damage in my apartment or hall way. Very professional. Highly recommand them .',
  },
  {
    name: 'c zz',
    rating: 5,
    date: '3 weeks ago',
    text: 'I would highly recommend this company, they are very affordable and dependable. They have great prices as well. I will recommend them To anyone, they do everything!!! Thank you for everything',
  },
  {
    name: 'dheraya arora',
    rating: 5,
    date: '4 weeks ago',
    text: 'Really good service👍🫡',
  },
  {
    name: 'David Lee',
    rating: 5,
    date: '4 weeks ago',
    text: 'Great timely service and made everything nice easy and great rate. Highly recommend and will use again in future',
  },
  {
    name: 'Paola Camacho',
    rating: 5,
    date: 'a month ago',
    text: `We scheduled for same day pick up Komal and Happy are were friendly, courteous, respectful. Awesome service, extremely well-priced and you saved us hours of work. Call them. You won't be disappointed.`,
  },
  {
    name: 'K R Pacheco',
    rating: 5,
    date: 'a month ago',
    text: 'Very professional and respond quickly. Went above and beyond to get everything done quickly.',
  },
  {
    name: 'RJ',
    rating: 5,
    date: 'a month ago',
    text: 'Very quick turn around. Easy to talk to and very pleasant to work with and good at communication. Highly recommend',
  },
  {
    name: 'Mamta Bhatia',
    rating: 5,
    date: 'a month ago',
    text: 'Fantastic service! I needed an old sofa removed quickly. The team arrived on time, was very professional, and hauled everything away in minutes. Fair pricing and hassle-free. Highly recommend!',
  },
  {
    name: 'Marg Yeo',
    rating: 5,
    date: 'a month ago',
    text: 'Prompt and energetic young couple providing fast and efficient removal service.',
  },
  {
    name: 'Roman Guramishvili',
    rating: 5,
    date: 'a month ago',
    text: 'Great service from Father and Son Junk Removal! They responded fast, came on the same day and helped with the post construction junk disposal.',
  },
  {
    name: 'Simranjeet Singh',
    rating: 5,
    date: 'a month ago',
    text: 'Had a great experience and the service was excellent. They did the job perfectly and it was all hassle free. Would definitely recommend to others.',
  },
  {
    name: 'Manjot Kaur',
    rating: 5,
    date: 'a month ago',
    text: 'Wonderful work with reasonable price.',
  },
  {
    name: 'Satvir Bisla',
    rating: 5,
    date: '2 months ago',
    text: 'Very nice people.Harpreet is very confident and hardworking.highly recommended.',
  },
  {
    name: 'Karan Gill',
    rating: 5,
    date: '2 months ago',
    text: 'Happy with the service. Will use them again in the future',
  },
  {
    name: 'Jaskaran Sandhar',
    rating: 5,
    date: '2 months ago',
    text: 'I called Father and Son Junk Removal last minute, and they showed up within 30 minutes! They gave me the price upfront with no hidden or extra fees — not even an environmental charge. They cleared out a full load from my back yard quickly and professionally. Great service, super reliable, and honest pricing. I highly recommend them!',
  },
  {
    name: 'Kamalpreet Singh',
    rating: 5,
    date: '2 months ago',
    text: 'Great service by Father son duo 👌',
  },
]

const galleryImages = [
  heroTruck,
  workDoneCleanoutRoom,
  workDoneYardCleanout,
  workDoneSideYard,
  workDoneHallway,
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
]

const serviceAreas = ['Surrey', 'Delta', 'Langley', 'White Rock', 'Burnaby', 'Coquitlam', 'Abbotsford']

const formFields = [
  { label: 'Name', name: 'name', type: 'text', autoComplete: 'name' },
  { label: 'Phone', name: 'phone', type: 'tel', autoComplete: 'tel' },
  { label: 'Email', name: 'email', type: 'email', autoComplete: 'email' },
  { label: 'Pickup Address', name: 'pickup_address', type: 'text', autoComplete: 'street-address' },
  { label: 'Preferred Date', name: 'preferred_date', type: 'date' },
]

function SectionHeading({ kicker, title, text, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? 'text-emerald-300' : 'text-emerald-600'}`}>{kicker}</p>
      <h2 className={`mt-3 text-3xl font-black sm:text-4xl ${dark ? 'text-white' : 'text-zinc-950'}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-8 ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>{text}</p>}
    </div>
  )
}

function LogoMark({ compact = false }) {
  return (
    <img
      src={logo}
      alt={`${businessName} logo`}
      className={`${compact ? 'h-12 w-12' : 'h-14 w-14'} shrink-0 rounded-lg bg-white object-contain p-1 shadow-sm ring-1 ring-zinc-200`}
    />
  )
}

function ReviewStars({ rating }) {
  return (
    <div className="flex text-emerald-300">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-20 text-zinc-900 sm:pb-0">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <LogoMark compact />
            <span className="min-w-0">
              <span className="block truncate text-base font-black leading-none sm:text-lg">Father and Son</span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Junk Removal</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-zinc-700 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-emerald-700">
                {label}
              </a>
            ))}
          </div>

          <a
            href={telHref}
            className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 text-sm font-black text-white shadow-lg shadow-zinc-950/20 transition hover:bg-emerald-700 sm:inline-flex"
          >
            <Phone size={17} aria-hidden="true" />
            <span>Call <span className="text-emerald-300">{phoneNumber}</span></span>
          </a>
        </nav>
        <div className="mx-auto flex w-full max-w-7xl gap-5 overflow-x-auto px-4 pb-3 text-sm font-bold text-zinc-700 sm:px-6 lg:hidden">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="shrink-0 transition hover:text-emerald-700">
              {label}
            </a>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="overflow-hidden bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-emerald-100">
                <CheckCircle2 size={17} aria-hidden="true" />
                Local family-owned service across Surrey and the Lower Mainland
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                Fast Junk Removal. Same-Day Service. No Stress.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                {businessName} handles junk removal, yard care, pressure washing, windows, gutters, and roof cleaning with honest quotes and careful cleanup.
              </p>
              <div className="mt-6 inline-flex rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-base font-black text-emerald-200 sm:text-lg">
                Junk removal service starts from $80
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={telHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 font-black text-zinc-950 transition hover:bg-emerald-400">
                  <Phone size={20} aria-hidden="true" />
                  Call Now
                </a>
                <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 font-black text-white transition hover:border-emerald-300 hover:bg-white/10">
                  <Send size={20} aria-hidden="true" />
                  Get Free Quote
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['5-star rated', Star],
                  ['Same-day available', CalendarCheck],
                  ['Free estimates', MessageSquareText],
                ].map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white">
                    <Icon className="text-emerald-300" size={18} aria-hidden="true" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={heroTruck}
                alt="Father and Son Junk Removal truck loaded with yard waste"
                className="aspect-[4/3] w-full rounded-lg object-cover object-center shadow-2xl shadow-black/40 sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute -bottom-5 left-4 right-4 rounded-lg bg-white p-5 text-zinc-950 shadow-2xl sm:left-auto sm:w-72">
                <p className="text-3xl font-black text-emerald-600 sm:text-4xl">Same Day</p>
                <p className="mt-1 font-bold">Fast slots available. Call <span className="text-emerald-700">{phoneNumber}</span>.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="Services"
              title="Local cleanup services for homes, rentals, and properties."
              text="Book one item, a full-property cleanout, or exterior maintenance help from a responsive father and son team."
            />
            <div className="mx-auto mb-8 max-w-2xl rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-4 text-center text-lg font-black text-emerald-800">
              Junk removal service starts from $80
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Local vs franchise</p>
              <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">A local family crew you can actually reach.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Big-name junk removal companies can mean automated menus, long hold times, and people who may not know your neighborhood. With Father and Son Junk Removal, you speak directly with Happy and see the same father and son crew at your home.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Direct owner contact', 'If something needs attention, you talk directly to the owner and we make it right.'],
                ['Care inside your home', 'We protect your property, load carefully, and complete the cleanup before we leave.'],
                ['Donation first mindset', 'We donate and recycle as much as possible to keep usable items out of the landfill.'],
                ['Family-owned service', 'We treat your home like family because our reputation is built one local job at a time.'],
              ].map(([title, text]) => (
                <article key={title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="text-emerald-600" size={26} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="How it works"
              title="Four simple steps from cluttered to clear."
              text="Send the details, approve the quote, and let the crew take care of the heavy lifting."
            />
            <div className="grid gap-5 md:grid-cols-4">
              {steps.map(([title, text], index) => (
                <article key={title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-200">
                  <span className="text-sm font-black text-emerald-600">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-700 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-100">Donation story</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Sometimes cleanup turns into something special.</h2>
            </div>
            <div className="rounded-lg bg-white p-6 text-zinc-900 shadow-xl sm:p-8">
              <p className="text-lg leading-8 text-zinc-700">
                Eh neighbours! Sometimes junk removal turns into something special. Earlier today, the Father and Son team was out doing a donation run when one of our customers spotted a cute fluffy dog and asked if she could have it. Of course, we said yes, and she was over the moon.
              </p>
              <p className="mt-5 text-lg leading-8 text-zinc-700">
                It felt great seeing something that was being passed along find a happy new home. One happy customer, one loved fluffy dog, and one great moment for the day.
              </p>
              <p className="mt-5 font-black text-emerald-700">
                We proudly partner with The Salvation Army Thrift Store for donation-minded hauling whenever possible.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Why choose us</p>
              <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">Local service with polished execution.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Father and Son Junk Removal is built for homeowners, landlords, realtors, contractors, and families who want a fast answer, a fair quote, and a clean finish.
              </p>
              <a href="#contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 font-black text-white transition hover:bg-emerald-700">
                <Sparkles size={20} aria-hidden="true" />
                Get My Quote
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map(([title, text, Icon]) => (
                <article key={title} className="rounded-lg border border-zinc-200 p-6">
                  <Icon className="text-emerald-600" size={28} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-zinc-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="Google reviews"
              title="What Our Customers Say."
              text="Real customer reviews from Google, copied without owner responses."
              dark
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map(({ name, rating, date, text }) => (
                <article key={`${name}-${text}`} className="rounded-lg border border-white/10 bg-white/10 p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <ReviewStars rating={rating} />
                    <span className="text-sm font-bold text-zinc-400">{date}</span>
                  </div>
                  <p className="leading-7 text-zinc-100">"{text}"</p>
                  <p className="mt-5 font-black text-white">{name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="Gallery"
              title="Real cleanout energy, without the mess."
              text="Placeholder job photos for trucks, tidy spaces, debris removal, and home cleanouts."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, index) => (
                <img key={`${src}-${index}`} src={src} alt={`Father and Son Junk Removal gallery ${index + 1}`} className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm" />
              ))}
            </div>
          </div>
        </section>

        <section id="service-area" className="bg-emerald-700 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-100">Service Area</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Serving Surrey and nearby communities.</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-emerald-50">
              Need junk removal or property cleanup somewhere in the Lower Mainland? Reach out and we will confirm availability for your pickup address.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-emerald-800">
                  <MapPin size={18} aria-hidden="true" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Contact</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Ready to clear your space?</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Send a few details and Father and Son Junk Removal will follow up with a free estimate. For the fastest quote, call or text a photo of the items.
              </p>
              <div className="mt-8 space-y-4">
                <a href={telHref} className="flex items-center gap-3 font-black text-emerald-700">
                  <Phone className="text-emerald-600" size={22} aria-hidden="true" />
                  {phoneNumber}
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-3 font-black text-zinc-950">
                  <Mail className="text-emerald-600" size={22} aria-hidden="true" />
                  {email}
                </a>
                <p className="flex items-center gap-3 font-black text-zinc-950">
                  <MapPin className="text-emerald-600" size={22} aria-hidden="true" />
                  Surrey, BC
                </p>
              </div>
            </div>

            <form action={quoteFormEndpoint} method="POST" className="grid gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:grid-cols-2 sm:p-8">
              <input type="hidden" name="_subject" value="New Quote Request - Father and Son Junk Removal" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              {formFields.map(({ label, name, type, autoComplete }) => (
                <label key={name} className="grid gap-2 text-sm font-bold text-zinc-800">
                  {label}
                  <input
                    className="min-h-12 rounded-lg border border-zinc-200 bg-white px-4 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                    type={type}
                    name={name}
                    autoComplete={autoComplete}
                    required={['name', 'phone', 'pickup_address'].includes(name)}
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Service Needed
                <select name="service_needed" required className="min-h-12 rounded-lg border border-zinc-200 bg-white px-4 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100">
                  <option value="">Select a service</option>
                  {services.map(({ title }) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-800 sm:col-span-2">
                Description
                <textarea name="description" className="min-h-32 rounded-lg border border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" />
              </label>
              <p className="text-sm font-bold text-zinc-500 sm:col-span-2">
                Quote requests are sent directly to {email}.
              </p>
              <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 font-black text-white transition hover:bg-emerald-700 sm:col-span-2">
                <Send size={20} aria-hidden="true" />
                Get Free Quote
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark compact />
              <p className="text-xl font-black">{businessName}</p>
            </div>
            <p className="mt-4 leading-7 text-zinc-400">Fast, affordable junk removal and property cleanup for homes, rentals, offices, and job sites.</p>
          </div>
          <div>
            <h3 className="font-black">Contact</h3>
            <a href={telHref} className="mt-4 block font-black text-emerald-300">{phoneNumber}</a>
            <a href={`mailto:${email}`} className="mt-2 block text-zinc-400">{email}</a>
          </div>
          <div>
            <h3 className="font-black">Address</h3>
            <p className="mt-4 text-zinc-400">Surrey, BC</p>
            <p className="mt-2 text-zinc-400">Serving the Lower Mainland</p>
          </div>
          <div>
            <h3 className="font-black">Business Hours</h3>
            <p className="mt-4 text-zinc-400">Mon-Fri: 7:00 AM - 8:00 PM</p>
            <p className="mt-2 text-zinc-400">Sat-Sun: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-500">
          &copy; 2026 {businessName}. All rights reserved.
        </p>
      </footer>
      <a
        href={telHref}
        className="fixed bottom-4 left-4 right-4 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 font-black text-zinc-950 shadow-2xl shadow-emerald-950/30 transition hover:bg-emerald-400 sm:hidden"
      >
        <Phone size={21} aria-hidden="true" />
        Call Now: {phoneNumber}
      </a>
    </div>
  )
}

export default App
