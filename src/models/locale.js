let message_en = require('../locale/en_US');
let message_cn = require('../locale/zh_CN');
const lang = localStorage.getItem('lang') || 'zh';

let initialize = {
  lang,
  package: lang === 'en' ? message_en : message_cn,
};

export default {
  namespace: 'localeLanguage',
  state: initialize,
  effects: {
    *changeLanguage({payload}, {select, call, put}){
      if(payload==='en'){
        yield put({type:'english'});
      }
      if(payload==='zh'){
        yield put({type:'chinese'});
      }
    },
  },
  reducers: {
    english: (state) => {
      localStorage.setItem('lang', 'en');
      return {
        ...state,
        lang: 'en',
        package: message_en
      }
    },
    chinese: (state) => {
      localStorage.setItem('lang', 'zh');
      return {
        ...state,
        lang: 'zh',
        package: message_cn,
      }
    }
  }
};
