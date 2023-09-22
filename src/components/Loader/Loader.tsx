import { loaderContainerStyle, loaderStyle } from "../../constants";

const Loader = () => {
  return (
    <div className={loaderContainerStyle}>
      <div className={loaderStyle}></div>
    </div>
  );
};

export default Loader;
