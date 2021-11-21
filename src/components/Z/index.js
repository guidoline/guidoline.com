import * as components from './Components'
const install = (app) => {
  Object.entries(components.default).forEach(([key, component]) => {
    app.component(key, component)
  })
}

export default install
export * from './Components'
