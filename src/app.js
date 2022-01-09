import { Component } from 'react'
import './app.less'
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import Taro from '@tarojs/taro'
import {View, Button} from '@tarojs/components';
axios.defaults.adapter = mpAdapter

class App extends Component {

  componentDidMount () {
  }
  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
