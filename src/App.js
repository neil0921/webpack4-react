import {hot} from 'react-hot-loader/root'
import React, {useState, useEffect} from 'react';
import {Button} from 'antd';
import logo from '~assets/logo.png';

function App() {
  const [flag, setFlage] = useState(true);

  return (
    <div className={flag ? 'title-red' : 'title-green'}>
      hello react123456
      <Button type='primary' onClick={() => setFlage(!flag)}>点我</Button>
      <img src={logo} alt=""/>
    </div>
  )
}

export default hot(App);
