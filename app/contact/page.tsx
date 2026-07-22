"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
const form = useRef<HTMLFormElement>(null);

const [isSending, setIsSending] = useState(false);
const [status, setStatus] = useState<
"idle" | "success" | "error"
>("idle");

const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();

if (!form.current || isSending) {
return;
}

setIsSending(true);
setStatus("idle");

try {
await emailjs.sendForm(
"service_m6sc3bw",
"template_mqkaxjr",
form.current,
{
publicKey: "F2JUpi9TLZslMQLuv",
}
);

setTimeout(() => {
setStatus("idle");
}, 5000);
} catch (error: any) {
console.error("EmailJS error:", error);
alert(`${error.status}: ${error.text}`);
setStatus("error");
} finally {
setIsSending(false);
}
};

return (
<main className="min-h-screen bg-[#080d16] text-white">
{/* Header */}
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d16]/90 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<a href="/" className="text-xl font-bold tracking-tight">
NorthVex Global LLC
</a>

<nav className="hidden items-center gap-8 font-semibold md:flex">
<a
href="/"
className="text-gray-300 transition hover:text-blue-400"
>
Home
</a>

<a
href="/products"
className="text-gray-300 transition hover:text-blue-400"
>
Products
</a>

<a
href="/about"
className="text-gray-300 transition hover:text-blue-400"
>
About
</a>

<a href="/contact" className="text-blue-400">
Contact
</a>
</nav>

<a
href="#quote-form"
className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500"
>
Request Quote
</a>
</div>
</header>

{/* Hero */}
<section className="relative overflow-hidden px-6 py-24 text-center">
<div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

<div className="relative mx-auto max-w-5xl">
<p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
Contact Us
</p>

<h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
Let&apos;s build your next wholesale partnership.
</h1>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
Tell us about your business and sourcing needs. Our team will
respond with customized wholesale solutions and competitive
quotations.
</p>
</div>
</section>

{/* Contact section */}
<section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-2">
{/* Contact information */}
<div>
<p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
Contact Information
</p>

<h2 className="mt-4 text-4xl font-bold">
We&apos;re ready to help your business grow.
</h2>

<p className="mt-6 max-w-xl leading-8 text-gray-400">
Whether you need wholesale pricing, product sourcing or a custom
quotation, our team is ready to assist you.
</p>

<div className="mt-10 space-y-5">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
<p className="font-semibold text-blue-400">Email</p>

<a
href="mailto:sales@northvexglobal.com"
className="mt-2 block text-lg font-semibold transition hover:text-blue-400"
>
sales@northvexglobal.com
</a>
</div>

<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
<p className="font-semibold text-blue-400">Mi prueba</p>

<p className="mt-2 text-lg font-semibold">
+1(806) 450-9004
</p>
</div>

<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
<p className="font-semibold text-blue-400">Business Hours</p>

<p className="mt-2 text-lg font-semibold">Monday – Friday</p>

<p className="text-gray-300">8:00 AM – 5:00 PM</p>
</div>
</div>
</div>

{/* Contact form */}
<div
id="quote-form"
className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl md:p-10"
>
<h2 className="text-3xl font-bold">Request a Quote</h2>

<p className="mt-3 text-gray-400">
Complete the form below and we&apos;ll contact you shortly.
</p>

<form
ref={form}
onSubmit={sendEmail}
className="mt-8 space-y-6"
>
{/* Full name */}
<div>
<label
htmlFor="from_name"
className="mb-2 block font-medium"
>
Full Name
</label>

<input
id="from_name"
type="text"
name="from_name"
placeholder="John Smith"
autoComplete="name"
required
className="w-full rounded-xl border border-white/10 bg-[#0c1421] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>
</div>

{/* Company */}
<div>
<label
htmlFor="company"
className="mb-2 block font-medium"
>
Company
</label>

<input
id="company"
type="text"
name="company"
placeholder="Company Name"
autoComplete="organization"
className="w-full rounded-xl border border-white/10 bg-[#0c1421] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>
</div>

{/* Email */}
<div>
<label
htmlFor="from_email"
className="mb-2 block font-medium"
>
Email
</label>

<input
id="from_email"
type="email"
name="from_email"
placeholder="email@example.com"
autoComplete="email"
required
className="w-full rounded-xl border border-white/10 bg-[#0c1421] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>
</div>

{/* Message */}
<div>
<label
htmlFor="message"
className="mb-2 block font-medium"
>
Message
</label>

<textarea
id="message"
name="message"
rows={6}
placeholder="Tell us about your wholesale requirements..."
required
className="w-full resize-none rounded-xl border border-white/10 bg-[#0c1421] px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>
</div>

{/* Success message */}
{status === "success" && (
<div
role="status"
className="rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-green-300"
>
Your request was sent successfully. We&apos;ll contact you
shortly.
</div>
)}

{/* Error message */}
{status === "error" && (
<div
role="alert"
className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-red-300"
>
We couldn&apos;t send your request. Please try again.
</div>
)}

{/* Submit button */}
<button
type="submit"
disabled={isSending}
className="w-full rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
>
{isSending ? "Sending..." : "Send Request"}
</button>
</form>
</div>
</section>

{/* Footer */}
<footer className="border-t border-white/10 px-6 py-8">
<div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
<p>© 2026 NorthVex Global LLC. All rights reserved.</p>

<p>Wholesale solutions for modern businesses.</p>
</div>
</footer>
</main>
);
}