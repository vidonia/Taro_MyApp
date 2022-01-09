import { Component } from 'react'
import { View, } from '@tarojs/components'
import CropHome from '../corp_home'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <CropHome />
      </View>
    )
  }
}
