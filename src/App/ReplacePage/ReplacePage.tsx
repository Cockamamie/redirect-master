import RulesPage from 'App/ReplacePage/RulesPage/RulesPage.tsx';
import { getReplaceRules } from 'Data/storageFunctions.ts';
import { useEffect, useState } from 'react';
import ReplaceRule from 'Data/replaceRule.ts';

export default function ReplacePage() {
  const [rules, setRules] = useState<ReplaceRule[]>()

  useEffect(() => {
    getReplaceRules()
      .then(result => setRules(result));
  }, []);

  return (
    <RulesPage rules={rules!}/>
  )
}