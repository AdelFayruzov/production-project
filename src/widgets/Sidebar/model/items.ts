import { SVGProps, FC } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import i18n from "i18next";

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: FC<SVGProps<SVGSVGElement>>,
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.profile,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.main,
        text: "Главная",
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: "О сайте",
        Icon: AboutIcon,
    },
];
