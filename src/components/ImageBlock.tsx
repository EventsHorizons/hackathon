import React from 'react';
import Link from 'next/link';
import styles from '@/components/ImageBlock.module.scss';

// Interfaz para los props
interface ImageBlockProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

// Declaración del componente
const ImageBlock: React.FC<ImageBlockProps> = ({ image, title, description, link }) => {
  return (
    <div className={styles.imageBlock}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}></p>
        <Link href={'/gallery'} className={styles.button}>
          Conocer Más
        </Link>
      </div>
    </div>
  );
};

export default ImageBlock;
