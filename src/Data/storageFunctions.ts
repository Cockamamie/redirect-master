import ReplaceRule from 'Data/replaceRule.ts';
import {
  createLocalStorageArea, serialise,
  Store
} from '@lmcd/mock-storagearea';

const testRules: ReplaceRule[] = [{
  name: "Test",
  isEnabled: true,
  applicableForCondition: {
    isRegex: false,
    value: "test"
  },
  replaceCondition: {
    isRegex: false,
    value: "test"
  },
  replaceValue: "test"
}];

const store = new Store([['replaceRules', serialise(testRules)]]);
const storage = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? createLocalStorageArea(store)
  : chrome.storage.local;

export async function saveReplaceRules(rules: ReplaceRule[]) {
  await storage.set({ 'replaceRules': rules });
}

export async function getReplaceRules() {
  const data = await storage.get('replaceRules');
  return Object.values<ReplaceRule>(data);
}