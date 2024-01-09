import { classNames } from "shared/lib/classNames/classNames";
import {
    CSSProperties,
    memo, useMemo,
} from "react";
import cls from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src: string;
    size?: number
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 80,
        height: size || 80,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});
