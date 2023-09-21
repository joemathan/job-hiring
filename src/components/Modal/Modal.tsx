import { Dialog } from "@headlessui/react";
import { IModalProps } from "../../types";

const Modal = ({
  children,
  isModalOpen,
  setIsModalOpen,
  handleOnModalClose,
}: IModalProps) => {
  return (
    <Dialog
      className="relative z-50"
      open={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        handleOnModalClose();
      }}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
