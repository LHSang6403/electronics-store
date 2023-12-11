import SearchBar from "../../searchBar/searchBar";
import Link from "next/link";
import { readUserSession } from "@/app/auth/_actions";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui-shadcn-custom/dropdown-menu-custom";
import SignOut from "@app/auth/signOut";
import { Button } from "@components/ui-shadcn-custom/button-custom";

export default async function Header(): Promise<JSX.Element> {
  console.log("Header re-render");
  const { data } = await readUserSession();
  console.log("User season", data);

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
          <li className="mt-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
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
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-1">
                <DropdownMenuLabel className="bg-primary px-3 py-2 text-base">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="p-1">
                  <Image
                    className="mx-auto py-1"
                    src="/assets/icons/signedIn-icon.png"
                    alt="Sign In"
                    layout="fix"
                    width={44}
                    height={44}
                  />
                  <h1 className="px-2 text-lg">User name</h1>
                  {data.session && (
                    <DropdownMenuItem>
                      {data.session?.user.email}
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem>Edit account</DropdownMenuItem>

                  <div className="px-2">
                    {data.session ? (
                      <SignOut />
                    ) : (
                      <Link href="/auth">
                        <Button
                          type="submit"
                          className="w-full h-7 px-16 flex gap-2"
                        >
                          Sign in
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </header>
  );
}
