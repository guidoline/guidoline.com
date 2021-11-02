import { basename } from 'path';
import { readFileSync } from 'fs';
import { compileTemplate } from '@vue/compiler-sfc';
import { optimize } from 'svgo';
import { OptimizeOptions } from 'svgo';
import { ResolvedConfig, Plugin } from 'vite';

const fileRegex = /\.(svg\?inline)$/;

// declare type PluginOptions = {
//     svgo?: OptimizeOptions | boolean
//     htmlWrapper?: {
//         tagName?: string
//         attrs?: { [key: string]: string; }
//     }
// }

export default function (options = {}) {
    let viteConfig;

    const createWrapper = (tagName) => {
        const attrs = options?.htmlWrapper?.attrs ?? {};

        let stringifiedAttrs = '';

        for (const key in attrs) {
            stringifiedAttrs += ` ${key}=${attrs[key]}`;
        }

        return (code) => `<${tagName} ${stringifiedAttrs}>${code}</${tagName}>`;
    };

    const wrapper = options?.htmlWrapper?.tagName
        ? createWrapper(options.htmlWrapper.tagName)
        : (code) => code;

    async function compileSvg(source, path) {
        let { code } = compileTemplate({
            id: path,
            filename: basename(path),
            transformAssetUrls: false,
            source: wrapper(source),
        });


        code = code.replace('export function render', 'function render');
        code += '\nconst VueComponent = { render };';
        code += `
        VueComponent.name = "icon-${basename(path.replace('.svg', ''))}";
        export default VueComponent;
        `;

        if (!viteConfig.isProduction) {
          code += `
          VueComponent.data = () => ({
            path: "${path}",
          });
          `;
        }

        console.log('CODE : ', code)
        return code;
    }

    async function compileFileToJS(src) {
      let contents = readFileSync(src).toString();

      if (options.svgo !== false) {
        contents = optimize(contents).data;
      }

      console.log('COMPILE TO JS : ', src, contents)
        return await compileSvg(contents, src);
    }

    return {
        name: 'svg-transform',
        async configResolved(config) {
            viteConfig = config;
        },
        async transform(src, id) {
          if (fileRegex.test(id)) {
              console.log('T : ', id)
              // return await compileFileToJS(id.replace('?inline', ''));
              const r = await compileFileToJS(id.replace('?inline', ''));
              return r

            }
        },
    };
};
