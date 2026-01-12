"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* LOGO */}
                <a href="/" className="text-xl md:text-2xl tracking-[0.25em] font-light whitespace-nowrap text-[#0f0f0f]">
                    STORE OVERSIZED
                </a>

                {/* DESKTOP NAV */}
                <nav className="hidden gap-6 text-xs md:flex items-center">
                    <a
                        href="/"
                        className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                    >
                        Home
                    </a>
                    <a
                        href="/crocs"
                        className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                    >
                        Crocs
                    </a>
                    <a
                        href="/birkenstock"
                        className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                    >
                        Birkenstock
                    </a>
                    <a
                        href="/size"
                        className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                    >
                        Size
                    </a>
                    <a
                        href="/authenticity"
                        className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                    >
                        Authenticity
                    </a>
                    <a
                        href="/contact"
                        className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                    >
                        Contact
                    </a>

                    {/* SEARCH DESKTOP */}
                    <form onSubmit={handleSearch} className="ml-4 flex items-center border border-[#e5e5e0] rounded-full px-3 py-1 bg-white focus-within:border-[#0f0f0f]">
                        <input
                            type="text"
                            placeholder="SEARCH..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-24 text-[10px] uppercase tracking-[0.1em] text-[#0f0f0f] placeholder-[#a0a0a0] bg-transparent outline-none transition-all focus:w-40"
                        />
                        <button type="submit" className="text-[#a0a0a0] hover:text-[#0f0f0f]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </form>
                </nav>

                {/* HAMBURGER & SEARCH MOBILE */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* SEARCH MOBILE ICON (Exposes input when clicked - simplified for now just always visible or separate) 
                For simplicity on mobile, let's put it in the menu
             */}
                    <button
                        onClick={() => setIsMenuOpen((p) => !p)}
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1">
                            <span className="block h-[2px] w-5 bg-[#0f0f0f]" />
                            <span className="block h-[2px] w-5 bg-[#0f0f0f]" />
                            <span className="block h-[2px] w-5 bg-[#0f0f0f]" />
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-[#e5e5e0] bg-[#fafaf8]">
                    <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs">
                        <form onSubmit={handleSearch} className="mb-4 flex items-center border border-[#e5e5e0] rounded-full px-4 py-2 bg-white">
                            <input
                                type="text"
                                placeholder="SEARCH STORE..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full text-[10px] uppercase tracking-[0.1em] text-[#0f0f0f] bg-transparent outline-none"
                            />
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </form>
                        <a
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="uppercase tracking-[0.2em] text-[#0f0f0f]"
                        >
                            Home
                        </a>
                        <a
                            href="/crocs"
                            onClick={() => setIsMenuOpen(false)}
                            className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                        >
                            Crocs
                        </a>
                        <a
                            href="/birkenstock"
                            onClick={() => setIsMenuOpen(false)}
                            className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                        >
                            Birkenstock
                        </a>
                        <a
                            href="/size"
                            onClick={() => setIsMenuOpen(false)}
                            className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                        >
                            Size
                        </a>
                        <a
                            href="/authenticity"
                            onClick={() => setIsMenuOpen(false)}
                            className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                        >
                            Authenticity
                        </a>
                        <a
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="uppercase tracking-[0.2em] text-[#4a4a4a] hover:text-[#0f0f0f]"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
