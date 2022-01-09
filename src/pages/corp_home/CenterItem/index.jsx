
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import CropFunctionTag from '../Tag'
import './index.css'

export default class CropHomeCenterItem extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
    }

    render() {
        const subitems = this.props.items.map((item)=>{
            return <CropHomeCenterItemSubItem key={item.title} item={item}/>
        });
        return (
            <View className='crop_home_center_item'>
                {subitems}
            </View>
        )
    }
}


class CropHomeCenterItemSubItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }
    render() {
        const {title, subTitle, icon, label} = this.props.item;
        return (
            <View className='crop_home_center_item_subitem'>
                <Image src={icon} alt="hhhhh" style={{width:64, height:64}}/>
                <Text className='crop_home_center_item_subitem_title'>{title}</Text>
                <Text className='crop_home_center_item_subitem_subtitle'>{subTitle}</Text>
                <CropFunctionTag label={label} top={-4}/>    
            </View>
        );
    }
}
