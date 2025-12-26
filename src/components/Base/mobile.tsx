import { useEffect } from "react";
import Base from "./base";
import "./mobile.scss";

type Props = {
  menu: string[];
};

export default function Mobile({ menu }: Props) {
  useEffect(() => {
    const mobile = document.querySelector(".mobile_container");

    // THIS is what constrains Base on mobile
    mobile?.classList.add("set_height");

    return () => {
      mobile?.classList.remove("set_height");
    };
  }, []);

  return (
    <div id="mobile">
      {/* Base is ONLY rendered here on mobile */}
      <Base menu={menu} />
    </div>
  );
}
