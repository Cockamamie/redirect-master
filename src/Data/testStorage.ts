import ReplaceRule from 'Data/replaceRule.ts';
import { createLocalStorageArea, serialise, Store } from '@lmcd/mock-storagearea';

const testRules: ReplaceRule[] = [
  {
    name: 'Test',
    isEnabled: true,
    applicableForCondition: {
      isRegex: false,
      value: 'test'
    },
    replaceCondition: {
      isRegex: false,
      value: 'test'
    },
    replaceValue: 'test'
  },
  {
    name: 'TestRegex',
    isEnabled: true,
    applicableForCondition: {
      isRegex: true,
      value: 'test'
    },
    replaceCondition: {
      isRegex: true,
      value: 'test'
    },
    replaceValue: 'test'
  },
  {
    name: 'TestDisabled',
    isEnabled: false,
    applicableForCondition: {
      isRegex: false,
      value: 'test'
    },
    replaceCondition: {
      isRegex: true,
      value: 'test'
    },
    replaceValue: 'test'
  }
];

const store = new Store([['replaceRules', serialise(testRules)]]);

const createTestStorage = () => createLocalStorageArea(store);

export default createTestStorage;