import { Select, SelectOption } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Country } from "entities/Country/model/types/country";

interface CountrySelectProps {
    className?: string;
    onChangeCountry?: (value: Country) => void;
    value?: string;
    readonly?: boolean;
}

const countryOptions: SelectOption[] = Object.values(Country).map((value) => ({
    value,
    content: value,
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        onChangeCountry, className, value, readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChangeCountry?.(value as Country);
    }, [onChangeCountry]);

    return (
        <Select
            className={className}
            label="Страна"
            onChange={onChangeHandler}
            value={value}
            options={countryOptions}
            readonly={readonly}
        />
    );
});
