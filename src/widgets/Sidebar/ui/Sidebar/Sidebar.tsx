import { classNames } from "shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { ButtonSize } from "shared/ui/Button/ui/Button";
import SidebarItem from "../SidebarItem/SidebarItem";
import { SidebarItemsList } from "../../model/items";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                type="button"
                onClick={onToggle}
                theme={ButtonTheme.CLEAR}
                square
                size={ButtonSize.L}
            >
                {collapsed ? t(">") : t("<")}
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} collapsed={collapsed} item={item} />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
