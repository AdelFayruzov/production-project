import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import MainIcon from 'shared/assets/icons/main.svg';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input icon={<MainIcon />} value={value} onChange={onChange} />
        </div>
    );
};

export default MainPage;
