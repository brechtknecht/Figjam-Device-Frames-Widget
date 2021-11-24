/** @jsx figma.widget.h */

const { widget } = figma
const { AutoLayout, SVG, Text } = widget

import DeviceData from './devices.json'

const deviceWidth = 179
const deviceHeight = 361

const borderlessWidth = 159
const borderlessHeight = 281

export default function DeviceRenderer (props: {scale : number, border: boolean, fill: boolean, deviceType: string, device: string}) {    
    return (
        <AutoLayout 
            width = {
                (props.border ? deviceWidth : borderlessWidth) * props.scale
            } 
            height = {
                (props.border ? deviceHeight : borderlessHeight) * props.scale
            } 
            stroke="#eaeaea" 
            strokeWidth={0}
        >
            <SVG 
                src={resolveDevice(props.device, props.border)} 
                width="fill-parent" 
                height="fill-parent" 
                fill={props.fill ? "#FFF" : {r: 1, g: 1, b: 1, a: 0}}
            />
        </AutoLayout>
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

function deviceName (device: string): string{
    if(device == "iPhone8") {
        return "iPhone 8"
    }
    return "iPhone 8"
}



