import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { profileActions, updateProfileData } from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean
}

const ProfilePageHeader = ({ className, readonly }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {readonly ? (
                <Button
                    className={cls.editBtn}
                    onClick={onEdit}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t("Редактировать")}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                        theme={ButtonTheme.BACKGROUND_RED}
                    >
                        {t("Отменить")}
                    </Button>
                    <Button
                        onClick={onSave}
                        className={cls.saveBtn}
                        theme={ButtonTheme.BACKGROUND_BLUE}
                    >
                        {t("Сохранить")}
                    </Button>
                </>
            )}
        </div>
    );
};

export default ProfilePageHeader;
