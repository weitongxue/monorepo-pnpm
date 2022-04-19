import resolve from 'rollup-plugin-node-resolve';
import clear from 'rollup-plugin-clear';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import paj from './package';

/**
 * 打包文件都格式：amd – 异步模块定义，用于像RequireJS这样的模块加载器
 *              cjs – CommonJS，适用于 Node 和 Browserify/Webpack
 *              esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
 *              iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
 *              umd – 通用模块定义，以amd，cjs 和 iife 为一体
 *
*/
const formats = ['cjs', 'esm'];
const output = formats.map((item) => {
  return {
    file: `dist/build-${item}-index.js`,
    format: item,
    name: paj.name
  };
});

export default {
  input: 'core/index.ts',
  output,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    // 使用 tsconfig.json 中定义 的 declarationDir
    typescript({
      useTsconfigDeclarationDir: true
    }),
    clear([
      {
        targets: ['some directory'],
        watch: true
      }
    ])
  ]
};
