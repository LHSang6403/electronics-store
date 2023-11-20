"use client";

import Link from "next/link";

export default function Banner(): JSX.Element {
  const url =
    "https://viofo.vn/wp-content/uploads/2023/08/Viofo-A139-PRO-Banner.jpg";

  return (
    <div>
      <Link href="#">
        <img
          className="w-full h-fit object-cover sm:scale-110"
          alt="banner-img"
          src={url}
        ></img>
      </Link>
    </div>
  );
}
