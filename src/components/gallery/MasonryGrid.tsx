"use client";
import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from "next-intl";
import { renderContent } from "@/app/resources";
import Link from "next/link";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 3,
    1440: 3,
    1024: 2,
    560: 1,
  };

  const t = useTranslations();
  const { gallery } = renderContent(t);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <div key={index} className={styles.gridItem}>
          <SmartImage
            radius="m"
            aspectRatio={
              image.orientation === "horizontal" ? "16 / 9" : "9 / 16"
            }
            src={image.src}
            alt={image.alt}
            style={{ height: "100%" }} // Asegurando que SmartImage respete la altura
          />
          <Link href="https://tu-enlace.com" className={styles.button}>
            Ver más
          </Link>
        </div>
      ))}
    </Masonry>
  );
}
