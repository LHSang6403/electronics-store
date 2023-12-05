import Link from "next/link";
import Image from "next/image";

export default function Banner(): JSX.Element {
  const url =
    "https://viofo.vn/wp-content/uploads/2023/08/Viofo-A139-PRO-Banner.jpg";

  return (
    <div className="w-full h-fit block sm:h-[140px]">
      <Link href="#">
        <Image
          src={url}
          alt="Advertising Banner"
          layout="intrinsic"
          width={1050}
          height={250}
        />
      </Link>
    </div>
  );
}
