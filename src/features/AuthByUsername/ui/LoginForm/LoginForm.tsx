import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { AppDispatch } from "app/providers/StoreProvider/config/store";
import { Text, TextTheme } from "shared/ui/Text";
import HumanIcon from "shared/assets/icons/human.svg";
import LoginIcon from "shared/assets/icons/login.svg";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { GetLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { GetLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { GetLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { GetLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const username = useSelector(GetLoginUsername);
    const password = useSelector(GetLoginPassword);
    const error = useSelector(GetLoginError);
    const isLoading = useSelector(GetLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    const { t } = useTranslation();
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <div className={cls.title}>
                    <HumanIcon />
                    <Text title={t("Вход или регистрация")} />
                    <Text text={t("Введите адрес электронной почты, чтобы начать.")} />
                </div>
                <Input
                    onChange={onChangeUsername}
                    autofocus
                    placeholder={t("Логин")}
                    className={cls.input}
                    type="text"
                    value={username}
                />
                <Input
                    onChange={onChangePassword}
                    placeholder={t("Пароль")}
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
                    {t("Продолжить")}
                    <LoginIcon />
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
