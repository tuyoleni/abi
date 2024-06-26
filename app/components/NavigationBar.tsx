'use client'
import { usePathname } from 'next/navigation';
import social from "@/app/elements/social";
import contact from "@/app/elements/contact";
import navigationLinks from "@/app/elements/navigationLinks";
import Link from "next/link";
import Logo from "@/app/elements/assets/branding";

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bg-white w-full top-0 right-0 z-50">
            {/* Top navigation bar */}
            <div className="py-3">
                <div className="mx-auto container sm:container md:container">
                    <div className="flex justify-between items-center">
                        {/* Social media links */}
                        <div className="flex gap-2">
                            {Object.values(social).map((platform, index) => (
                                <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer"
                                   className="p-2 bg-gray-100 rounded-full">
                                    {platform.icon}
                                </a>
                            ))}
                        </div>
                        {/* Contact links */}
                        <div className="flex gap-6 items-center text-sm">
                            {Object.values(contact).map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                                   className="flex gap-2 items-center">
                                    {item.icon} {item.value}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom navigation bar */}
            <div className="bg-gray-100">
                <div className="grid grid-cols-3 items-center gap-4 mx-auto h-24 container">
                    {/* Logo at the start */}
                    <div className="col-span-1">
                        <Logo size={50}/>
                    </div>

                    {/* Navigation links in the middle */}
                    <ul className="col-span-1 flex items-center justify-center gap-4 font-semibold h-full">
                        {Object.values(navigationLinks).map((link, index) => (
                            <li key={index} className="h-full">
                                <Link href={link.route} className={`h-full grid items-center ${pathname===link.route?'border-b-4 border-primary-blue mt-[2px]': 'hover:border-b-4'}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Button at the end */}
                    <div className="col-span-1 flex items-center justify-end">
                        <button
                            className="w-40 flex items-center justify-center gap-2 bg-primary-blue text-sm text-white font-semibold p-3 rounded">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
