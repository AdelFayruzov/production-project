import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
    InputHTMLAttributes, memo, ChangeEvent, ReactElement, useEffect, useRef,
} from "react";
import cls from "./Input.module.scss";

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends InputHTMLProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    icon?: ReactElement;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        icon,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {/* <div className={cls.icon}> */}
            {/*    {icon} */}
            {/* </div> */}
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={cls.input}
                type={type}
                value={value}
                readOnly={readonly}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
