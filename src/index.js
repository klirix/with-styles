import React from "react";

const callIfFun = (fun, arg) => !!(fun && fun.constructor && fun.call && fun.apply)?fun(arg):fun

const withStyles = Comp => styles => ({style, ...props}) => {
    styles = Object.entries(callIfFun(styles || {}, props))                  
        .map(([k, val])=> [k, callIfFun(val, props)])
        .reduce((acc, [k, v])=>({...acc, [k]: v}), {})
    return (
        <Comp style={{...styles, ...style}} {...props}/>
    )
}

export default withStyles

export const styleHoc = (styles) => (Comp) => withStyles(Comp)(styles)