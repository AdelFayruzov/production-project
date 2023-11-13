import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames("lds-ripple", {}, [className])}>
        <div />
        <div />
    </div>
);

export default Loader;
