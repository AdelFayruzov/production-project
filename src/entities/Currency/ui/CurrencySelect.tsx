import { Select, SelectOption } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/currency";
import { memo, useCallback } from "react";

interface CurrencySelectProps {
    className?: string;
    onChangeCurrency?: (value: Currency) => void;
    value?: string;
    readonly?: boolean;
}

const currencyOptions: SelectOption[] = Object.values(Currency).map((value) => ({
    value,
    content: value,
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        onChangeCurrency, className, value, readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChangeCurrency?.(value as Currency);
    }, [onChangeCurrency]);

    return (
        <Select
            className={className}
            label="Валюта"
            onChange={onChangeHandler}
            value={value}
            options={currencyOptions}
            readonly={readonly}
        />
    );
});
