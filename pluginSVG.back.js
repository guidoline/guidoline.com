// https://github.com/vuetter/vite-plugin-vue-svg/blob/e8428e2d6dbfc295f28b0c412dac3ad614cb47f0/src/index.ts#L21
import { compileTemplate } from '@vue/compiler-sfc'
import { createFilter } from '@rollup/pluginutils'
import fs from 'fs'
// import {
//   createVNode as _createVNode,
//   openBlock as _openBlock,
//   createBloc as _createBlock
// } from 'vue'
// import { resolve } from 'path'
// import SVGO from 'svgo'
import * as svgo from 'svgo'
import { basename } from 'path'
import viteConfig from './vite.config'
const optimizeSvg = (content, config, path) => new Promise(async (resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) return console.error(err)
    console.log('SVGOOOOO', data, config, path)
    // const svg = new SVGO()
    // svg.optimize(content, { path }).then((result) => {
    const result = svgo.optimize(data, { path })
    // .then((result) => {
      if (result.error)  return reject(result.error)
      return resolve(result.data)
    // })

  })
})
export default function svgToModule(options = {}) {
  const wrapper = options?.htmlWrapper?.tagName
          ? createWrapper(options.htmlWrapper.tagName)
          : (code) => code;
  // const virtualFieldId = '@pluginSvgToModule'
  const filter = createFilter('**/*.svg')
  const config = {plugins: ['removeDoctype', 'removeComments']}
  return {
    name: 'svgToModule',
    // resolveId(source) {
    //   console.log('LOL', source)
    //   // ?inline, ?raw
    //   var regexp = /\.svg+$/gi
    //   if (source.match(regexp)) {
    //     // const id = resole('node')
    //     console.log('SOURCE : ', source)
    //   }
    //   return null
    // },
    transform(source, id) {
      if (!filter(id)) return null
      console.log('TRANSFORM : ', id, source, config)
      return optimizeSvg(source, config, id).then((result) => {
        let { code } = compileTemplate({
          id: id,
          filename: basename(id),
          transformAssetUrls: false,
          source: source //wrapper(source)
        })
        console.log('COMPILE TEMPLATE : ', code)
        // code = code.replace('export function render', 'function render')
        code = `function render(_ctx, _cache) {
          return '${source}'
        }`
        code += '\nconst VueComponent = { render }'
        code += `
          VueComponent.name = 'icon-${basename(id.replace('.svg', ''))}'
          export default VueComponent
        `
        if (!options.isProduction) {
          code += `
            VueComponent.data = () => ({
              path: '${id}'
            })
          `
        }
        return code
        // const compiled = compiler.compile(result, { preserveWhiteSpace: false })
        // console.log('COMPILED  : ', compiled)
        // const transformed = transpile(`module.exports = { render: function() {
        //   ${compiled.render}
        // }}`).replcae
        // return transformed
        return `
        // import {
        //   createVNode as _createVNode,
        //   openBlock as _openBlock,
        //   createBloc as _createBlock
        // } from 'vue'
        export default function render(ctx, cache) {
          return ctx('div', {domProps:{innerHtml: '${result}'}})
        }`
      })
      // const compiled = compiler.compile()
      return
    }
  }
}
