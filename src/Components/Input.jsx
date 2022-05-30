import "./all.css"
export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input  style={{ position: "absolute" }} 
          className={`input  ${variant || "flushed"}`}
          type={type}
          onChange={onChange}
      />
      <img
        src={rightLogo}
        alt={"eye"}
        height={"20px"}
        onAuxClick={rightLogoOnClick}
        style={{ position: "relative", left: "140px" }}
      />
    </div>
  );
};
