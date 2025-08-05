import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kalangan Dance Institute",
  description: "Professional dance training and performances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-foreground text-background">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4">
            <h1 className="text-xl font-bold">
              Kalangan Dance Institute
            </h1>
            <nav className="mt-4 w-full sm:mt-0 sm:w-auto">
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-4">
                <li>
                  <a href="#classes" className="hover:underline">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <footer className="bg-foreground text-background mt-16 py-6 text-center text-sm">
          © {new Date().getFullYear()} Kalangan Dance Institute. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
