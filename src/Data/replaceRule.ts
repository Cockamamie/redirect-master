export default interface ReplaceRule {
  name: string;
  isEnabled: boolean;
  applicableForCondition: Condition;
  replaceCondition: Condition;
  replaceValue: string;
}

interface Condition {
  value: string;
  isRegex: boolean;
}