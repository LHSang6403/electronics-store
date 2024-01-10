import Link from "next/link";

export default function PrimaryButton({
  name,
  link,
}: {
  name: string;
  link: string;
}): JSX.Element {
  return (
    <Link
      href={link}
      className="w-fit h-[40px] px-3 py-1 rounded-lg mx-auto my-2 bg-primary"
    >
      {name}
    </Link>
  );
}
