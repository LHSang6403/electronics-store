import SearchBar from "../../searchBar/searchBar";
import Link from "next/link";
import { readUserSession } from "@/app/auth/_actions";
import Image from "next/image";

export default async function Header(): Promise<JSX.Element> {
  const { data } = await readUserSession();
  console.log(data);

  return (
    <header className="w-full px-[calc((100%-1050px)_/_2)] xl:px-6 sm:px-4 h-12 flex flex-row justify-between items-center bg-white">
      <div className="w-[150px] h-[47px] xl:w-[120px] xl:h-[37px] sm:w-[100px] sm:h-[31px] object-cover">
        <Image
          src="/assets/logo.png"
          alt="App Logo"
          layout="responsive"
          width={404}
          height={125}
        />
      </div>
      <div
        className="w-fit flex flex-row justify-center items-center
      sm:hidden"
      >
        <SearchBar />
      </div>
      <div className="w-fit flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center items-center list-none">
          <li className="hidden sm:block">
            <Link className="w-6 mx-2 block" href="#">
              <Image
                src="/assets/icons/search-thin-icon.png"
                alt="Search Icon"
                layout="fix"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link className="w-6 mx-2 block" href="/cart">
              <Image
                src="/assets/icons/cart-icon.png"
                alt="Cart Icon"
                layout="fix"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link className="w-6 mx-2 block" href="/auth">
              <Image
                src={
                  data?.session
                    ? "/assets/icons/signedIn-icon.png"
                    : "/assets/icons/signIn-icon.png"
                }
                alt="Sign In"
                layout="fix"
                width={30}
                height={30}
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
