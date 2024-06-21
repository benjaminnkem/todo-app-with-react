import Modal from "./Modal";
import useModal from "../hooks/useModal";

const AddTodoModal = () => {
  const { hideModal } = useModal();

  return <Modal onClose={hideModal}></Modal>;
};

export default AddTodoModal;
