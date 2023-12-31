import "@styles/globals.css";

const LineBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      {children}
    </>
  );
};

export default LineBackground;
