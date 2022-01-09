import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import axios from 'axios'
import './index.css'
import ic_corpHome_notice from '../img/ic_corpHome_notice.png'

export default class CropHomeNotice extends Component {
    state = {
        noticeList: ["hhh"]
    }
    // componentDidMount() {
    //     axios.get('').then((response)=>{

    //     });
    // }
    render() {
        
        if (this.state.noticeList.length <= 0) {
            return null
        }

        return (
            <View className='crop_home_notice'>
                <Image className='crop_home_notice_logo' src={ic_corpHome_notice} alt="" />
                <View className='crop_home_notice_line'></View>
            </View>
        )
    }
}
