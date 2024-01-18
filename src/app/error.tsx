"use client";

import { useRouter } from "next/navigation";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  const handleClick = async () => {
    reset();
  };
  return (
    <div className="h-[80vh] flex justify-center items-center ">
      <div className="w-[700px] h-fit px-12 py-8 bg-[#EEEEEE] shadow-lg rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-4 text-primary font-bold">
          Electronics store
        </h1>
        <h2 className="text-xl text-center mb-4">
          We notice that: {error.message}
        </h2>
        <div className="flex flex-row gap-4">
          <button
            className="px-4 py-2 mt-2 text-black bg-primary rounded-lg"
            onClick={handleClick}
          >
            Try again
          </button>
          <button
            className="px-4 py-2 mt-2 text-black bg-primary rounded-lg"
            onClick={router.back}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
