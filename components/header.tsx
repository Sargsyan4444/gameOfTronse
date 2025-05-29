import Link from "next/link";
import Nav from "./nav";

function Header() {
    return(
        <header className="w-full bg-blue-200">
            <div className="w-[1220px] mx-auto flex justify-between items-center py-4">
                <Link href="/"><img src="/logo.png" alt="logo" className="w-[100px] h-[45px object-contain" /></Link>
                <Nav/>
            </div>
        </header>
    )
}
export default Header