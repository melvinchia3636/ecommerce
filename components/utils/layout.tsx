import React from 'react';
import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-zinc-700 h-screen flex flex-col" data-theme="light">
      <Navbar />
      <main className="flex-1 overflow-y-hidden flex flex-col">{children}</main>
    </main>
  );
}
