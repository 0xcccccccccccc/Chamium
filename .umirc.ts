import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/links', component: '../pages/links/index'},
        { path: '/login', component: '../pages/login/index'},
        { path: '/main', component: '../pages/main/index'},
        { path: '/spider', component: '../pages/spider/index'},
        { path: '/color', component: '../pages/color/index'},
        { path: '/colorbar', component: '../pages/colorbar/index'},

      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'web',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
