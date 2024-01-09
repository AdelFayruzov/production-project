import { classNames } from "shared/lib/classNames/classNames";
import {
    ChangeEvent,
    FC, memo, useMemo,
} from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string;
    label?: string
    options?: SelectOption[],
    value?: string,
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
    } = props;

    const optionsList = useMemo(() => options?.map((option) => (
        <option
            className={cls.option}
            value={option.value}
        >
            {option.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div
            className={classNames(cls.Wrapper, {}, [className])}
        >
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            ) }
            <select value={value} className={cls.select} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
});
