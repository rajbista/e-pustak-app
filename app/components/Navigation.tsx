"use client";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  //   useEffect(() => {
  //     if (toggle) router.push("/navigation");
  //     else router.forward();
  //   });
  return (
    <div onClick={() => setToggle(!toggle)}>
      {/* <IconButton variant="ghost" highContrast>
        {toggle ? (
          <Cross1Icon width="24" height="24" />
          
        ) : (
          <HamburgerMenuIcon width="24" height="24" />
        )}
      </IconButton> */}
    </div>
  );
};

export default Navigation;
