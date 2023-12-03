import SearchBar from "../../searchBar/SearchBar";
import Link from "next/link";
import { readUserSession } from "@app/auth/actions";

export default async function Header(): Promise<JSX.Element> {
  const { data } = await readUserSession();

  return (
    <header className="w-full px-[calc((100%-1050px)_/_2)] xl:px-6 sm:px-4 h-12 flex flex-row justify-between items-center bg-white">
      <img
        className="w-[150px] h-[47px] xl:w-[120px] xl:h-[37px] sm:w-[100px] sm:h-[31px] object-cover"
        alt="logo"
        src="/assets/logo.png"
      ></img>
      <div
        className="w-fit flex flex-row justify-center items-center
      sm:hidden"
      >
        <SearchBar />
      </div>
      <div className="w-fit flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center items-center list-none">
          <li className="hidden sm:block">
            <Link href="#">
              <img
                className="w-6 mx-2"
                alt="cart-icon"
                src="/assets/search-thin-icon.png"
              ></img>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <img
                className="w-6 mx-2"
                alt="cart-icon"
                src="/assets/cart-icon.png"
              ></img>
            </Link>
          </li>
          <li>
            <Link href="/auth">
              <img
                className="w-6 mx-2"
                alt="cart-icon"
                src={
                  data?.session
                    ? "/assets/icons/signedIn-icon.png"
                    : "/assets/icons/signIn-icon.png"
                }
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
