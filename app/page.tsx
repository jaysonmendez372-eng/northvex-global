import Link from "next/link";

const stats = [
{
value: "Global",
label: "Sourcing Network",
},
{
value: "B2B",
label: "Wholesale Solutions",
},
{
value: "Multi-Industry",
label: "Product Categories",
},
{
value: "Dedicated",
label: "Customer Support",
},
];

const categories = [
{
title: "Packaging",
description:
"Commercial packaging, shipping and protective supply solutions.",
image:
"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
},
{
title: "Industrial Supplies",
description:
"Reliable supplies for facilities, warehouses and manufacturing.",
image:
"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
},
{
title: "Tools & Hardware",
description:
"Professional tools and hardware for commercial operations.",
image:
"https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85",
},
{
title: "Home & Kitchen",
description:
"Modern household and kitchen products for wholesale buyers.",
image:
"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
},
];

const industries = [
{
icon: "🏭",
title: "Manufacturing",
description:
"Reliable sourcing solutions for production and facility operations.",
},
{
icon: "🛒",
title: "Retail",
description:
"Wholesale products selected for stores and commercial resellers.",
},
{
icon: "📦",
title: "Distribution",
description:
"Products and supplies for warehouses and distribution networks.",
},
{
icon: "🌐",
title: "E-commerce",
description:
"Flexible product sourcing for online sellers and growing brands.",
},
{
icon: "🍽️",
title: "Food & Beverage",
description:
"Commercial supply solutions for food service and hospitality.",
},
{
icon: "🏢",
title: "Business Operations",
description:
"Practical products for offices, facilities and daily operations.",
},
];

const advantages = [
{
number: "01",
title: "Reliable Sourcing",
description:
"Dependable wholesale solutions aligned with your business requirements.",
},
{
number: "02",
title: "Competitive Solutions",
description:
"Practical products and competitive sourcing options for growing companies.",
},
{
number: "03",
title: "Flexible Support",
description:
"Responsive and personalized assistance for standard and custom requests.",
},
{
number: "04",
title: "Long-Term Partnerships",
description:
"Trusted business relationships focused on sustainable growth.",
},
];

