import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import i18n from 'i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
