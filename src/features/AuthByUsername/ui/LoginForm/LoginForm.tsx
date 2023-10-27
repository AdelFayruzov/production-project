import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Логин')} className={cls.input} type="text" />
            <Input placeholder={t('Пароль')} className={cls.input} type="text" />
            <Button theme={ButtonTheme.BACKGROUND} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
