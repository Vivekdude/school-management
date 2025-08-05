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
  title: "Nrityashala Kathak Academy",
  description: "Online Kathak training for all ages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-foreground text-background">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4">
            <h1 className="text-xl font-bold">Nrityashala</h1>
            <nav className="mt-4 w-full sm:mt-0 sm:w-auto">
              <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-4">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#classes-videos" className="hover:underline">
                    Classes Videos
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <footer className="bg-foreground text-background mt-16 py-8 text-sm">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-3">
            <div>
              <p className="mb-4">
                Nrityashala is venture of Dr. Soniya Sharma – Nipun and PHD in
                Kathak.
              </p>
              <p>
                Discover the joy of Kathak at home with our convenient online
                Kathak classes
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#classes-videos" className="hover:underline">
                    Classes Videos
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Get in Touch</h4>
              <p>Nrityashala Academy, Pratap Nagar, Jaipur</p>
              <p>+91-8741864388</p>
              <p>
                <a
                  href="mailto:info@kathakinstitute.com"
                  className="underline"
                >
                  info@kathakinstitute.com
                </a>
              </p>
            </div>
          </div>
          <p className="mt-8 text-center">
            © {new Date().getFullYear()} Kathakinstitute. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