export default function HomePage() {
return (
<main className="min-h-screen bg-[#080d16] text-white">
{/* Navigation */}
<header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080d16]/80 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
<Link
href="/"
className="text-base font-bold tracking-wide sm:text-lg md:text-xl"
>
NorthVex Global LLC
</Link>

<nav className="hidden items-center gap-8 md:flex">
<Link href="/" className="font-semibold text-blue-400">
Home
</Link>

<Link
href="/products"
className="text-gray-300 transition hover:text-white"
>
Products
</Link>

<Link
href="/about"
className="text-gray-300 transition hover:text-white"
>
About
</Link>

<Link
href="/contact"
className="text-gray-300 transition hover:text-white"
>
Contact
</Link>
</nav>

<Link
href="/contact"
className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold transition hover:bg-blue-500 sm:px-5"
>
Request Quote
</Link>
</div>
</header>

{/* Hero with NorthVex logo background */}
<section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
<div className="absolute inset-0">
<img
src="logo.jpg"
alt="NorthVex Global LLC"
className="h-full w-full object-cover object-center"
/>

<div className="absolute inset-0 bg-[#080d16]/35" />

<div className="absolute inset-0 bg-gradient-to-r from-[#080d16]/75 via-[#080d16]/35 to-[#080d16]/15" />

<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-[#080d16]/20" />
</div>

<div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />

<div className="relative mx-auto w-full max-w-7xl">
<div className="max-w-4xl">
<div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
<span className="h-2 w-2 rounded-full bg-blue-400" />
Global Wholesale Solutions
</div>

<h1 className="max-w-4xl text-6xl md:text-7xl lg:text-8xl front-extrabold leading-[0.95] tracking-tight">
Connecting businesses with{" "}
<span className="text-blue-500">quality products.</span>
</h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
NorthVex Global LLC helps businesses source dependable wholesale
products through responsive service, flexible solutions and
long-term partnerships.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<Link
href="/products"
className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold transition hover:-translate-y-1 hover:bg-blue-500"
>
Explore Products
</Link>

<Link
href="/contact"
className="rounded-xl border border-white/30 bg-black/20 px-8 py-4 text-center font-bold backdrop-blur transition hover:-translate-y-1 hover:border-blue-400 hover:bg-black/30"
>
Request a Quote
</Link>
</div>

<div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-200">
<div className="flex items-center gap-2">
<span className="text-blue-400">✓</span>
Business-focused service
</div>

<div className="flex items-center gap-2">
<span className="text-blue-400">✓</span>
Flexible sourcing
</div>

<div className="flex items-center gap-2">
<span className="text-blue-400">✓</span>
Dedicated support
</div>
</div>
</div>
</div>
</section>

{/* Statistics */}
<section className="relative z-10 mx-auto -mt-16 max-w-7xl px-6">
<div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0e1624]/95 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-4">
{stats.map((stat, index) => (
<div
key={stat.label}
className={`p-7 text-center md:p-8 ${
index < stats.length - 1
? "border-b border-white/10 md:border-b-0 md:border-r"
: ""
}`}
>
<p className="text-2xl font-bold md:text-3xl">{stat.value}</p>
<p className="mt-2 text-sm text-gray-400">{stat.label}</p>
</div>
))}
</div>
</section>

{/* About NorthVex */}
<section className="mx-auto max-w-7xl px-6 py-28">
<div className="grid items-center gap-14 lg:grid-cols-2">
<div>
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
About NorthVex
</p>

<h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
A modern wholesale partner for growing businesses.
</h2>

<p className="mt-6 text-lg leading-8 text-gray-400">
NorthVex Global LLC is focused on connecting businesses with
quality products across multiple industries. We are building a
flexible wholesale platform centered on reliability,
responsiveness and professional service.
</p>

<p className="mt-5 leading-7 text-gray-400">
Whether your company needs commercial supplies, product sourcing
or customized wholesale support, our goal is to provide a clear
and dependable experience.
</p>

<Link
href="/about"
className="mt-8 inline-flex items-center gap-3 font-bold text-blue-400 transition hover:gap-5 hover:text-blue-300"
>
Learn more about NorthVex
<span>→</span>
</Link>
</div>

<div className="relative">
<div className="absolute -inset-5 rounded-[2rem] bg-blue-600/15 blur-3xl" />

<div className="relative overflow-hidden rounded-[2rem] border border-white/10">
<img
src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=85"
alt="Warehouse distribution operations"
className="h-[480px] w-full object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#080d16]/90 via-transparent to-transparent" />

<div className="absolute bottom-0 left-0 right-0 p-8">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
Trusted supply relationships
</p>

<h3 className="mt-3 text-2xl font-bold">
Built for modern business.
</h3>
</div>
</div>
</div>
</div>
</section>

{/* Featured Categories */}
<section className="border-y border-white/10 bg-white/[0.025] py-28">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div>
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Featured Categories
</p>

<h2 className="mt-4 text-4xl font-bold md:text-5xl">
Explore wholesale solutions.
</h2>
</div>

<Link
href="/products"
className="font-bold text-blue-400 transition hover:text-blue-300"
>
View full catalog →
</Link>
</div>

<div className="grid gap-8 md:grid-cols-2">
{categories.map((category) => (
<article
key={category.title}
className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10"
>
<img
src={category.image}
alt={category.title}
className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-[#080d16]/45 to-transparent" />

<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
<h3 className="text-3xl font-bold">{category.title}</h3>

<p className="mt-3 max-w-md leading-7 text-gray-300">
{category.description}
</p>

<Link
href="/products"
className="mt-6 inline-flex w-fit items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-500"
>
View Products
<span>→</span>
</Link>
</div>
</article>
))}
</div>
</div>
</section>

{/* Industries */}
<section className="mx-auto max-w-7xl px-6 py-28">
<div className="mx-auto max-w-3xl text-center">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Industries We Serve
</p>

<h2 className="mt-4 text-4xl font-bold md:text-5xl">
Solutions across multiple markets.
</h2>

<p className="mt-6 text-lg leading-8 text-gray-400">
Our growing wholesale network is designed to support businesses
across a wide range of industries and operating environments.
</p>
</div>

<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{industries.map((industry) => (
<article
key={industry.title}
className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-white/[0.06]"
>
<div className="text-4xl">{industry.icon}</div>

<h3 className="mt-5 text-xl font-bold">{industry.title}</h3>

<p className="mt-3 leading-7 text-gray-400">
{industry.description}
</p>
</article>
))}
</div>
</section>

{/* Why NorthVex */}
<section className="border-y border-white/10 bg-[#0c1421] py-28">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
<div>
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Why NorthVex
</p>

<h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
Professional service with a partnership mindset.
</h2>

<p className="mt-6 text-lg leading-8 text-gray-400">
Successful wholesale relationships are built through
communication, reliability and a clear understanding of each
customer&apos;s goals.
</p>

<Link
href="/contact"
className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
>
Speak With Our Team
</Link>
</div>

<div className="grid gap-5">
{advantages.map((advantage) => (
<article
key={advantage.number}
className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:grid-cols-[60px_1fr]"
>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15 font-bold text-blue-400">
{advantage.number}
</div>

<div>
<h3 className="text-xl font-bold">{advantage.title}</h3>

<p className="mt-2 leading-7 text-gray-400">
{advantage.description}
</p>
</div>
</article>
))}
</div>
</div>
</div>
</section>

{/* Final CTA */}
<section className="mx-auto max-w-7xl px-6 py-28">
<div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-7 py-16 text-center shadow-2xl shadow-blue-950/50 md:px-16 md:py-20">
<div className="relative mx-auto max-w-3xl">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-100">
Let&apos;s Work Together
</p>

<h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
Ready to strengthen your supply strategy?
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
Tell us what your business needs and let NorthVex help you explore
customized sourcing and wholesale solutions.
</p>

<div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
<Link
href="/contact"
className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-gray-100"
>
Request a Quote
</Link>

<Link
href="/products"
className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
>
Explore Products
</Link>
</div>
</div>
</div>
</section>

{/* Footer */}
<footer className="border-t border-white/10 bg-[#060a11]">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
<div className="md:col-span-2">
<Link href="/" className="text-2xl font-bold">
NorthVex Global LLC
</Link>

<p className="mt-5 max-w-md leading-7 text-gray-400">
Global wholesale solutions focused on dependable sourcing,
professional service and lasting business partnerships.
</p>
</div>

<div>
<h3 className="font-bold">Company</h3>

<div className="mt-5 flex flex-col gap-3 text-gray-400">
<Link href="/" className="transition hover:text-white">
Home
</Link>

<Link href="/products" className="transition hover:text-white">
Products
</Link>

<Link href="/about" className="transition hover:text-white">
About
</Link>

<Link href="/contact" className="transition hover:text-white">
Contact
</Link>
</div>
</div>

<div>
<h3 className="font-bold">Business Inquiries</h3>

<p className="mt-5 leading-7 text-gray-400">
Contact our team to discuss products, sourcing opportunities and
customized wholesale requests.
</p>

<Link
href="/contact"
className="mt-4 inline-block font-bold text-blue-400 transition hover:text-blue-300"
>
Contact NorthVex →
</Link>
</div>
</div>

<div className="border-t border-white/10">
<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">
<p>© 2026 NorthVex Global LLC. All rights reserved.</p>
<p>Global Wholesale Solutions.</p>
</div>
</div>
</footer>
</main>
);
}