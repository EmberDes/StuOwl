// app/layout.tsx
import React from 'react';


export const metadata = {
  title: 'My Next.js App',
  description: 'A description of my Next.js app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;