"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
"All",
"Packaging",
"Home & Kitchen",
"Industrial Supplies",
"Tools & Hardware",
"Electronics",
"Outdoor & Garden",
];

const products = [
{
id: 1,
name: "Commercial Packaging Kit",
category: "Packaging",
description:
"Corrugated boxes, protective materials and packaging supplies for commercial operations.",
image:
"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
status: "In Stock",
badge: "Best Seller",
},
{
id: 2,
name: "Modern Kitchen Essentials",
category: "Home & Kitchen",
description:
"Modern kitchen and household essentials selected for wholesale buyers and retailers.",
image:
"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
status: "Coming Soon",
badge: "New Arrival",
},
{
id: 3,
name: "Industrial Supply Collection",
category: "Industrial Supplies",
description:
"Reliable industrial products for warehouses, facilities and manufacturing operations.",
image:
"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
status: "Available for Quote",
badge: "Featured",
},
{
id: 4,
name: "Professional Tool Set",
category: "Tools & Hardware",
description:
"Professional-grade tools and hardware for commercial and industrial applications.",
image:
"https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85",
status: "In Stock",
badge: "Best Seller",
},
{
id: 5,
name: "Business Electronics Bundle",
category: "Electronics",
description:
"Charging equipment, electronic accessories and practical technology for businesses.",
image:
"https://images.unsplash.com/photo-1498049794561-7780e723166f?auto=format&fit=crop&w=1200&q=85",
status: "Available for Quote",
badge: "New Arrival",
},
{
id: 6,
name: "Outdoor & Garden Collection",
category: "Outdoor & Garden",
description:
"Outdoor, landscaping and garden products for residential and commercial customers.",
image:
"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85",
status: "Coming Soon",
badge: "Featured",
},
];

const catalogStats = [
{
value: "6",
label: "Featured Collections",
},
{
value: "6",
label: "Product Categories",
},
{
value: "B2B",
label: "Wholesale Solutions",
},
{
value: "Fast",
label: "Quote Response",
},
];

