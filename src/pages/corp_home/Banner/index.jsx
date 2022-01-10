import React, { Component } from 'react'
import { Swiper, SwiperItem } from "@tarojs/components";
import { View, Image } from '@tarojs/components';
import axios from 'axios'
import './index.less'

export default class CropHomeBanner extends Component {
    state = {bannerList: [], current: 0};
    componentDidMount() {
        axios.get('https://aolsee.yuantutech.com/aolsee-web/adApi/open/findAppAd.json?OSType=iOS&adPositionId=62&corpId=261&invokerAppVersion=3.40.4&invokerChannel=App&invokerDeviceId=212BEC30-2259-47BF-AA78-629A28898204&invokerDeviceType=iPhone%20X&invokerDeviceVersion=15.1&unionId=29').then((response)=>{
            if (response.data.data !== null) {
                const adList = response.data.data.adList;
                let banners = []
                adList.forEach(element => {
                    const contentList = element.contentList;
                    if (contentList.length >= 1) {
                        const bannerItem = contentList[0];
                        banners.push(bannerItem);
                    }
                });
                this.setState({
                    bannerList: ['https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/d06a359df3e7a80a64492db23aa603f4.png', 'https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/d06a359df3e7a80a64492db23aa603f4.png'],
                });
            }
        });
    }
    onChangeEventDeatil = (e) => {
        this.setState({
            current: e.detail.current,
        });
    };
    
    render() {
        if (this.state.bannerList.length == 0) {
            return null;
        }
        const swiperItems = this.state.bannerList.map((item)=>{
            return <SwiperItem className='crop-home-banner-item'>
                <Image className='crop-home-banner-img' src={item}/>
            </SwiperItem>
        });
        
        return (
            <View className='crop-home-banner'>
                <Swiper
                    circular
                    autoplay
                    interval={3000}
                    onChange={this.onChangeEventDeatil}
                >
                    {swiperItems}
                </Swiper>
                <View className='spot-pagination'>
                    {this.state.bannerList.map((item, index) => (
                        <View key={item} className={'spot-pagination-bullet ' + ((this.state.current === index) ? 'spot-pagination-bullet-active' : '')}></View>
                    ))}
                </View>
            </View>
        )
    }
}

      // <Swiper className='crop_home_banner'
            //         // centeredSlides={true}
            //         // autoplay={{
            //         //     delay: 3000,
            //         //     disableOnInteraction: false,
            //         // }}
            //         // pagination={{
            //         //     clickable: false,
            //         //     // renderBullet:(index, className)=>{
            //         //     //     return '<span class="crop-banner-pagination">' + '</span>';
            //         //     // },
            //         // }}
            //         circular
            //     >
            //         <SwiperItem><Image src="https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/bc3b88900152bc633b9e6b8f3259f94c.gif"/></SwiperItem>
            //         <SwiperItem><Image src="https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/d06a359df3e7a80a64492db23aa603f4.png" alt="" /></SwiperItem>
            // </Swiper>