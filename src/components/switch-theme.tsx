"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./UI/button";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const SwitchTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div>
      {resolvedTheme === "light" && (
        <Button onClick={() => setTheme("dark")} classes='btn-header'>
          <IoMoonOutline />
        </Button>
      )}
      {resolvedTheme === "dark" && (
        <Button onClick={() => setTheme("light")} classes='btn-header'>
          <MdOutlineWbSunny />
        </Button>
      )}
    </div>
  );
};

export default SwitchTheme;
