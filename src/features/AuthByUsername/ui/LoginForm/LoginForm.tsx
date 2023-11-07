import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text';
import HumanIcon from 'shared/assets/icons/human.svg';
import LoginIcon from 'shared/assets/icons/login.svg';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { GetLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();

    const appDispatch: AppDispatch = useDispatch();

    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(GetLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        appDispatch(loginByUsername({ username, password }));
    }, [appDispatch, password, username]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.title}>
                <HumanIcon />
                <Text title={t('Вход или регистрация')} />
                <Text text={t('Введите адрес электронной почты, чтобы начать.')} />
            </div>
            <Input
                onChange={onChangeUsername}
                autofocus
                placeholder={t('Логин')}
                className={cls.input}
                type="text"
                value={username}
            />
            <Input
                onChange={onChangePassword}
                placeholder={t('Пароль')}
                className={cls.input}
                type="password"
                value={password}
            />
            {error && <Text text={error} theme={TextTheme.ERROR} /> }
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.loginBtn}
            >
                {t('Продолжить')}
                <LoginIcon />
            </Button>
        </div>
    );
});
