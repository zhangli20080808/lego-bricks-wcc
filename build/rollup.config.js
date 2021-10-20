import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
const overrides = {
  // 生成.d.ts文件
  compilerOptions: { declaration: true }, 
  // 排除文件
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
}
export { name, file }
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' })
  ],
  // 排除的打包选项
  external: ['vue', 'lodash-es']
}