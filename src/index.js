import 'core-js/stable';
import 'regenerator-runtime/runtime';
import dva from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory as createHistory } from 'history';
import './index.less';
// 1. Initialize
const app = dva({ history: createHistory() });
// app.use();
// 2. Plugins
app.use(createLoading());
// 3. Model
app.model(require('./models/locale').default);
// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');
