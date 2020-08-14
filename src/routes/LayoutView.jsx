import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { connect } from 'dva';
import router from 'dva/router';
import { ConfigProvider, Layout, Menu, Breadcrumb, Button, Icon, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import baidu from '~assets/baidu.png';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
      <Layout className="layout-style">
        <Header className="header">
          <div className="logo">
            <img src={baidu} alt="logo" />
          </div>
          <div className="user-config">
            <Button type="primary" onClick={changeLocal}>
              {localeLanguage.lang === 'en' ? '中文' : 'English'}
            </Button>
          </div>
        </Header>
        <Layout className="layout-sider-content">
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>
              <div>hello react123456789</div>
              <div>{lang.common.no_data}</div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(hot(LayoutView));
