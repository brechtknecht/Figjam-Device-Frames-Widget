
import { h } from 'preact';

import SVGInline from "react-svg-inline"

import DeviceData from './devices.json'
import '../../style/DevicePreview.css'

export default function DevicePreview (props: {scale : number, border: boolean, fill: boolean, deviceType: string, device: string, locked: boolean}) {    
    return (
        <div className="tastytest" style="max-height: 200px; display: flex; margin: 0.75rem 0 0.5rem 0;">
            <SVGInline 
                svg={resolveDevice(props.device, props.border)} 
                height="200" 
                width="215" 
                fill={props.fill ? "#F5F5F6" : "#FFF"}
                accessibilityLabel='Device Preview'/>
        </div>
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

function resolveBackgroundEnabled(fill :string) {
    if (fill == "noBackground") {
      return false;
    } else {
      return true;
    }
  }


