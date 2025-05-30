import Link from "next/link";
import Image from "next/image"; 
import Nav from "./nav";

function Header() {
    return (
        <header className="w-full bg-blue-200">
            <div className="w-[1220px] mx-auto flex justify-between items-center py-4">
                <Link href="/">
                    <Image 
                        src="/logo.png" 
                        alt="Logo"
                        width={120}      
                        height={40}   
                        priority         
                    />
                </Link>
                <Nav />
            </div>
        </header>
    );
}

export default Header;
