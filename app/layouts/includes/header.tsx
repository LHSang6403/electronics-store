export default function Header(): ReturnType<React.FC> {
  return (
    <div className="px-[15%] h-12 flex flex-row bg-[whitesmoke]">
      <img
        className="w-[150px] h-9 mt-1 object-cover"
        alt="logo"
        src="/assets/logo2.png"
      ></img>
      <div className="">Search</div>
      <div className=""></div>
    </div>
  );
}
