import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import ProfilePageHeader from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currency } from "shared/consts/common";

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeUsername = useCallback((username?: string) => {
        dispatch(profileActions.updateProfile({ username: username || "" }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((avatar?: string) => {
        dispatch(profileActions.updateProfile({ avatar: avatar || "" }));
    }, [dispatch]);

    const onChangeFirstname = useCallback((firstname?: string) => {
        dispatch(profileActions.updateProfile({ firstname: firstname || "" }));
    }, [dispatch]);

    const onChangeLastname = useCallback((lastname?: string) => {
        dispatch(profileActions.updateProfile({ lastname: lastname || "" }));
    }, [dispatch]);

    const onChangeCity = useCallback((city?: string) => {
        dispatch(profileActions.updateProfile({ city: city || "" }));
    }, [dispatch]);

    const onChangeAge = useCallback((age?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(age || 0) }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: string) => {
        // dispatch(profileActions.updateProfile({ currency: Currency[currency] || "" }));
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                <ProfilePageHeader readonly={readonly} />
                <ProfileCard
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeCurrency={onChangeCurrency}
                    data={formData}
                    readonly={readonly}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
