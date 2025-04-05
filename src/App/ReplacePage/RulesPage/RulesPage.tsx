import ReplaceRuleItem from 'App/ReplacePage/Rule/ReplaceRuleItem.tsx';
import ReplaceRule from 'Data/replaceRule.ts';
import { Accordion, For } from '@chakra-ui/react';

export default function RulesPage({rules}: {rules: ReplaceRule[]}) {
  return (
    <Accordion.Root value={undefined} onValueChange={() => {}}>
      <For each={rules}>
        {(item, index) => (
          <ReplaceRuleItem key={index} rule={item}/>
        )}
      </For>
    </Accordion.Root>
  );
}