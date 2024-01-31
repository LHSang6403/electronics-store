import Link from "next/link";

export default function Create(url: { url: string }) {
  return (
    <Link
      href={url.url}
      className="w-fit h-fit sm:ml-auto rounded-lg px-3 py-1 bg-primary text-black sm:text-sm flex justify-center items-center"
    >
      Create
    </Link>
  );
}
