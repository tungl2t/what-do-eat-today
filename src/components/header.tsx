import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Box
        height="60px"
        background="#2d3803"
        position="fixed"
        top="0"
        left="0"
        w="100%"
        d="flex"
        justifyContent="center"
        boxShadow="0 2px 4px -1px #0003, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f"
        zIndex={2}
      >
        <Flex
          direction="row"
          w={{ base: '350px', '2md': '710px', '2lg': '1090px' }}
          h="100%"
          align="center"
          justify="space-between"
          color="white"
          fontSize={{ base: '14px', '2md': '16px', '2lg': '18px' }}
          px={{ base: '10px', '2md': 0 }}
        >
          <Heading fontSize="1.15em">Hôm nay ăn gì?</Heading>
          <Button colorScheme="gray.600" variant="outline" fontSize="0.95em">
            Click ở đây để chọn
          </Button>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
