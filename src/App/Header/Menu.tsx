import {Tabs} from '@chakra-ui/react';

export default function Menu() {
  return (
    <Tabs.Root variant="enclosed">
      <Tabs.List>
        <Tabs.Trigger value="replace">
          Replace
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">
          Settings
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}