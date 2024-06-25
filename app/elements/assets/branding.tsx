import {Image} from "@nextui-org/react";
import logo from '@/public/branding/abi-ref-and-electronics.png';
import React from "react";

const Logo = ({ size }: { size?: number }) => (
    <Image
        width={size}
        src={logo.src}
        alt="NextUI Album Cover"
        className={`size-[${size}px]`}
    />
);

export default Logo;
