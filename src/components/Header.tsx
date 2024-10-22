"use client";

import { useParams } from "next/navigation";
import { Flex, ToggleButton } from "@/once-ui/components";
import styles from '@/components/Header.module.scss';
import { routes, display } from '@/app/resources';
import { usePathname, useRouter } from '@/i18n/routing';
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname() ?? '';
    const params = useParams();
    const t = useTranslations();
    const { home, about, blog, gallery } = renderContent(t);

    return (
        <Flex style={{ height: 'fit-content' }} className={styles.position} as="header" zIndex={9} fillWidth padding="4" justifyContent="center">
            <Flex background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l" padding="1" justifyContent="center">
                <Flex gap="2">
                    {routes['/'] && (
                        <ToggleButton
                            href={`/${params?.locale}`}
                            selected={pathname === "/"}>
                            <Flex paddingX="2">{home.label}</Flex>
                        </ToggleButton>
                    )}
                    {/* {routes['/'] && (
                        <ToggleButton
                            href={`/${params?.locale}/`}
                            selected={pathname === "/"}>
                            <Flex paddingX="2">{about.label}</Flex>
                        </ToggleButton>
                    )} */}
                    {/* Ícono en el medio como ToggleButton */}
                    <ToggleButton
                        href={`/`} // Cambia esto a la ruta deseada
                        selected={pathname === "/"} // Ajusta esta lógica según sea necesario
                    >
                        <img src="/images/favicon.png" alt="Icon" className="w-8 h-8" style={{ width: '24px', height: '24px' }} />
                    </ToggleButton>
                    {/* {routes['/'] && (
                        <ToggleButton
                            href={`/${params?.locale}/`}
                            selected={pathname.startsWith('/')}>
                            <Flex paddingX="2">{blog.label}</Flex>
                        </ToggleButton>
                    )} */}
                    {routes['/gallery'] && (
                        <ToggleButton
                            href={`/${params?.locale}/gallery`}
                            selected={pathname.startsWith('/gallery')}>
                            <Flex paddingX="2">Criaturas</Flex>
                        </ToggleButton>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