export default function ProductsPage() {
const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

const filteredProducts = useMemo(() => {
const search = searchTerm.toLowerCase().trim();

return products.filter((product) => {
const matchesCategory =
selectedCategory === "All" ||
product.category === selectedCategory;

const matchesSearch =
product.name.toLowerCase().includes(search) ||
product.category.toLowerCase().includes(search) ||
product.description.toLowerCase().includes(search);

return matchesCategory && matchesSearch;
});
}, [selectedCategory, searchTerm]);

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
className="font-semibold text-blue-400"
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

{/* Hero */}
<section className="relative overflow-hidden px-6 pb-16 pt-20 text-center">
<div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

<div className="relative mx-auto max-w-4xl">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Professional Wholesale Catalog
</p>

<h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
Products built for modern business.
</h1>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
Explore wholesale product collections designed for retailers,
warehouses, commercial operations and growing businesses.
</p>
</div>
</section>

{/* Catalog Statistics */}
<section className="mx-auto max-w-7xl px-6 pb-12">
<div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:grid-cols-4">
{catalogStats.map((stat, index) => (
<div
key={stat.label}
className={`p-6 text-center ${
index < catalogStats.length - 1
? "border-b border-white/10 md:border-b-0 md:border-r"
: ""
}`}
>
<p className="text-2xl font-bold text-blue-400">
{stat.value}
</p>

<p className="mt-2 text-sm text-gray-400">
{stat.label}
</p>
</div>
))}
</div>
</section>

{/* Search and Filters */}
<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:p-7">
<label
htmlFor="product-search"
className="mb-3 block text-sm font-semibold text-gray-300"
>
Search the catalog
</label>

<input
id="product-search"
type="search"
value={searchTerm}
onChange={(event) => setSearchTerm(event.target.value)}
placeholder="Search products or categories..."
className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500"
/>

<div className="mt-6 flex flex-wrap gap-3">
{categories.map((category) => {
const active = selectedCategory === category;

return (
<button
key={category}
type="button"
onClick={() => setSelectedCategory(category)}
className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
active
? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
: "border border-white/10 bg-white/5 text-gray-300 hover:border-blue-500 hover:text-white"
}`}
>
{category}
</button>
);
})}
</div>
</div>
</section>

{/* Product Catalog */}
<section className="mx-auto max-w-7xl px-6 pb-24">
<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
Featured Collections
</p>

<h2 className="mt-2 text-3xl font-bold">
Explore Our Catalog
</h2>
</div>

<p className="text-sm text-gray-500">
Showing {filteredProducts.length} product
{filteredProducts.length === 1 ? "" : "s"}
</p>
</div>
{filteredProducts.length > 0 ? (
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{filteredProducts.map((product) => (
<article
key={product.id}
className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/20"
>
{/* Product Image */}
<div className="relative h-64 overflow-hidden">
<img
src={product.image}
alt={product.name}
className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent" />

{/* Badge */}
<span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold shadow-lg">
{product.badge}
</span>

{/* Category */}
<span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold backdrop-blur">
{product.category}
</span>
</div>

{/* Product Information */}
<div className="p-7">
<div className="flex items-center justify-between gap-4">
<p
className={`text-sm font-semibold ${
product.status === "In Stock"
? "text-green-400"
: product.status === "Coming Soon"
? "text-yellow-400"
: "text-blue-400"
}`}
>
{product.status}
</p>

<span className="text-xs uppercase tracking-widest text-gray-600">
NorthVex
</span>
</div>

<h3 className="mt-3 text-2xl font-bold leading-tight transition group-hover:text-blue-400">
{product.name}
</h3>

<p className="mt-4 min-h-[84px] leading-7 text-gray-400">
{product.description}
</p>

{/* Product Features */}
<div className="mt-5 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
Wholesale
</span>

<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
Business Supply
</span>

<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
Custom Quote
</span>
</div>

{/* Buttons */}
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<Link
href="/contact"
className="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-center font-bold transition hover:bg-blue-500"
>
Request Quote
</Link>

<button
type="button"
className="flex-1 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold transition hover:border-blue-500 hover:bg-white/10"
>
View Details
</button>
</div>
</div>
</article>
))}
</div>
) : (
/* Empty Search Result */
<div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-20 text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-3xl">
🔍
</div>

<h3 className="mt-6 text-2xl font-bold">
No products found
</h3>

<p className="mx-auto mt-3 max-w-xl text-gray-400">
Try another search term or select a different product category.
</p>

<button
type="button"
onClick={() => {
setSearchTerm("");
setSelectedCategory("All");
}}
className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-500"
>
View All Products
</button>
</div>
)}
</section>
{/* Business Benefits */}
<section className="border-y border-white/10 bg-white/[0.025] py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
Why Choose NorthVex
</p>

<h2 className="mt-4 text-3xl font-bold md:text-5xl">
Wholesale support built for business.
</h2>

<p className="mt-5 text-lg leading-8 text-gray-400">
Our catalog is designed to help businesses find dependable
sourcing options with responsive service and personalized support.
</p>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
<article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-blue-500/50">
<div className="text-4xl">🌐</div>

<h3 className="mt-5 text-xl font-bold">
Global Sourcing
</h3>

<p className="mt-3 leading-7 text-gray-400">
Flexible sourcing solutions across multiple product categories.
</p>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-blue-500/50">
<div className="text-4xl">📦</div>

<h3 className="mt-5 text-xl font-bold">
Wholesale Solutions
</h3>

<p className="mt-3 leading-7 text-gray-400">
Product collections designed for retailers and commercial buyers.
</p>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-blue-500/50">
<div className="text-4xl">⚡</div>

<h3 className="mt-5 text-xl font-bold">
Fast Response
</h3>

<p className="mt-3 leading-7 text-gray-400">
Clear communication and responsive support for quote requests.
</p>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-blue-500/50">
<div className="text-4xl">🤝</div>

<h3 className="mt-5 text-xl font-bold">
Trusted Partnerships
</h3>

<p className="mt-3 leading-7 text-gray-400">
Long-term business relationships focused on dependable service.
</p>
</article>
</div>
</div>
</section>

{/* Quote CTA */}
<section className="mx-auto max-w-7xl px-6 py-24">
<div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-7 py-16 text-center shadow-2xl shadow-blue-950/50 md:px-16 md:py-20">
<div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

<div className="relative mx-auto max-w-3xl">
<p className="font-semibold uppercase tracking-[0.3em] text-blue-100">
Personalized Sourcing
</p>

<h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
Looking for a specific product?
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
Tell us what your business needs and our team will help you
evaluate sourcing and wholesale options.
</p>

<div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
<Link
href="/contact"
className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-gray-100"
>
Request a Custom Quote
</Link>

<Link
href="/contact"
className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
>
Contact Sales
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
<h3 className="font-bold">
Company
</h3>

<div className="mt-5 flex flex-col gap-3 text-gray-400">
<Link
href="/"
className="transition hover:text-white"
>
Home
</Link>

<Link
href="/products"
className="transition hover:text-white"
>
Products
</Link>

<Link
href="/about"
className="transition hover:text-white"
>
About
</Link>

<Link
href="/contact"
className="transition hover:text-white"
>
Contact
</Link>
</div>
</div>

<div>
<h3 className="font-bold">
Business Inquiries
</h3>

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
<p>
© 2026 NorthVex Global LLC. All rights reserved.
</p>

<p>
Wholesale solutions for modern businesses.
</p>
</div>
</div>
</footer>
</main>
);
}