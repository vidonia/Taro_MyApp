import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from '@tarojs/components'
import CropFunctionTag from '../Tag'
import './index.css'

export default class CropHomeMoreItem extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    }
    render() {
        const subitems = this.props.items.map((value)=>{
            return <CropHomeMoreItemSubitem key={value.title} item={value}/>
        });
        return (
            <View className='crop_home_more_item'>
                <Text className='crop_home_item_title'>{this.props.typeName}</Text>
                <View className='crop_home_item_body'>{subitems}</View>
            </View>
        )
    }
}

class CropHomeMoreItemSubitem extends Component {
    render() {
        let {title, icon, label} = this.props.item;
        const length = title.length;
        return (
            <View className='crop_home_more_item_subitem' style={{marginBottom:length<=5?20:15}}>
                <Image src={icon} alt="" style={{width:28, height:28, marginBottom:4}}/>
                <View className='crop_home_more_item_subitem_title' style={{width:length<=5?'auto':60}}>{title}</View>
                <CropFunctionTag label={label} top={-8}/>
            </View>
        )
    }
}
