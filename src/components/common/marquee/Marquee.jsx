import "../marquee/Marquee.css";

const Marquee = ({ children, marqueestyle }) => {
  return (
    <div className={`marquee  ${marqueestyle}`}>
      <div className="marqueeList">{children}</div>
    </div>
  );
};

export default Marquee;
