/*
 * @Author: qianhua.xiong
 */
import { createApp } from 'vue';
import i18n from '../../i18n/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './index.css';
import App from '../../App.vue';
const app = createApp(App);
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');