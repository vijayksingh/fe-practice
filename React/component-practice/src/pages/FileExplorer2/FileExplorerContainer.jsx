import { useReducer } from "react";
import DirectoryView from "./DirectoryView";
import {
  fileExplorerReducer,
  initialState,
  navigateToCurrentPath,
} from "./constant";

function FileExplorerContainer() {
  const [state, dispatch] = useReducer(fileExplorerReducer, initialState);

  // Navigate to a directory
  const handleNavigate = (name) => {
    dispatch({ type: "NAVIGATE", name });
  };

  // Handle actions like create, update, delete
  const handleAction = (actionType, payload) => {
    dispatch({ type: actionType, payload });
  };

  // Toggle view mode
  const handleToggleView = () => {
    dispatch({ type: "TOGGLE_VIEW" });
  };

  return (
    <div>
      {/* Directory view */}
      <DirectoryView
        directory={navigateToCurrentPath(state.fileSystem, state.currentPath)}
        onNavigate={handleNavigate}
        onAction={handleAction}
      />

      {/* Toggle view button */}
      <button onClick={handleToggleView}>Toggle View</button>
    </div>
  );
}

export default FileExplorerContainer;
