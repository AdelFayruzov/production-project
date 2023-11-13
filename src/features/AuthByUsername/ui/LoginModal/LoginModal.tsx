import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import Loader from "shared/ui/Loader/Loader";
import { LoginFormLazy } from "../LoginForm/LoginFrom.lazy";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormLazy />
        </Suspense>
    </Modal>
);
