import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from '@tarojs/components'
import CropFunctionImgTag from '../Tag/CropFunctionImgTag'
import './index.css'

export default class CropHomeBottomItem extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    }
    render() {
        const subitems = this.props.items.map((value)=>{
            return <CropHomeBottomItemSubitem key={value.title} item={value}/>
        });
        return (
            <View className='crop_home_bottom_item'>
                <Text className='crop_home_item_title'>{this.props.typeName}</Text>
                <View className='crop_home_bottom_item_content'>{subitems}</View>
            </View>
        )
    }
}


class CropHomeBottomItemSubitem extends Component {
    render() {
        const {title, icon, subTitle,label} = this.props.item;
        return (
            <View className='crop_home_bottom_item_subitem'>
                <View style={{marginLeft: 10, textOverflow: 'ellipsis'}}>
                <Text style={{fontSize: 16, color: '#323438', }}>{title}</Text>
                <Text style={{fontSize: 12, color: '#A1A7B3', marginTop: 4, display: 'flex', flexDirection: 'column'}}>{subTitle}</Text>
                </View>
                <Image src={icon} alt="" style={{width:50, height:50, marginRight:9, marginLeft: 'auto'}}/>
                <CropFunctionImgTag label={label}/>
            </View>
        )
    }
}

