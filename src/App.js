import Board from "./components/Board";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/boardProvider";
import ToolbarProvider from "./store/toolbar-provider";
import Toolbar from "./components/Toolbar";
function App() {
  return (
    <BoardProvider>
      <ToolbarProvider>
        <Toolbox/>
        <Board/>
        <Toolbar/>
      </ToolbarProvider>
    </BoardProvider>
  );
}
export default App;
