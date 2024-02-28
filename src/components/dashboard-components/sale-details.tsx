"use client";

import Image from "next/image";
import JohnLightImg from "@/assets/images/illustration-john-light.png";
import JohnDarkImg from "@/assets/images/illustration-john-dark.png";
import Button from "@/components/UI/button";
import classes from "@/components/dashboard-components/sale-detalis.module.scss";
import { useTheme } from "next-themes";

export default function SaleDetails() {
  const { resolvedTheme } = useTheme();

  return (
    <div className={classes.sale__details}>
      <div className={classes.desc}>
        <h1>Congratulations John! 🎉</h1>
        <p>You have done 72% 🤩 more sales today.</p>
        <p>Check your new raising badge in your profile.</p>
      </div>
      <div className={classes.image}>
        <Image
          src={resolvedTheme === "light" ? JohnLightImg : JohnDarkImg}
          alt=""
        />
      </div>
      <Button classes={classes.btn}>View badges</Button>
    </div>
  );
}
