import {
  Button,
  Container,
  render,
  Textbox,
  useInitialFocus,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

function Plugin (props: { type: string, title: string }) {
  const [type, setType]     = useState(props.type)
  const [title, setTitle]   = useState(props.title)

  const handleUpdateButtonClick = useCallback(
    function () {
      emit('UPDATE_TYPE', type)
      emit('UPDATE_TITLE', title)
    },
    [type, title]
  )
  return (
    <Container>
      <VerticalSpace space='large' />
      <Textbox {...useInitialFocus()} onValueInput={setType} value={type} />
      <VerticalSpace space='large' />
      <Textbox onValueInput={setTitle} value={title} />
      <VerticalSpace space='large' />
      <Button fullWidth onClick={handleUpdateButtonClick}>
        Update Text
      </Button>
      <VerticalSpace space='small' />
    </Container>
  )
}

export default render(Plugin)
