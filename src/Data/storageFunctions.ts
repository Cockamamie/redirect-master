import ReplaceRule from 'Data/replaceRule.ts';
import createTestStorage from 'Data/testStorage.ts';

// @ts-ignore
const storage = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? createTestStorage()
  : chrome.storage.local;

export async function saveReplaceRules(rules: ReplaceRule[]) {
  await storage.set({ 'replaceRules': rules });
}

export async function getReplaceRules() {
  const data = await storage.get('replaceRules');
  return Object.values<ReplaceRule>(data['replaceRules']);
}