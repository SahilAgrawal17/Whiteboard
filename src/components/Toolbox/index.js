import React, { useContext} from "react"
import classes from "./index.module.css"
import cx from "classnames"
import { LuRectangleHorizontal } from "react-icons/lu"
import { FaSlash, FaRegCircle, FaArrowRight, FaPaintBrush, FaEraser, FaFont, FaUndoAlt, FaRedoAlt, FaFileDownload} from "react-icons/fa"
import {TOOL_ITEMS} from "../../constants";

import boardContext from "../../store/board-context"


 const Toolbox = () =>{
    const {activeToolItem, changeToolHandler, undo, redo} = useContext(boardContext);

    const handleDownloadClick = () => {
        const canvas = document.getElementById("canvas");
        const tempCanvas = document.createElement("canvas");
        const tempContext = tempCanvas.getContext("2d");
    
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        tempContext.fillStyle = "#FFFFFF";
        tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        tempContext.drawImage(canvas, 0, 0);

        const data = tempCanvas.toDataURL("image/jpeg");
        const anchor = document.createElement("a");
        anchor.href = data;
        anchor.download = "board.jpeg";
        anchor.click();
    }
    

    return (
        <div className= {classes.container}>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="BRUSH"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.BRUSH)}
            >
                <FaPaintBrush/>        
            </div>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="LINE"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.LINE)}
            >
                <FaSlash/>        
            </div>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="RECTANGLE"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.RECTANGLE)}
            >
                <LuRectangleHorizontal/>           
            </div>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="CIRCLE"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.CIRCLE)}
            >
                <FaRegCircle/>           
            </div>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="ARROW"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.ARROW)}
            >
                <FaArrowRight/>           
            </div>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="ERASER"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.ERASER)}
            >
                <FaEraser/>           
            </div>
            <div className= {cx(classes.toolItem , {[classes.active]:activeToolItem ==="TEXT"})}
                onClick={()=> changeToolHandler(TOOL_ITEMS.TEXT)}
            >
                <FaFont/>           
            </div>

            <div 
                className= {classes.toolItem }
                onClick={undo}
            >
                <FaUndoAlt/>           
            </div>
            <div 
                className= {classes.toolItem }
                onClick={redo}
            >
                <FaRedoAlt/>           
            </div>
            <div 
                className= {classes.toolItem }
                onClick={handleDownloadClick}
            >
                <FaFileDownload/>           
            </div>
        </div>
    )
 }

 export default Toolbox