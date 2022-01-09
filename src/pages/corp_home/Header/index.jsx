
import React, { Component } from 'react'
import { View, Image } from '@tarojs/components';
import axios from 'axios';
import crop_home_header from '../img/crop_home_header.png'

export default class CropHomeHeader extends Component {
    state = {
        bannerList: [],
    };
    componentDidMount() {
        axios.get('https://aolsee.yuantutech.com/aolsee-web/adApi/open/findAppAd.json?OSType=iOS&adPositionId=81&corpId=261&invokerAppVersion=3.40.4&invokerChannel=App&invokerDeviceId=212BEC30-2259-47BF-AA78-629A28898204&invokerDeviceType=iPhone%20X&invokerDeviceVersion=15.1&unionId=29')
        .then(
            (response)=>{
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
                        bannerList: banners,
                    });
                }
                console.log(response.data);
            }, 
            (error)=>{

        });
    }
    render() {
        return (
            <View>
                <Image src={crop_home_header} style={{width: '100%'}}></Image>
            </View>
        )
    }
}
