import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextTheme } from "shared/ui/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile";
import Loader from "shared/ui/Loader/Loader";
import { TextAlign } from "shared/ui/Text/ui/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean
    readonly?: boolean
    onChangeUsername?: (username?: string) => void;
    onChangeAvatar?: (avatar?: string) => void;
    onChangeFirstname?: (firstname?: string) => void;
    onChangeLastname?: (lastname?: string) => void;
    onChangeCity?: (city?: string) => void;
    onChangeAge?: (age?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeAvatar,
        onChangeUsername,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте перезагрузить страницу")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>
                <div className={cls.data}>
                    {data?.avatar && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data.avatar} size={80} alt="Фото профиля" />
                        </div>
                    )}
                    <Input
                        className={cls.input}
                        value={data?.firstname}
                        onChange={onChangeFirstname}
                        placeholder={t("Имя")}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.lastname}
                        className={cls.input}
                        onChange={onChangeLastname}
                        placeholder={t("Фамилия")}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.age}
                        type="number"
                        className={cls.input}
                        onChange={onChangeAge}
                        placeholder={t("Возраст")}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.city}
                        className={cls.input}
                        onChange={onChangeCity}
                        placeholder={t("Город")}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.username}
                        className={cls.input}
                        onChange={onChangeUsername}
                        placeholder={t("Имя пользователя")}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.avatar}
                        className={cls.input}
                        onChange={onChangeAvatar}
                        placeholder={t("Ссылка на фото профиля")}
                        readonly={readonly}
                    />
                    <CurrencySelect
                        className={cls.input}
                        onChangeCurrency={onChangeCurrency}
                        value={data?.currency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        className={cls.input}
                        onChangeCountry={onChangeCountry}
                        value={data?.country}
                        readonly={readonly}
                    />
                </div>
            </div>
        </div>
    );
};
