"use client";

export default function PrimaryButton({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="w-fit h-[40px] px-3 mx-auto rounded-lg my-2 bg-primary"
    >
      {name}
    </button>
  );
}
