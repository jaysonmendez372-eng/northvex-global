import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "NorthVex Global LLC",
description: "Reliable wholesale sourcing and global business solutions.",
openGraph: {
title: "NorthVex Global LLC",
description: "Reliable wholesale sourcing and global business solutions.",
images: ["/logo.jpg"],
},
icons: {
icon: "/logo.jpg",
},
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className="bg-[#080d16] text-white">
<div
className="fixed inset-0 z-0"
style={{
backgroundImage:
"linear-gradient(rgba(8,13,22,0.55), rgba(8,13,22,0.55)), url('/logo.jpg')",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
}}
/>

<div className="relative z-10">{children}</div>
</body>
</html>
);
}