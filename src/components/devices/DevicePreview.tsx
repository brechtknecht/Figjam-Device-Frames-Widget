
import { h } from 'preact';

import SVGInline from "react-svg-inline"

import DeviceData from './devices.json'

export default function DevicePreview (props: {scale : number, border: boolean, fill: boolean, deviceType: string, device: string, locked: boolean}) {    
    return (
        // <AutoLayout 
        //     width = {
        //         resolveDeviceDimensions(props.device, props.border).width * props.scale
        //     } 
        //     height = {
        //         resolveDeviceDimensions(props.device, props.border).height * props.scale
        //     }
        //     stroke="#eaeaea" 
        //     strokeWidth={0}
        //     cornerRadius={resolveCornerRadius(props.device, props.border, props.scale)}
        // >
        <div>
            <SVGInline svg={resolveDevice(props.device, props.border)} />            
        </div>
        
        // <img
        //     src={} 
        //     width="fill-parent" 
        //     height="fill-parent" 
        //     // fill={props.fill ? "#FFF" : {r: 1, g: 1, b: 1, a: 0}}
        // />
        // </AutoLayout>
    )
}

function resolveDevice(device: string, border: boolean) {
    const found = DeviceData.find(element => element.name == device);
    if(border) {
        return found!.deviceSVG
    } else {
        return found!.borderlessSVG
    }
}

function resolveDeviceDimensions(device: string, border: boolean) {
    const found = DeviceData.find(element => element.name == device);

    if(border) {
        return {
            width: found!.deviceWidth,
            height: found!.deviceHeight
        }
    } else {
        return {
            width: found!.borderlessWidth,
            height: found!.borderlessHeight
        }
    }
}

function resolveCornerRadius(device: string, border: boolean, scale: number) {
    const found = DeviceData.find(element => element.name == device);
    if(border) {
        return found!.cornerRadius * scale
    } else {
        return found!.cornerRadiusBorderless  * scale
    }
    
}

function deviceName (device: string): string{
    if(device == "iPhone8") {
        return "iPhone 8"
    }
    return "iPhone 8"
}



