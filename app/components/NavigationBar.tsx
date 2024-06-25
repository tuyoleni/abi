import social from "@/app/elements/social";
import contact from "@/app/elements/contact";
import navigationLinks from "@/app/elements/navigationLinks";
import Link from "next/link";
import Logo from "@/app/elements/assets/branding/images";

export default function Navigation() {
    return (
        <nav className={`fixed bg-white w-full top-0 right-0`}>
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
            <div className="bg-gray-100 py-4">
                <div className="flex items-center justify-between mx-auto container sm:container md:container">
                    <Logo size={10}/>
                    <ul className={`flex gap-4 font-semibold text-gray-500`}>
                        {Object.values(navigationLinks).map((link, index) => (
                                <Link key={index} href={link.route} className={`hover:text-black`}>{link.label}</Link>
                            )
                        )}
                    </ul>
                    <button className={`flex items-center gap-2 bg-primary-blue text-sm text-white font-semibold p-4 rounded`}>Get Started</button>
                </div>
            </div>
        </nav>
    );
}
