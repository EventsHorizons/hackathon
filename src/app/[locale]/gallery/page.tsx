import { Flex, Heading } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import ImageBlock from "@/components/ImageBlock";
import { pirataOne } from "@/config/fonts";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { gallery } = renderContent(t);

  const title = gallery.title;
  const description = gallery.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/gallery`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Criaturas() {
  const images = [
    {
      image: "/images/america.png",
      title: "America",
      description: "Criaturas místicas de America",
      link: "/criaturas/america",
    },
    {
      image: "/images/europa.png",
      title: "Europa",
      description: "Criaturas místicas de Europa",
      link: "/criaturas/europa",
    },
    {
      image: "/images/asia.png",
      title: "Asia",
      description: "Criaturas místicas de Asia",
      link: "/criaturas/asia",
    },
  ];

  return (
    <Flex
      maxWidth="xl"
      fillWidth
      gap="s"
      direction="column"
      alignItems="center"
      marginY="0"
      paddingTop="2"
      marginTop="32"
    >
      {/* Título y descripción */}
      <Heading className={`${pirataOne.className} title-text`}>
        Criaturas de America
      </Heading>

      {/* Grid de imágenes */}
      <Flex
        maxWidth="xl"
        direction="row"
        gap="8"
        justifyContent="center"
        marginTop="32"
      >
        {images.map((img, index) => (
          <ImageBlock
            key={index}
            image={img.image}
            title={img.title}
            description={img.description}
            link={img.link}
          />
        ))}
      </Flex>
    </Flex>
  );
}
