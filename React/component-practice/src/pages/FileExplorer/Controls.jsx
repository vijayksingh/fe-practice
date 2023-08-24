import { FaFile, FaFolder, FaPen, FaTrash } from "react-icons/fa";

const Controls = ({
  canEdit,
  canRemove,
  canCreateFile,
  canCreateFolder,
  onAction,
}) => {
  const handleClick = (e) => {
    const { currentTarget } = e;
    const action = currentTarget.getAttribute("data-action");

    onAction(action);
  };

  return (
    <div className="controls">
      {canEdit ? (
        <span data-action="edit" onClick={handleClick}>
          <FaPen />
        </span>
      ) : null}
      {canCreateFile ? (
        <span data-action="createFile" onClick={handleClick}>
          <FaFile />
        </span>
      ) : null}
      {canCreateFolder ? (
        <span data-action="createFolder" onClick={handleClick}>
          <FaFolder />
        </span>
      ) : null}
      {canRemove ? (
        <span data-action="remove" onClick={handleClick}>
          <FaTrash />
        </span>
      ) : null}
    </div>
  );
};

Controls.defaultProps = {
  canEdit: true,
  canRemove: false,
  canCreateFile: true,
  canCreateFolder: true,
  onAction: () => {},
};

export default Controls;
