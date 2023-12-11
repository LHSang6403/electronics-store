import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui-shadcn-custom/dropdown-menu-custom";
import SignOut from "@/app/auth/SignOut";
import { Button } from "@components/ui-shadcn-custom/button-custom";
import Image from "next/image";
import Link from "next/link";

const AccountPopup = ({ data }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          src={
            data?.session
              ? "/assets/icons/signedIn-icon.png"
              : "/assets/icons/signIn-icon.png"
          }
          alt="Sign In"
          width={34}
          height={34}
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
            width={44}
            height={44}
          />
          <h1 className="px-2 text-lg">User name</h1>
          {data.session && (
            <DropdownMenuItem>{data.session?.user.email}</DropdownMenuItem>
          )}
          <DropdownMenuItem>Edit account</DropdownMenuItem>

          <div className="px-2 my-1">
            {data.session ? (
              <SignOut />
            ) : (
              <Link href="/auth">
                <Button type="submit" className="w-full h-7 px-16 flex gap-2">
                  Sign in
                </Button>
              </Link>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountPopup;
