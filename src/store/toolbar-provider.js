import React, { useReducer } from "react";
import toolbarContext from "./toolbar-context";
import {TOOL_ITEMS, COLORS, TOOLBOX_ACTIONS} from "../constants"
function toolbarReducer (state,action){
    switch(action.type){
        case TOOLBOX_ACTIONS.CHANGE_STROKE:{
            const newState = {...state};
            newState[action.payload.tool].stroke = action.payload.stroke;
            return newState;
        }
        case TOOLBOX_ACTIONS.CHANGE_FILL:{
            const newState = {...state};
            newState[action.payload.tool].fill = action.payload.fill;
            return newState;
        }
        case TOOLBOX_ACTIONS.CHANGE_SIZE:{
            const newState = {...state};
            newState[action.payload.tool].size = action.payload.size;
            return newState;
        }
        default:
            return state;
    }
}

const initialToolbarState = {
    [TOOL_ITEMS.BRUSH] : {
        stroke : COLORS.BLACK,
    },
    [TOOL_ITEMS.LINE]: {
        stroke : COLORS.BLACK,
        size: 1
    } ,
    [TOOL_ITEMS.RECTANGLE]:{
        stroke : COLORS.BLACK,
        size:1,
        fill : null
    },
    [TOOL_ITEMS.CIRCLE]:{
        stroke : COLORS.BLACK,
        size:1,
        fill : null
    },
    [TOOL_ITEMS.ARROW]: {
        stroke : COLORS.BLACK,
        size: 1
    },
    [TOOL_ITEMS.TEXT]: {
        stroke : COLORS.BLACK,
        size: 20
    }
}

const ToolbarProvider = ({children}) =>{
    const [toolbarState, dispatchToolbarAction] = useReducer(
        toolbarReducer, 
        initialToolbarState
    );

    const changeStrokeHandler = (tool, stroke) =>{
        dispatchToolbarAction({
            type: TOOLBOX_ACTIONS.CHANGE_STROKE,
            payload: {
                tool,
                stroke,
            }
        })
    }

    const changeFillHandler = (tool, fill) =>{
        dispatchToolbarAction({
            type: TOOLBOX_ACTIONS.CHANGE_FILL,
            payload: {
                tool,
                fill,
            }
        })
    }

    const changeSizeHandler = (tool,size) =>{
        dispatchToolbarAction({
            type: TOOLBOX_ACTIONS.CHANGE_SIZE,
            payload: {
                tool,
                size,
            }
        })
    }

    const toolbarContextValue = {
        toolbarState,
        changeStroke : changeStrokeHandler,
        changeFill : changeFillHandler,
        changeSize : changeSizeHandler,
    }

    return(
        <toolbarContext.Provider value={toolbarContextValue}>{children}</toolbarContext.Provider>
    );
}

export default ToolbarProvider;