import "core-js/stable";
import "regenerator-runtime/runtime";
import dva from 'dva';
// 1. Initialize
const app = dva({});
// app.use();
// 2. Model
// app.model();
// 3. Router
app.router(require('./router').default);
// 4. Start
app.start('#root');