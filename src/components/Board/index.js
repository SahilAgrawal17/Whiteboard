import { useRef, useEffect, useContext, useLayoutEffect} from "react";
import rough from "roughjs";
import boardContext from "../../store/board-context";
import {TOOL_ITEMS} from "../../constants";
import toolbarContext from "../../store/toolbar-context"
function Board() {
  const canvasRef = useRef();
  const {
    elements, 
    boardMouseDownHandler, 
    boardMouseMoveHandler, 
    boardMouseUpHandler,
  } = useContext(boardContext)
  const {toolbarState} = useContext(toolbarContext)

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },[]);

  useLayoutEffect (()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.save();
    const roughCanvas = rough.canvas(canvas);
    elements.forEach(element=>{
      switch (element.type){
        case TOOL_ITEMS.LINE:
        case TOOL_ITEMS.RECTANGLE: 
        case TOOL_ITEMS.CIRCLE:
        case TOOL_ITEMS.ARROW: 
          roughCanvas.draw(element.roughEle)
          break;
        case TOOL_ITEMS.BRUSH:
          context.fillStyle = element.stroke;
          context.fill(element.path)
          context.restore();
          break;
        default:
          throw new Error("Type not recognized");
      }
    });
    return () =>{
      context.clearRect(0,0, canvas.width, canvas.height)
    }
  },[elements])


  const handleMouseDown = (event) => {
    boardMouseDownHandler(event, toolbarState);
  }

  const handleMouseMove = (event) => {
      boardMouseMoveHandler(event);
  }

  const handleMouseUp = () => {
    boardMouseUpHandler();
  }
  return (
    <div className="App">
        <canvas ref={canvasRef} 
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        />
    </div>
);
}

export default Board