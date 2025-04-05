import { ColorModeButton } from 'components/ui/ColorMode.tsx';
import Menu from 'App/Header/Menu.tsx';
import { Container, Flex } from '@chakra-ui/react';

export default function Header() {
  return (
    <header>
      <Flex justifyContent="space-between">
        <Container></Container>
        <Container>
          <Menu />
        </Container>
        <ColorModeButton />
      </Flex>
    </header>
  );
}