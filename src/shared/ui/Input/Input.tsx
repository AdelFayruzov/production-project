import { classNames } from 'shared/lib/classNames/classNames';
import {
    InputHTMLAttributes, memo, ChangeEvent, ReactElement, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputHTMLProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    icon?: ReactElement;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        icon,
        autofocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {/* <div className={cls.icon}> */}
            {/*    {icon} */}
            {/* </div> */}
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
