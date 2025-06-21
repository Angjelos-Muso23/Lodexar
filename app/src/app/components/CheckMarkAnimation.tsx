import dynamic from "next/dynamic";

import checkmarkAnimation from "../../../public/Checkmark.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CheckmarkAnimation = () => (
  <Lottie
    animationData={checkmarkAnimation}
    loop={false}
    style={{ width: "100px", height: "100px" }}
  />
);

export default CheckmarkAnimation;
