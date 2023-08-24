/*eslint-disable react/prop-types*/
import { useState } from "react";

function DirectoryView({ directory, onNavigate, onAction }) {
  const [name, setName] = useState("");
  const [itemType, setItemType] = useState("file");

  // Handle create item
  const handleCreateItem = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      onAction("CREATE_ITEM", { itemType, name });
      setName("");
    }
  };

  return (
    <div>
      {/* Create item form */}
      <form onSubmit={handleCreateItem}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
          <option value="file">File</option>
          <option value="directory">Directory</option>
        </select>
        <button type="submit">Create</button>
      </form>

      {/* Directory and file view */}
      {directory.children.map((item) => (
        <div key={item.name}>
          {item.type === "directory" ? (
            <button onClick={() => onNavigate(item.name)}>{item.name}</button>
          ) : (
            <span>{item.name}</span>
          )}
          <button onClick={() => onAction("UPDATE_ITEM", item.name)}>
            Update
          </button>
          <button onClick={() => onAction("DELETE_ITEM", item.name)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DirectoryView;
