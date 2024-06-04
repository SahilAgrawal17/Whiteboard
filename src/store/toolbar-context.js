import { createContext } from "react";

const toolbarContext = createContext({
    toolbarState: {},
    changeStroke: () =>{},
    changeFill: () =>{},
    changeSize: () =>{},
});

export default toolbarContext;