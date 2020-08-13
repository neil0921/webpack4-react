import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { connect } from 'dva';
import { ConfigProvider, Button } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import logo from '~assets/logo.png';

const mapStateToProps = (state) => ({
  localeLanguage: state.localeLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

function LayoutView({ dispatch, localeLanguage }) {
  const [flag, setFlage] = useState(true);

  const changeLocal = () => {
    setFlage(!flag);
    dispatch({
      type: 'localeLanguage/changeLanguage',
      payload: localeLanguage.lang === 'en' ? 'zh' : 'en',
    });
  };

  const locale = localeLanguage.lang === 'en' ? enUS : zhCN;
  const lang = localeLanguage.package;

  return (
    <ConfigProvider locale={locale}>
      <div className={flag ? 'title-red' : 'title-green'}>
        <div>hello react123456789</div>
        <div>{lang.common.no_data}</div>
        <Button type="primary" onClick={changeLocal}>
          {localeLanguage.lang === 'en' ? '中文' : 'English'}
        </Button>
        <img src={logo} alt="" />
      </div>
    </ConfigProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(hot(LayoutView));
