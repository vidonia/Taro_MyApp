import { View, ScrollView } from '@tarojs/components';
import React, { Component } from 'react'
import CropHomeHeader from './Header'
import CropHomeNotice from './Notice'
import CropHomeCenterItem from './CenterItem'
import CropHomeBanner from './Banner'
import CropHomeMoreItem from './MoreItem'
import CropHomeBottomItem from './BottomItem'
import './index.css'
import axios from 'axios'

export default class CropHome extends Component {
    render() {
        return (
            <ScrollView className='crop-home'
                scrollY
                scrollWithAnimation
            >
                <CropHomeHeader />
                <CropHomeBody />
            </ScrollView>
        )
    }
}


class CropHomeBody extends Component {

    state = {
        functions: Array(0),
    };

    componentDidMount() {
        axios.get("https://api.yuantutech.com/user-web/restapi/common/corp/corpHomeNew?OSType=iOS&channelCode=1&corpId=261&indexChannel=1&invokerAppVersion=3.40.4&invokerChannel=App&invokerDeviceId=212BEC30-2259-47BF-AA78-629A28898204&invokerDeviceType=iPhone%20X&invokerDeviceVersion=15.1&unionId=29").then((response)=>{
            if (response.status == 200) {
                const data = response.data.data;
                this.handleFunctionsData(data);
            }
        });
    }
    handleFunctionsData = (data) => {
        
        if (data.functions.length == 0) {
            return;
        }
        
        const functions = data.functions.filter(element => (element.windowsTypeLevel !== 2 && element.list.length > 0));
        this.setState({
            functions: functions,
        });
    }

    render() {
        let hasCenterItem = false;
        let functionItems = this.state.functions.map((item)=>{
            const list = item.list;
            if (item.windowsTypeStyle === 2) {
                hasCenterItem = true;
                return <CropHomeCenterItem key={item.typeName} items={list}/>
            }
            if (item.windowsTypeStyle === 3) {
                return <CropHomeBottomItem key={item.typeName} items={list} typeName={item.typeName}/>
            }
            return <CropHomeMoreItem key={item.typeName} items={list} typeName={item.typeName}/>
        });
        
        if (hasCenterItem === true && functionItems.length > 2) {
            functionItems.splice(1, 0, <CropHomeBanner key={'banner'}/>);
        } else {
            functionItems.splice(0, 0, <CropHomeBanner key={'banner'} />);
        }

        return (
            <View className='crop_home_body'>
                <CropHomeNotice />
                {functionItems}
            </View>
        );
    }
}
