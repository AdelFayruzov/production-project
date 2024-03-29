import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
    FC, memo, PropsWithChildren, ReactNode,
} from "react";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps {
    className?: string;
    to: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
