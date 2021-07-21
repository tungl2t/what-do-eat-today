import { getAllFoods } from '@/lib/api';
import { FoodInterface } from '@/types/food.interface';
import { Flex } from '@chakra-ui/react';

import FoodPreview from '@/components/food.preview';
import Layout from '@/components/layout';
import MyMeta from '@/components/my-meta';

type Props = {
  foods: FoodInterface[];
};

const Index = ({ foods }: Props) => {
  return (
    <Layout>
      <MyMeta
        title={'Hôm nay ăn gì?'}
        description={'Có rất nhiều món để có thể lựa chọn'}
        imageUrl={''}
        url={''}
      />
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        w={{ base: '95%', lg: '960px' }}
        m="auto"
        transition="all 0.5s ease-in-out"
      >
        {foods.map((food) => (
          <FoodPreview
            title={food.title}
            coverImage={food.coverImage}
            excerpt={food.excerpt}
            key={food.path}
          />
        ))}
      </Flex>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const foods = getAllFoods(['title', 'path', 'coverImage', 'excerpt']);
  return {
    props: { foods },
  };
};
