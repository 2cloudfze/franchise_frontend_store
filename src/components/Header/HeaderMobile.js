import { useState } from "react";
import Logo from "@/components/Logo";
import OpenDrawerButton from "@/components/Header/ToggleDrawerButton";
import SideDrawer from "@/components/Header/SideDrawer";

export default function HeaderMobile({ viewer }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="header-mobile">
      <OpenDrawerButton openDrawer={toggleDrawer} />

      <SideDrawer closeDrawer={toggleDrawer} />

      <Logo />

      <style jsx>{`
        .header-mobile {
          display: flex;
          align-items: center;
          padding: 18px 48px;
          
        }
      `}</style>
    </div>
  );
}
