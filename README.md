## withStyles

A super-simple CSS-in-JS functional replacement for styled components. It could be used with the whole style as a function, consuming props, and also, every individual style can consume props. 

Additionaly, it comes with a HOF to create composable components for compose-freaks.

And it's implemented in less lines than this little example.
```js 

const stylize = styleHoc({ color: ({loading}) => loading? "white" : "black" })

const Loadable = compose(
    connect(s=>({loading: s.loading})),
    stylize
)(Text)

const sizes = { 
    1: 26, 
    2: 20, 
    3: 18
}

const Header = withStyles(Text)({
    fontSize: ({level}) => sizes[level],
    fontWeight: "500",
    color: "#1A1A1A",
    // padding: 15,
})

const Wrapper = withStyles(View)((props) => ({
    padding: props.active ? 20 : 10,
    backgroundColor: props.color
})
```