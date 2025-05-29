import Link from "next/link";
import { navItems } from "./nav-item";

function Nav() {
    return (
        <nav>
            <ul className="flex gap-6">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <Link className="font-bold text-gray-800 text-xl" href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
