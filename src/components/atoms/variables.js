export const colors = {
  black: "#17252a",
  dark: "#2b7a78",
  regular: "#3aafa9",
  light: "#def2f1",
  white: "#feffff"
}



const sizes = {
  xs: [0,575.98],
  sm: [575,767.98],
  md: [768,991.98],
  lg: [992,1199.98],
  xl: [1200,8000]
}

export const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (args) => `
    @media (min-width: ${sizes[label][0]}px) and (max-width: ${sizes[label][1]}px){
      ${args}
    }
  `
  return acc
}, {})
