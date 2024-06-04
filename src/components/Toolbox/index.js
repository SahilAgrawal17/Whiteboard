import React, { useContext} from "react"
import classes from "./index.module.css"
import cx from "classnames"
import { LuRectangleHorizontal } from "react-icons/lu"
import { FaSlash, FaRegCircle, FaArrowRight, FaPaintBrush, FaEraser } from "react-icons/fa"
import {TOOL_ITEMS} from "../../constants";

import boardContext from "../../store/board-context"


 const Toolbox = () =>{
    const {activeToolItem, changeToolHandler} = useContext(boardContext);
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
        </div>
    )
 }

 export default Toolbox