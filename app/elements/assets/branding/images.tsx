import logo from '@/public/branding/abi-ref-and-electronics.png';

const Logo = ({ size }: { size?: number }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logo.src} alt="Company Logo" className={`size-${size}`} width={size}/>
);

export default Logo;
