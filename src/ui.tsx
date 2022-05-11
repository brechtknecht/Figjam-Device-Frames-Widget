import {
  Button,
  Container,
  render,
  Textbox,
  Text,
  Divider,
  Inline,
  useInitialFocus,
  VerticalSpace,
  Dropdown,
  IconControlCheckboxMixed12,
  IconArrowLeft16,
  DropdownOption,
  SegmentedControl,
  SegmentedControlOption
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { AnyComponent, h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import DeviceMobile16 from './components/icons/DeviceMobile16'
import DeviceMobile32 from './components/icons/DeviceMobile32'
import DeviceTablet32 from './components/icons/DeviceTablet32'
import DeviceDesktop32 from './components/icons/DeviceDesktop32'

import DevicePreview from './components/devices/DevicePreview'

import None16 from './components/icons/None16'
import Check16 from './components/icons/Check16'

function Plugin (props: { type: string, title: string, deviceType: string, device: string, backgroundEnabled: string, deviceBorderEnabled: string, scale: number, isLocked: string }) {
  const [type, setType]     = useState(props.type)
  const [title, setTitle]   = useState(props.title)

  const [deviceType, setDeviceType] = useState(props.deviceType)
  const [device, setCurrentDevice] = useState(props.device)

  const [backgroundEnabled, setBackgroundEnabled] = useState(props.backgroundEnabled)
  const [deviceBorderEnabled, setDeviceBorderEnabled] = useState(props.deviceBorderEnabled)

  const [scale, setScale] = useState(props.scale)
  const [isLocked, setLockedState] = useState("isLocked")

  const deviceOptions: Array<DropdownOption> = [
    { value: 'Mobile' },
    { value: 'Tablet' },
    { value: 'Desktop' },
  ]

  const backgroundOptions: Array<SegmentedControlOption> = [
    { children: <None16 />, value: 'noBackground' },
    { children: <DeviceMobile16 background={true} ></DeviceMobile16>, value: 'background' }
  ]

  const deviceBorderOptions: Array<SegmentedControlOption> = [
    { children: <None16 />, value: 'noBorder' },
    { children: <Check16 />, value: 'border' },
  ]

  function handleBackgroundEnabledChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setBackgroundEnabled(newValue)
  }

  function handleDeviceBorderEnabledChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setDeviceBorderEnabled(newValue)
  }

  function handleDeviceTypeChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)

    
    if(newValue == 'Mobile') {
      setCurrentDevice('iPhone 11')
    }

    if(newValue == 'Tablet') {
      setCurrentDevice('iPad Pro 11')
    }

    if(newValue == 'Desktop') {
      setCurrentDevice('Laptop')
    }

    setDeviceType(newValue)
  }

  

  const mobileOptions: Array<DropdownOption> = [
    { header: 'Apple' },
    { value: 'iPhone 8' },
    { value: 'iPhone 11' },
    { value: 'iPhone 11 Pro' },
    { value: 'iPhone 11 Pro Max' },
    { separator: true },
    { header: 'Google' },
    { value: 'Pixel 3' },
    { value: 'Pixel 3 XL' },
    { value: 'Pixel 4' },
    { value: 'Pixel 4 XL' },
  ]

  const tabletOptions: Array<DropdownOption> = [
    { value: 'iPad Pro 11' },
    { value: 'iPad 9.7″' },
  ]

  const desktopOptions: Array<DropdownOption> = [
    { value: 'Laptop' },
    { value: 'Browser' },
  ]
  
  function handleMobileChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    console.log(newValue)
    setCurrentDevice(newValue)
  }

  const handleUpdateButtonClick = useCallback(
    function () {
      emit('UPDATE_TYPE', type)
      emit('UPDATE_TITLE', title)

      emit('UPDATE_DEVICETYPE', deviceType)
      emit('UPDATE_DEVICE', device)
      emit('UPDATE_BACKGROUND_ENABLED', backgroundEnabled)
      emit('UPDATE_DEVICEBORDER_ENABLED', deviceBorderEnabled)
    },
    /* !!!! UPDATE THIS — DO NOT FORGET !!!!!*/ 
    [type, title, deviceType, device, backgroundEnabled, deviceBorderEnabled, scale]
  )

  function getCurrentDeviceIcon(background: Boolean){
    if(deviceType == 'Mobile') {
      return <DeviceMobile32 background={background}/>
    }
    if(deviceType == 'Tablet') {
      return <DeviceTablet32 background={background}/>
    }
    if(deviceType == 'Desktop') {
      return <DeviceDesktop32 background={background}/>
    }
  }

  function resolveBorderEnabled (border : string): boolean {
    if(border == 'noBorder') { return false } else {return true}
  }

  function resolveBackgroundEnabled (fill: string): boolean {
    if(fill == 'noBackground') { return false } else {return true}
  }

  return (
    <div>
      <Container>
        <DevicePreview
          scale={scale} 
          border={resolveBorderEnabled(deviceBorderEnabled)}
          fill={resolveBackgroundEnabled(backgroundEnabled)}
          deviceType={deviceType}
          device={device}
          locked={false}
        />
        <VerticalSpace space='medium' />
        <Text bold>Device Type</Text>
        <VerticalSpace space='large' />
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <Dropdown
            noBorder
            icon={ getCurrentDeviceIcon(false)}
            onChange={handleDeviceTypeChange}
            options={deviceOptions}
            value={deviceType}
          />
          <SegmentedControl onChange={handleBackgroundEnabledChange} options={backgroundOptions} value={backgroundEnabled} />

        </div>
        <VerticalSpace space='small' />
          
        <div>
          {
            deviceType === 'Mobile' && <Dropdown
              onChange={handleMobileChange}
              options={mobileOptions}
              value={device}
            />
          }

          {
            deviceType === 'Tablet' && <Dropdown
              onChange={handleMobileChange}
              options={tabletOptions}
              value={device}
            />
          }
          {
            deviceType === 'Desktop' && <Dropdown
              onChange={handleMobileChange}
              options={desktopOptions}
              value={device}
            />
          }
        </div>
        <VerticalSpace space='small' />
      </Container>

      <Divider/>
      
      <Container>
        <VerticalSpace space='small' />

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <Text>Enable Device Border</Text>
          <SegmentedControl onChange={handleDeviceBorderEnabledChange} options={deviceBorderOptions} value={deviceBorderEnabled} />
        </div>
        <VerticalSpace space='small' />
      </Container>

      <Divider/>
      <Container>
      <VerticalSpace space='medium' />
        <Button fullWidth onClick={handleUpdateButtonClick}>
          Update Values
        </Button>
        <VerticalSpace space='small' />
      </Container>
    </div>
  )
}

export default render(Plugin)
