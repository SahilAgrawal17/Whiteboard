import React, { useContext } from "react";
import classes from "./index.module.css"
import {COLORS, FILL_TOOL_TYPES, SIZE_TOOL_TYPES, STROKE_TOOL_TYPES, TOOL_ITEMS} from "../../constants"
import cx from "classnames"
import toolbarContext from "../../store/toolbar-context";
import boardContext from "../../store/board-context";

const Toolbar = () =>{
    const {activeToolItem} = useContext(boardContext )
    const {toolbarState, changeStroke, changeFill, changeSize} = useContext(toolbarContext)

    const strokeColor = toolbarState[activeToolItem]?.stroke
    const fillColor = toolbarState[activeToolItem]?.fill;
    const size = toolbarState[activeToolItem]?.size;

    return (
    <div className= {classes.container} style={{ userSelect: "none" }}>
        {STROKE_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
            <div className={classes.toolbarLabel}>STROKE COLOR</div>
            <div className={classes.colorsContainer}>
                <div>
                    <input
                        className = {classes.colorPicker}
                        type = "color"
                        value = {
                            strokeColor
                        }
                        onChange={(e) => changeStroke(activeToolItem, e.target.value)}
                    ></input>
                </div>
                {Object.keys(COLORS).map((c)=>{
                    return (
                    <div 
                        key={c}
                        className= {cx(classes.colorBox,{ [classes.activeColorBox]: strokeColor === COLORS[c]})}
                        style={{backgroundColor: COLORS[c]}}
                        onClick={()=> changeStroke(activeToolItem, COLORS[c])}
                    ></div>
                    )
                })}
            </div>
        </div> )}
        {FILL_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
            <div className={classes.toolbarLabel}>FILL COLOR</div>
            <div className={classes.colorsContainer}>
            {fillColor === null ? (
                <div
                    className = {cx(classes.colorPicker, classes.noFillColorBox)}
                    onClick = {()=> changeFill(activeToolItem, COLORS.BLACK)}
                ></div>) :(
                <div>
                    <input
                        className = {classes.colorPicker}
                        type = "color"
                        value = {
                            fillColor
                        }
                        onChange={(e) => changeFill(activeToolItem, e.target.value)}
                    ></input>
                </div>
            )}
            <div
                className= {cx(classes.colorBox, classes.noFillColorBox,
                    {[classes.activeColorBox] : fillColor === null})}
                    onClick={()=> changeFill(activeToolItem, null)} 
            ></div>
                {Object.keys(COLORS).map((c)=>{
                    return (
                    <div 
                        key={c}
                        className= {cx(classes.colorBox,{ [classes.activeColorBox]: fillColor === COLORS[c]})}
                        style={{backgroundColor: COLORS[c]}}
                        onClick={()=> changeFill(activeToolItem, COLORS[c])}
                    ></div>
                    )
                })}
            </div>
        </div>)}
        {SIZE_TOOL_TYPES.includes(activeToolItem) && (<div className={classes.selectOptionContainer}>
            <label className={classes.toolbarLabel}>
                {activeToolItem === TOOL_ITEMS.TEXT ? "Font Size" : "Brush Size"}
            </label>
            <input
                type="range"
                min = {activeToolItem === TOOL_ITEMS.TEXT ? 16 : 1}
                max = {activeToolItem === TOOL_ITEMS.TEXT ? 96 : 10}
                step={1}
                value={size}
                onChange={(event) => changeSize(activeToolItem ,event.target.value)}
            ></input>
        </div>)}
    </div>
    )
}

export default Toolbar;