import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gql, useQuery } from '@apollo/client';
import { Header, CustomInput } from '../../../../components';
import styles from './styles';
import { CategoriesList, CardItem } from '../../components';

interface ProductListProps {
  navigation: any;
  route: any;
}

const CATEGORY_QUERY = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

const PRODUCTS_QUERY = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
        }
      }
    }
  }
`;

function emptyList() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
      <Text style={{ color: '#fff', fontSize: 22, fontWeight: '600' }}>
        Nothing to show here! :/
      </Text>
    </View>
  );
}

const ProductsList: React.FC<ProductListProps> = ({ route, navigation }) => {
  const { pocId } = route.params;
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const { loading: categoriesLoading, data: categoriesData } = useQuery(CATEGORY_QUERY);
  const { loading: ProductsLoading, data: productsData, refetch } = useQuery(PRODUCTS_QUERY, {
    variables: {
      id: pocId,
      categoryId: activeCategory,
      search,
    },
  });

  function handleBackPress() {
    navigation.goBack();
  }

  function handleChangeText(text: string) {
    setSearch(text);
  }

  function handleEndEditing() {
    refetch();
  }

  function onCategoryPress(id) {
    if (activeCategory === id) {
      setActiveCategory(null);
    } else {
      setActiveCategory(id);
    }
    refetch();
  }

  function renderItem({ item }: any) {
    return <CardItem item={item} />;
  }

  return (
    <LinearGradient style={styles.gradient} colors={['#fe6277', '#ffbf6f']}>
      <Header hasBackButton onBackPress={handleBackPress} />
      <View>
        <CustomInput
          placeholder="Pesquise por sua bebida favorita!"
          onChangeText={handleChangeText}
          onEndEditing={handleEndEditing}
        />
        <CategoriesList
          categories={categoriesData?.allCategory}
          onButtonPress={onCategoryPress}
          activeButton={activeCategory}
          categoriesLoading={categoriesLoading}
        />
      </View>
      <FlatList
        renderItem={renderItem}
        data={productsData?.poc.products}
        ListEmptyComponent={emptyList}
      />
    </LinearGradient>
  );
};

export default ProductsList;
