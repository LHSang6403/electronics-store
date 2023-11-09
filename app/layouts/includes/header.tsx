import SearchBar from "../../components/searchBar";

export default function Header(): ReturnType<React.FC> {
  return (
    <div className="px-[15%] h-12 flex flex-row justify-between bg-white">
      <img
        className="w-[150px] h-9 mt-1 object-cover"
        alt="logo"
        src="/assets/logo.png"
      ></img>
      <div className="w-fit flex flex-row justify-center items-center">
        <SearchBar />
      </div>
      <div className="w-fit flex flex-row justify-center items-center">
        <button>
          <img
            className="w-6 mx-2"
            alt="cart-icon"
            src="/assets/love-icon.png"
          ></img>
        </button>
        <button>
          <img
            className="w-6 mx-2"
            alt="cart-icon"
            src="/assets/cart-icon.png"
          ></img>
        </button>
      </div>
    </div>
  );
}
