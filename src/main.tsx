/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout, Text, useSyncedState, usePropertyMenu } = widget

import DeviceRenderer from './components/devices/DeviceRenderer'

export default function () {
  widget.register(DeviceFrames)
}

function DeviceFrames () {
  const [type, setType] = useSyncedState("type", "Card Type")

  const [title, setTitle] = useSyncedState("title", "Title")

  const [scale, setScale] = useSyncedState("scale", 1)
  const MAX_SCALE_UPPER = 3
  const MAX_SCALE_LOWER = 0.5

  const [deviceType, setDeviceType] = useSyncedState("deviceType", "Mobile")

  const [backgroundEnabled, setBackgroundEnabled] = useSyncedState("backgroundEnabled", "background")

  const [deviceBorderEnabled, setDeviceBorderEnabled] = useSyncedState("deviceBorderEnabled","Border")

  const [device, setCurrentDevice] = useSyncedState("device", "iPhone 8")

  const items: Array<WidgetPropertyMenuItem> = [
    {
      itemType: 'action',
      propertyName: 'setMobile',
      tooltip: 'Mobile',
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6074 4.80612C13.7616 4.91395 13.9519 4.92501 14.1373 4.92501H16.7848C17.0003 4.92348 17.2303 4.88983 17.3798 4.72856C17.461 4.64099 17.5088 4.53044 17.534 4.41673C17.5495 4.34674 17.546 4.26277 17.598 4.2057C17.6349 4.1653 17.6856 4.15989 17.7382 4.15989H18.1994H19.5535C19.6472 4.15989 19.7396 4.16135 19.8321 4.17886C20.0888 4.22752 20.3214 4.37039 20.4749 4.57406C20.604 4.7454 20.6725 4.95248 20.6734 5.16369C20.6735 5.20199 20.6734 5.24029 20.6734 5.27859V5.56324V6.00591V6.58684V7.29337V8.11569V9.02984V10.0254V11.0937V12.2082V13.3631V14.5406V15.7225V16.9039V18.0569V19.1733V20.2443V21.2432V22.1637V22.9883V23.7001V24.2899V24.7363V25.0282C20.6734 25.0692 20.6735 25.1102 20.6734 25.1512C20.6727 25.3508 20.6121 25.5472 20.4959 25.7131C20.3488 25.9234 20.1195 26.0746 19.8624 26.131C19.7506 26.1556 19.6388 26.1562 19.5252 26.1562H19.0273H18.1996H17.1467H15.9596H14.7263H13.5557H12.5359H11.7581H11.3264C11.1838 26.1562 11.0448 26.1427 10.9096 26.0952C10.6604 26.0077 10.4518 25.8284 10.3338 25.6001C10.26 25.4576 10.2249 25.3015 10.2247 25.1428V24.9892V24.6693V24.1975V23.5847V22.8526V22.0103V21.0746V20.0632V18.9821V17.8582V16.7004V15.5167V14.3351V13.1604V12.0109V10.9045V9.84672V8.86431V7.96584V7.16189V6.47616V5.91861V5.50205V5.2459C10.2247 5.20867 10.224 5.17136 10.2251 5.13416C10.2322 4.88867 10.3353 4.65006 10.5114 4.47194C10.6884 4.29286 10.9328 4.18135 11.1891 4.16271C11.29 4.15537 11.3925 4.15982 11.4934 4.15982H12.9022C13.0017 4.15982 13.1059 4.15102 13.2051 4.16082C13.2656 4.16683 13.3095 4.20311 13.3312 4.25692C13.3469 4.29589 13.3491 4.33761 13.3564 4.3784C13.3659 4.43162 13.3798 4.48423 13.3994 4.53486C13.4411 4.64222 13.5104 4.73832 13.6074 4.80612Z" stroke="#F7F7F7" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      itemType: 'action',
      propertyName: 'setTablet',
      tooltip: 'Tablet',
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.72529 8.13047C4.72585 8.03467 4.81581 8.00008 4.90439 8.00008C4.98737 8.00008 5.07029 8.00008 5.15327 8.00008C5.30864 8.00008 5.46396 8.00008 5.61933 8.00008C5.83975 8.00008 6.06021 8.00008 6.28063 8.00008C6.55884 8.00008 6.83711 8.00008 7.11533 8.00008C7.44405 8.00008 7.77282 8.00008 8.10155 8.00008C8.47348 8.00008 8.84541 8.00008 9.21734 8.00008C9.62519 8.00008 10.033 8.00008 10.4409 8.00008C10.8773 8.00008 11.3138 8.00008 11.7503 8.00008C12.2081 8.00008 12.6658 8.00008 13.1236 8.00008C13.5954 8.00008 14.0672 8.00008 14.539 8.00008C15.0175 8.00008 15.496 8.00008 15.9745 8.00008C16.4524 8.00008 16.9304 8.00008 17.4083 8.00008C17.8784 8.00008 18.3485 8.00008 18.8185 8.00008C19.2734 8.00008 19.7283 8.00008 20.1832 8.00008C20.6157 8.00008 21.0482 8.00008 21.4806 8.00008C21.8833 8.00008 22.2859 8.00008 22.6886 8.00008C23.0542 8.00008 23.4199 8.00008 23.7855 8.00008C24.1068 8.00008 24.4281 8.00008 24.7494 8.00008C25.019 8.00008 25.2887 8.00008 25.5583 8.00008C25.769 8.00008 25.9797 8.00008 26.1904 8.00008C26.3348 8.00008 26.4793 8.00008 26.6237 8.00008C26.6946 8.00008 26.7656 7.9999 26.8365 8.00008C26.9251 8.00032 26.9948 8.04885 26.9977 8.13422C26.9999 8.19867 26.9977 8.26348 26.9977 8.32793C26.9977 8.48089 26.9977 8.63385 26.9977 8.78681C26.9977 9.01628 26.9977 9.24575 26.9977 9.47521C26.9977 9.76921 26.9977 10.0632 26.9977 10.3573C26.9977 10.7039 26.9977 11.0505 26.9977 11.3971C26.9977 11.7844 26.9977 12.1716 26.9977 12.5589C26.9977 12.9748 26.9977 13.3907 26.9977 13.8067C26.9977 14.2394 26.9977 14.672 26.9977 15.1047C26.9977 15.5422 26.9977 15.9796 26.9977 16.4171C26.9977 16.8474 26.9977 17.2776 26.9977 17.7079C26.9977 18.1191 26.9977 18.5302 26.9977 18.9414C26.9977 19.3215 26.9977 19.7016 26.9977 20.0816C26.9977 20.4187 26.9977 20.7557 26.9977 21.0928C26.9977 21.3749 26.9977 21.6569 26.9977 21.939C26.9977 22.1541 26.9977 22.3692 26.9977 22.5843C26.9977 22.7205 26.9977 22.8568 26.9977 22.993C26.9977 23.0428 27.0036 23.096 26.9965 23.1456C26.9838 23.2364 26.8972 23.2598 26.8131 23.2598C26.7272 23.2598 26.6413 23.2598 26.5553 23.2598C26.3973 23.2598 26.2392 23.2598 26.0812 23.2598C25.8584 23.2598 25.6355 23.2598 25.4126 23.2598C25.1323 23.2598 24.8519 23.2598 24.5716 23.2598C24.241 23.2598 23.9104 23.2598 23.5799 23.2598C23.2064 23.2598 22.8329 23.2598 22.4594 23.2598C22.0503 23.2598 21.6412 23.2598 21.232 23.2598C20.7946 23.2598 20.3572 23.2598 19.9197 23.2598C19.4613 23.2598 19.0028 23.2598 18.5444 23.2598C18.0722 23.2598 17.6 23.2598 17.1278 23.2598C16.6491 23.2598 16.1706 23.2598 15.6919 23.2598C15.2141 23.2598 14.7364 23.2598 14.2586 23.2598C13.789 23.2598 13.3194 23.2598 12.8497 23.2598C12.3956 23.2598 11.9414 23.2598 11.4873 23.2598C11.0558 23.2598 10.6245 23.2598 10.193 23.2598C9.79166 23.2598 9.39028 23.2598 8.98891 23.2598C8.62489 23.2598 8.26087 23.2598 7.8968 23.2598C7.57743 23.2598 7.25801 23.2598 6.93864 23.2598C6.67116 23.2598 6.40373 23.2598 6.13625 23.2598C5.92801 23.2598 5.71977 23.2598 5.51159 23.2598C5.36988 23.2598 5.22818 23.2598 5.08648 23.2598C5.01861 23.2598 4.95068 23.2603 4.88281 23.2598C4.79377 23.2591 4.72749 23.2075 4.72518 23.1235C4.72333 23.0557 4.72518 22.9877 4.72518 22.9199C4.72518 22.764 4.72518 22.6081 4.72518 22.4522C4.72518 22.2202 4.72518 21.9882 4.72518 21.7563C4.72518 21.4602 4.72518 21.1641 4.72518 20.868C4.72518 20.5197 4.72518 20.1715 4.72518 19.8232C4.72518 19.4347 4.72518 19.0463 4.72518 18.6578C4.72518 18.241 4.72518 17.8243 4.72518 17.4076C4.72518 16.9745 4.72518 16.5415 4.72518 16.1084C4.72518 15.6694 4.72518 15.2305 4.72518 14.7915C4.72518 14.3618 4.72518 13.932 4.72518 13.5023C4.72518 13.0921 4.72518 12.6819 4.72518 12.2718C4.72518 11.8931 4.72518 11.5145 4.72518 11.1359C4.72518 10.8008 4.72518 10.4657 4.72518 10.1306C4.72518 9.85093 4.72518 9.57124 4.72518 9.2916C4.72518 9.07936 4.72518 8.86712 4.72518 8.65488C4.72518 8.522 4.72518 8.38913 4.72518 8.25621C4.72529 8.2142 4.72529 8.17233 4.72529 8.13047Z" stroke="#F6F6F6" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><line x1="11.5" y1="20.5" x2="20.5" y2="20.5" stroke="#F6F6F6" stroke-linecap="round"/></svg>'
    },
    {
      itemType: 'action',
      propertyName: 'setDesktop',
      tooltip: 'Desktop',
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.59628" y="7.87225" width="24.4037" height="15.2555" rx="1" stroke="#F6F6F6" stroke-width="1.25"/><path d="M17.5493 19.241L16.2502 15.8491L16.0806 16.1806L17.8776 16.2938C17.957 16.2992 18.0208 16.2763 18.0689 16.2251C18.117 16.1739 18.1423 16.1105 18.1447 16.0351C18.1471 15.9596 18.1194 15.8882 18.0617 15.8208L14.4893 11.7295C14.4363 11.6676 14.3774 11.6366 14.3124 11.6366C14.2499 11.6339 14.1958 11.6568 14.1501 11.7053C14.1067 11.7538 14.0839 11.8198 14.0815 11.9034L14.0238 17.5956C14.0213 17.6899 14.0454 17.7627 14.0959 17.8139C14.1464 17.8651 14.2066 17.8907 14.2763 17.8907C14.3461 17.888 14.4075 17.8516 14.4604 17.7816L15.6187 16.3423L15.2831 16.2453L16.5389 19.714C16.5629 19.7814 16.6026 19.8285 16.658 19.8555C16.7133 19.8851 16.7686 19.8865 16.8239 19.8595L17.4482 19.5725C17.506 19.5482 17.5432 19.5038 17.5601 19.4391C17.5793 19.3744 17.5757 19.3084 17.5493 19.241Z" fill="#F6F6F6"/></svg>'
    },
    {
      tooltip: "Properties",
      propertyName: "edit",
      itemType: "action"
    },{
      itemType: 'action',
      propertyName: 'scaleUp',
      tooltip: 'Make it Bigger ↑',
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 15.5V10.5H16.5V15.5H21.5V16.5H16.5V21.5H15.5V16.5H10.5V15.5H15.5Z" fill="white" fill-opacity="0.8"/></svg>'
    },
    {
      itemType: 'action',
      propertyName: 'scaleDown',
      tooltip: 'Make it Smaller ↓',
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 16.5H10.5V15.5H21.5V16.5Z" fill="white" fill-opacity="0.8"/></svg>'
    },
  ]

  function resolveBorderEnabled (border : string): boolean {
    if(border == 'noBorder') { return false } else {return true}
  }

  function resolveBackgroundEnabled (fill: string): boolean {
    if(fill == 'noBackground') { return false } else {return true}
  }

  async function onChange ({
    propertyName
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === 'edit') {
        showUI({ width: 240, height: 300 }, { type, title, deviceType, device, backgroundEnabled, deviceBorderEnabled })

        once('UPDATE_TYPE', function (type: string): void {
          setType(type); resolve();
        })

        once('UPDATE_TITLE', function (title: string): void {
          setTitle(title); resolve();
        })

        once('UPDATE_DEVICETYPE', function (value: string): void {
          console.log("NEW DEVICE TYPE: ", value)
          setDeviceType(value); resolve();
        })

        once('UPDATE_BACKGROUND_ENABLED', function (value: string): void {
          setBackgroundEnabled(value); resolve();
        })

        once('UPDATE_DEVICEBORDER_ENABLED', function (value: string): void {
          setDeviceBorderEnabled(value); resolve();
        })

        once('UPDATE_DEVICE', function (value: string): void {
          setCurrentDevice(value); resolve();
        })
      }

      /* Switches the device Types */
      if(propertyName == 'setMobile') {
        setDeviceType('Mobile'); setCurrentDevice('iPhone 11');
        resolve();
      }

      if(propertyName == 'setTablet') {
        setDeviceType('Tablet'); setCurrentDevice('iPad Pro 11'); 
        resolve();
      }

      if(propertyName == 'setDesktop') {
        setDeviceType('Desktop'); setCurrentDevice('Laptop');
        resolve();
      }

      /* Sets the Device Scaling properly*/ 
      if (propertyName == 'scaleUp') {
        let s = scale + 0.2
        if(s < MAX_SCALE_UPPER) {
          setScale(s)
        }
        console.log("CURRENTSCALE: ", scale)
        resolve();
      }

      if(propertyName == 'scaleDown') {
        let s = scale - 0.2
        if(s > MAX_SCALE_LOWER) {
          setScale(s)
        }
        resolve();
      }
      
    })
  }
  usePropertyMenu(items, onChange)
  return (
    <DeviceRenderer
      scale={scale} 
      border={resolveBorderEnabled(deviceBorderEnabled)}
      fill={resolveBackgroundEnabled(backgroundEnabled)}
      deviceType={deviceType}
      device={device}
      />
  )
}