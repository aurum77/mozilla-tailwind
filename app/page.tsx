import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <main>
      <nav className="h-[65px] shadow-mozHeaderShadow" >
        {/* */}
        <ul className="flex justify-between px-60 pt-4 h-[48px] items-center">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <Image src={"https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg"} alt={"mozilla logo"} width={112} height={32} />
            </Link>
            <li><Link href="#" className={`${inter.className} size-4`}>Firefox Browsers</Link></li>
            <li><Link href="#" className={`${inter.className} size-4`}>Products</Link></li>
            <li><Link href="#" className={`${inter.className} size-4`}>Who We Are</Link></li>
            <li><Link href="#" className={`${inter.className} size-4`}>Innovation</Link></li>
          </div>
          <li><a href="#" className={`${inter.className}`}>Get Firefox</a></li>
        </ul>
      </nav>
      <header className="w-max">
        <div className=""></div>
      </header>
    </main>
  );
}
