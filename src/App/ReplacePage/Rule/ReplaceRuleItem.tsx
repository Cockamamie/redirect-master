import { Accordion, Box, Container } from '@chakra-ui/react';
import ReplaceRule from 'Data/replaceRule.ts';

export default function ReplaceRuleItem({rule}: {rule: ReplaceRule}) {
  return (
    <Accordion.Item key={rule.name} value={rule.name}>
      <Container>
        <Box width='100px' height='100px' backgroundColor={'blue'}>
          <Container>
          </Container>
        </Box>
      </Container>
    </Accordion.Item>
  );
}