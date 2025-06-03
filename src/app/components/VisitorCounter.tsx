'use client';

import Script from 'next/script';

export default function VisitorCounter() {
  return (
    <div>
      <a
        href="http://www.freevisitorcounters.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        more information
      </a>

      {/* Auth script */}
      <Script
        src="https://www.freevisitorcounters.com/auth.php?id=d4453daa0446a0ecb07fe285ab99a6501f0680fc"
        strategy="afterInteractive"
      />

      {/* Visitor counter display */}
      <Script
        src="https://www.freevisitorcounters.com/en/home/counter/1344475/t/0"
        strategy="afterInteractive"
      />
    </div>
  );
}
