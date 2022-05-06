/** @jsx figma.widget.h */

const { widget } = figma
const { AutoLayout, SVG, Text } = widget

import DeviceData from './devices.json'

export default function DeviceRenderer (props: {scale : number, border: boolean, fill: boolean, deviceType: string, device: string, locked: boolean}) {    
    return (
        <AutoLayout 
            width = {
                resolveDeviceDimensions(props.device, props.border).width * props.scale
            } 
            height = {
                resolveDeviceDimensions(props.device, props.border).height * props.scale
            } 
            
            stroke="#eaeaea" 
            strokeWidth={0}
            locked={props.isLocked}
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

function deviceName (device: string): string{
    if(device == "iPhone8") {
        return "iPhone 8"
    }
    return "iPhone 8"
}



