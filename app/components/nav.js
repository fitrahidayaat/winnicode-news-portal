import Image from "next/image";
import Logo from "../images/logo.svg";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-between text-lg py-8">
        <div className="flex">
          <Image src={Logo} alt="logo" width={200} height={100} />
          <ul className="flex">
            <li className="px-3 py-2">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-3 py-2">
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li className="px-3 py-2">
              <Link href={"/"}>About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-5 py-2 bg-gray-100 max-w-96"
          />
        </div>
      </nav>
    </>
  );
}
