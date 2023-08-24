export function fileExplorerReducer(state, action) {
  switch (action.type) {
    case "CREATE_ITEM":
      return createItem(state, action.payload.itemType, action.payload.name);

    case "UPDATE_ITEM":
      return updateItem(state, action.payload.oldName, action.payload.newName);

    case "DELETE_ITEM":
      // Logic to delete a directory or file
      return deleteItem(state, action.payload.name);

    case "TOGGLE_VIEW":
      // Logic to toggle view mode
      return { ...state, viewMode: !state.viewMode };

    default:
      return state;
  }
}

/* - --------------------------------- ACTIONS ---------------------- */

export function createItem(state, itemType, name) {
  const newItem = {
    type: itemType,
    name,
    children: itemType === "directory" ? [] : undefined,
  };
  const targetDirectory = navigateToCurrentPath(
    state.fileSystem,
    state.currentPath
  );

  // Create a new array of children with the new item added
  const updatedChildren = [...targetDirectory.children, newItem];

  // Create a new file system with the updated children array
  const updatedFileSystem = updateChildrenAtPath(
    state.fileSystem,
    state.currentPath,
    updatedChildren
  );

  return { ...state, fileSystem: updatedFileSystem };
}

export function updateItem(state, oldName, newName) {
  const targetDirectory = navigateToCurrentPath(
    state.fileSystem,
    state.currentPath
  );
  const updatedChildren = targetDirectory.children.map((item) =>
    item.name === oldName ? { ...item, name: newName } : item
  );
  const updatedFileSystem = updateChildrenAtPath(
    state.fileSystem,
    state.currentPath,
    updatedChildren
  );
  return { ...state, fileSystem: updatedFileSystem };
}

export function deleteItem(state, name) {
  const targetDirectory = navigateToCurrentPath(
    state.fileSystem,
    state.currentPath
  );
  const updatedChildren = targetDirectory.children.filter(
    (item) => item.name !== name
  );
  const updatedFileSystem = updateChildrenAtPath(
    state.fileSystem,
    state.currentPath,
    updatedChildren
  );
  return { ...state, fileSystem: updatedFileSystem };
}

function updateChildrenAtPath(fileSystem, path, newChildren) {
  if (path.length === 0) {
    return { ...fileSystem, children: newChildren };
  }

  const [firstSegment, ...remainingPath] = path;
  const targetDirectory = fileSystem.children.find(
    (item) => item.name === firstSegment
  );

  return {
    ...fileSystem,
    children: fileSystem.children.map((item) =>
      item.name === firstSegment
        ? {
            ...targetDirectory,
            children: updateChildrenAtPath(
              targetDirectory,
              remainingPath,
              newChildren
            ),
          }
        : item
    ),
  };
}

export function navigateToCurrentPath(fileSystem, currentPath) {
  let currentDirectory = fileSystem;
  for (const pathSegment of currentPath) {
    currentDirectory = currentDirectory.children.find(
      (item) => item.name === pathSegment
    );
  }
  return currentDirectory;
}

/* - --------------------------------- INITIAL STATE ---------------------- */
export const initialState = {
  currentPath: [],
  fileSystem: {
    type: "directory",
    name: "Root",
    children: [],
  },
  viewMode: true, // true means contents are shown, false means hidden
};
