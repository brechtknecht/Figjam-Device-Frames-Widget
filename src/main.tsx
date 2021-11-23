/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout, Text, useSyncedState, usePropertyMenu } = widget

export default function () {
  widget.register(AdvancedCard)
}

function AdvancedCard () {
  const [type, setType] = useSyncedState("type", "Card Type")

  const [title, setTitle] = useSyncedState("title", "Title")

  const items: Array<WidgetPropertyMenuItem> = [
    {
      itemType: 'action',
      propertyName: 'edit',
      tooltip: 'Edit'
    },
    {
      tooltip: "Open URL",
      propertyName: "openurl",
      itemType: "action"
    }
  ]
  async function onChange ({
    propertyName
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === 'edit') {
        showUI({ width: 240, height: 180 }, { type, title })
        once('UPDATE_TYPE', function (type: string): void {
          setType(type); resolve();
        })

        once('UPDATE_TITLE', function (title: string): void {
          setTitle(title); resolve();
        })
      }
    })
  }
  usePropertyMenu(items, onChange)
  return (
    // multiple props
    <AutoLayout width={400} height="hug-contents" cornerRadius={12} fill="#F4F4F4" stroke="#eaeaea" strokeWidth={0.5}>
      <AutoLayout width={400} direction="vertical" height="hug-contents">

        {/* Top Bar start */}
        <AutoLayout 
          horizontalAlignItems="center" 
          verticalAlignItems="center" 
          fill="#E76557" 
          width="fill-parent" 
          height={48}>
            <Text 
              fontFamily={"Inter"} 
              fontSize={22}
              textCase="upper"
              letterSpacing={3}
              fill="#fff"
              fontWeight="bold"
              italic={false}
            >
              { type }
            </Text>
        </AutoLayout>
        {/* Top Bar end */}

        {/* Card Title start */}
        <AutoLayout horizontalAlignItems="center" verticalAlignItems="center" padding={22} spacing={24} height="hug-contents" width="fill-parent" direction="vertical">
          <Text
            fontSize={24}
            height="hug-contents"
            width="fill-parent"
            horizontalAlignText="left"
          >
            { title }
          </Text>
        </AutoLayout>
        {/* Card Title end */}

      </AutoLayout> 
    </AutoLayout>
  )
}
