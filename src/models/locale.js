const localeEn = require('../locale/en_US');
const localeCn = require('../locale/zh_CN');

const lang = localStorage.getItem('lang') || 'zh';

const initialize = {
  lang,
  package: lang === 'en' ? localeEn : localeCn,
};

export default {
  namespace: 'localeLanguage',
  state: initialize,
  effects: {
    * changeLanguage({ payload }, { select, call, put }) {
      if (payload === 'en') {
        yield put({ type: 'english' });
      }
      if (payload === 'zh') {
        yield put({ type: 'chinese' });
      }
    },
  },
  reducers: {
    english: (state) => {
      localStorage.setItem('lang', 'en');
      return {
        ...state,
        lang: 'en',
        package: localeEn,
      };
    },
    chinese: (state) => {
      localStorage.setItem('lang', 'zh');
      return {
        ...state,
        lang: 'zh',
        package: localeCn,
      };
    },
  },
};
