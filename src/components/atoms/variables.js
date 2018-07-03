export const colors = {
  black: "#202420",
  dark: "#544343",
  regular: "#626D58",
  light: "#77966D",
  white: "#D8E4D8"
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
