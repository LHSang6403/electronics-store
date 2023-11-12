import SearchBar from "../../components/searchBar";
import Link from "next/link";

export default function Header(): ReturnType<React.FC> {
  return (
    <header className="w-full px-[calc((100%-1050px)_/_2)] h-12 flex flex-row justify-between bg-white">
      <img
        className="w-[150px] h-9 mt-1 object-cover"
        alt="logo"
        src="/assets/logo.png"
      ></img>
      <div className="w-fit flex flex-row justify-center items-center">
        <SearchBar />
      </div>
      <div className="w-fit flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center items-center list-none">
          <li>
            <Link href="#">
              <img
                className="w-6 mx-2"
                alt="cart-icon"
                src="/assets/love-icon.png"
              ></img>
            </Link>
          </li>
          <li>
            <Link href="#">
              <img
                className="w-6 mx-2"
                alt="cart-icon"
                src="/assets/cart-icon.png"
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
