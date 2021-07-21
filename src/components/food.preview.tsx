import { AspectRatio, Box, Img } from '@chakra-ui/react';

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
};

const FoodPreview = ({ title, coverImage, excerpt }: Props) => {
  return (
    <Box
      w="400px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="10px"
      _hover={{
        boxShadow: '0 2px 4px -1px #0003, 0 4px 5px 0 #00000024, 0 1px 10px 0 #0000001f',
      }}
      transition="all 0.5s ease-in-out"
    >
      <AspectRatio ratio={4 / 3} w="100%">
        <Img src={coverImage} alt={title} w="100%" />
      </AspectRatio>
      <Box p={6}>
        <Box d="flex" alignItems="baseline">
          <Box fontWeight="semibold" letterSpacing="wide" textTransform="uppercase">
            {title}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color="gray.500"
          fontSize="xs"
        >
          {excerpt}
        </Box>
      </Box>
    </Box>
  );
};

export default FoodPreview;
