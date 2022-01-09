
import React from 'react'
import { Image } from '@tarojs/components'
import ic_function_comeSoon_tag from '../img/ic_function_comeSoon_tag.png'
import ic_function_hot_tag from '../img/ic_function_hot_tag.png'
import ic_function_new_tag from '../img/ic_function_new_tag.png'
import ic_function_recommend_tag from '../img/ic_function_recommend_tag.png'
import ic_function_unused_tag from '../img/ic_function_unused_tag.png'
import './index.css'

export default function CropFunctionImgTag(props) {
    const {label} = props;
    if (label == 0) {
        return null
    }

    let content = ic_function_unused_tag;
    if (label == 1) {
        content = ic_function_new_tag;
    } else if (label == 2) {
        content = ic_function_comeSoon_tag;
    } else if (label == 3) {
        content = ic_function_hot_tag;
    } else if (label == 4) {
        content = ic_function_recommend_tag;
    }
    
    return (
        <Image src={content} className='crop_item_img_tag' />
    )
}
