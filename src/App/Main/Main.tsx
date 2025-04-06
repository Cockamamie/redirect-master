import { Box, Center } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function Main(props: PropsWithChildren) {
  return (
    <Center style={{alignItems: 'stretch', flexGrow: 1 }}>
      <Box maxWidth="98%" width='100%' backgroundColor={'gray'}>
        {props.children}
      </Box>
    </Center>
  );
}