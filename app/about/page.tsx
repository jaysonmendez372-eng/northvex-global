import Link from "next/link";

const values = [
{
icon: "🤝",
title: "Integrity",
description:
"We believe strong business relationships begin with honesty, transparency and clear communication.",
},
{
icon: "📦",
title: "Reliability",
description:
"Our goal is to provide dependable sourcing solutions and consistent professional support.",
},
{
icon: "⚡",
title: "Responsiveness",
description:
"We value fast communication and timely assistance throughout every business request.",
},
{
icon: "🌎",
title: "Growth",
description:
"We aim to build long-term partnerships that support sustainable business growth.",
},
];

const process = [
{
number: "01",
title: "Submit Your Request",
description:
"Tell us what products, quantities or sourcing support your business needs.",
},
{
number: "02",
title: "Product Sourcing",
description:
"Our team evaluates available wholesale and sourcing opportunities.",
},
{
number: "03",
title: "Quote and Approval",
description:
"We provide clear information so you can review and approve the best option.",
},
{
number: "04",
title: "Delivery and Support",
description:
"We remain available to support communication, logistics and future needs.",
},
];

export default function AboutPage() {
return (
<main className="min-h-screen bg-[#080d16] text-white">
{/* Navigation */}
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d16]/90 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
<Link
href="/"
className="text-base font-bold tracking-wide sm:text-lg md:text-xl"
>
NorthVex Global LLC
</Link>

<nav className="hidden items-center gap-8 md:flex">
<Link
href="/"
className="text-gray-300 transition hover:text-white"
>
Home
</Link>

<Link
href="/products"
className="text-gray-300 transition hover:text-white"
>
Products
</Link>

<Link href="/about" className="font-semibold text-blue-400">
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

{/* Hero */}
<section className="relative overflow-hidden px-6 py-24">
<div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

<div className="relative mx-auto max-w-7xl">
<div className="max-w-4xl">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
About NorthVex
</p>

<h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl">
Building dependable wholesale relationships.
</h1>

<p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
NorthVex Global LLC is a growing wholesale company focused on
dependable sourcing, responsive service and long-term business
partnerships across multiple industries.
</p>
</div>
</div>
</section>

{/* Who We Are */}
<section className="mx-auto max-w-7xl px-6 pb-24">
<div className="grid items-center gap-12 lg:grid-cols-2">
<div>
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Who We Are
</p>

<h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
A modern wholesale partner for growing businesses.
</h2>

<p className="mt-6 text-lg leading-8 text-gray-400">
We help businesses explore practical product sourcing and
wholesale opportunities through clear communication and
personalized support.
</p>

<p className="mt-5 leading-7 text-gray-400">
Our approach is simple: understand the customer&apos;s needs,
evaluate suitable solutions and build a relationship based on
professionalism, consistency and trust.
</p>

<Link
href="/contact"
className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
>
Speak With Our Team
</Link>
</div>

<div className="relative">
<div className="absolute -inset-5 rounded-[2rem] bg-blue-600/15 blur-3xl" />

<div className="relative overflow-hidden rounded-[2rem] border border-white/10">
<img
src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=85"
alt="Wholesale warehouse operations"
className="h-[480px] w-full object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#080d16]/90 via-transparent to-transparent" />

<div className="absolute bottom-0 left-0 right-0 p-8">
<p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
Professional Wholesale Support
</p>

<h3 className="mt-3 text-2xl font-bold">
Built for modern business.
</h3>
</div>
</div>
</div>
</div>
</section>

{/* Mission Vision */}
<section className="border-y border-white/10 bg-white/[0.025] py-24">
<div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
<article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
Our Mission
</p>

<h2 className="mt-4 text-3xl font-bold">
Deliver clear and dependable wholesale support.
</h2>

<p className="mt-5 leading-8 text-gray-400">
Our mission is to connect businesses with practical sourcing
solutions while providing responsive communication and
professional customer service.
</p>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
Our Vision
</p>

<h2 className="mt-4 text-3xl font-bold">
Become a trusted partner across multiple industries.
</h2>

<p className="mt-5 leading-8 text-gray-400">
We aim to grow NorthVex into a dependable wholesale resource for
companies seeking quality products and long-term partnerships.
</p>
</article>
</div>
</section>

{/* Values */}
<section className="mx-auto max-w-7xl px-6 py-24">
<div className="mx-auto max-w-3xl text-center">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Our Values
</p>

<h2 className="mt-4 text-4xl font-bold md:text-5xl">
The principles behind our service.
</h2>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
{values.map((value) => (
<article
key={value.title}
className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
>
<div className="text-4xl">{value.icon}</div>

<h3 className="mt-5 text-xl font-bold">{value.title}</h3>

<p className="mt-3 leading-7 text-gray-400">
{value.description}
</p>
</article>
))}
</div>
</section>

{/* Process */}
<section className="border-y border-white/10 bg-[#0c1421] py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Our Process
</p>

<h2 className="mt-4 text-4xl font-bold md:text-5xl">
Simple, clear and business focused.
</h2>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
{process.map((step) => (
<article
key={step.number}
className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15 font-bold text-blue-400">
{step.number}
</div>

<h3 className="mt-5 text-xl font-bold">{step.title}</h3>

<p className="mt-3 leading-7 text-gray-400">
{step.description}
</p>
</article>
))}
</div>
</div>
</section>

{/* CTA */}
<section className="mx-auto max-w-7xl px-6 py-24">
<div className="rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-7 py-16 text-center shadow-2xl shadow-blue-950/50 md:px-16">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-100">
Let&apos;s Work Together
</p>

<h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
Ready to build a dependable supply partnership?
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
Contact NorthVex to discuss products, sourcing opportunities and
customized wholesale requests.
</p>

<div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
<Link
href="/contact"
className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-gray-100"
>
Request a Quote
</Link>

<Link
href="/products"
className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
>
Explore Products
</Link>
</div>
</div>
</section>

{/* Footer */}
<footer className="border-t border-white/10 bg-[#060a11]">
<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">
<p>© 2026 NorthVex Global LLC. All rights reserved.</p>

<p>Wholesale solutions for modern businesses.</p>
</div>
</footer>
</main>
);
}