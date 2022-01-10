import React, { Component } from 'react'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'
import ic_corpHome_arrow from '../img/ic_corpHome_arrow.png'
import axios from 'axios'
import './index.css'
import ic_corpHome_notice from '../img/ic_corpHome_notice.png'

export default class CropHomeNotice extends Component {
    state = {
        noticeList: ['新冠病毒疫情防控须知新冠病毒疫新冠病毒疫情防控须知新冠病毒疫', '新冠病毒疫情防控须知新冠病毒疫', '新冠病毒疫情防控须知新冠病毒疫']
    }
    // componentDidMount() {
    //     axios.get('').then((response)=>{

    //     });
    // }
    render() {
        if (this.state.noticeList.length <= 0) {
            return null
        }
        const items = this.state.noticeList.map((item)=>{
            return <SwiperItem className='crop_home_notice-swiper-item'>
                <View className='crop_home_notice-item'>
                    <Text className='crop_home_notice-item_title'>{item}</Text>
                    <Text className='crop_home_notice-item_subtitle'>{item}</Text>
                </View>
                <Image className='crop_home_notice-item-arrow' src={ic_corpHome_arrow}/>
            </SwiperItem>
        });
        return (
            <View className='crop_home_notice'>
                <Image className='crop_home_notice_logo' src={ic_corpHome_notice} alt="" />
                <View className='crop_home_notice_line'></View>
                <Swiper autoplay circular vertical className='crop_home_notice-swiper'>
                    {items}
                </Swiper>
            </View>
        )
    }
}
