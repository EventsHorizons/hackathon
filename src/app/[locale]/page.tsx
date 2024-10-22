import React from 'react';
import { Heading, Flex, Text } from '@/once-ui/components'; 
import { renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { pirataOne, robotoSlab } from '@/config/fonts';
import ImageBlock from '@/components/ImageBlock';
import image from 'next/image';
import Link from 'next/link';
import styles from '@/components/ImageBlock.module.scss';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { home } = renderContent(t);
    const title = home.title;
    const description = home.description;

    return {
        title,
        description,
    };
}

export default function Home(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { home } = renderContent(t);
    

    const images = [
    {
        image: '/images/america.png',
        title: 'America',
        description: 'Criaturas místicas de America',
        link: '/criaturas/america'
        },
        {
        image: '/images/europa.png',
        title: 'Europa',
        description: 'Criaturas místicas de Europa',
        link: '/criaturas/europa'
        },
        {
        image: '/images/asia.png',
        title: 'Asia',
        description: 'Criaturas místicas de Asia',
        link: '/criaturas/asia'
        }];

    const chest = [
    {
        image: '/images/gargola-1.png',
        title: 'chest',
        description: 'Haz click aquì y comparte tu encuentro con lo paranormal!'
        }];
    return (
        <Flex
            maxWidth="xl"
            fillWidth
            gap="s"
            direction="column"
            alignItems="center"
            marginY='0'
            paddingTop='2'
            marginTop='32'
        >
            {/* Título y texto */}
            <Heading className={`${robotoSlab.className} title-text`}>Criaturas de la Oscuridad</Heading>
            <Text className={`${pirataOne.className} sub-title-text`}>Seres que acechan desde las Sombras</Text>

            <Flex 
                maxWidth='m'
                direction="row"
                gap='20'
                marginTop='32'
                paddingTop='32'
                marginX='20'>
            
                <Text 
                    className={`${pirataOne.className} text-description1`}
                    style={{ flex: '1' }}
                >
                Halloween y sus criaturas más sombrías y espeluznantes
                </Text>
                <Text 
                    className={`${robotoSlab.className} text-description`}
                    style={{ flex: '1' }} 
                >
                En la penumbra habitan seres que despiertan nuestro miedo más profundo. Desde vampiros sedientos
                de sangre hasta espectros atormentados, estas criaturas representan lo desconocido y lo aterrador. Acompáñanos a descubrirlas.
                </Text>
            </Flex>
            <Flex 
                maxWidth='xl'
                margin='20'
                direction="column" 
                gap="1"     
                justifyContent="center">
                <Text 
                    className={`${pirataOne.className} text-description1`} 
                    style={{ marginBottom: '16px', textAlign: 'center', }} 
                >
                    Todo territorio tiene sus propias criaturas
                </Text>
                <Flex direction="row" gap="8" justifyContent="center"> 
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
            <Flex direction="row" alignItems="flex-start" justifyContent="center" style={{ marginTop: '16px' }}>
                <img src={chest[0].image} 
                     alt={chest[0].title} 
                     style={{ width: '540px', height: '600px' }} /> 
                <Flex direction="column" gap="4"> 
                <Text 
                    className={`${pirataOne.className} text-description1`} 
                    style={{ marginTop: '208px', marginLeft: '40px', textAlign: 'start' }} 
                >   
                    Te atreves a contar tu historia?
                </Text>
                <Text 
                    className={`${pirataOne.className} text-description-a`} 
                    style={{ marginTop: '20px', marginLeft: '40px', textAlign: 'start' }} 
                >
                    {chest[0].description}
                </Text>
                <Link href="/compartir" className={`${styles.button} share-button`} style={{ margin: 'auto', marginLeft: '40px', marginTop: '16px', textAlign: 'start', display: 'block' }}>
                    Compartir mi historia
                </Link>
                </Flex>
            </Flex>
        </Flex>
        
    );
}
