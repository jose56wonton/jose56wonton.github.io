export const colors = {
  black: "#15120F",
  dark: "#002456",
  regular: "#64B9EE",
  light: "#EDCF2E",
  white: "#F6EEE6"
}



const sizes = {
  touch: [0,991.98],
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
