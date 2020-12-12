import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gql, useQuery } from '@apollo/client';
import { Button, Header, CustomInput } from '../../../../components';
import styles from './styles';
import { Layout } from '../../../../constants';
import { CategoriesList } from '../../components';

interface ProductListProps {
  navigation: any;
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
      search: '',
    },
  });

  console.log(productsData);

  function handleBackPress() {
    navigation.goBack();
  }

  function handleChangeText(text: string) {
    setSearch(text);
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
    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: 120,
          marginBottom: 20,
          marginHorizontal: Layout.spacing.paddingX,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: 'row',
          padding: 15,
        }}>
        <View style={{ width: '65%' }}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={{ color: '#152130', fontSize: 16, marginBottom: 8, fontWeight: '600' }}>
            {item.title}
          </Text>
          <Text style={{ color: 'green', fontWeight: '600', fontSize: 18 }}>
            R$ {item.productVariants[0].price}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            resizeMode="contain"
            source={{ uri: item.images[0].url }}
            style={{ height: 100, width: 100 }}
          />
        </View>
      </View>
    );
  }

  return (
    <LinearGradient style={styles.gradient} colors={['#fe6277', '#ffbf6f']}>
      <Header hasBackButton onBackPress={handleBackPress} />
      <View>
        <CustomInput
          placeholder="Search for your favorite drink :)"
          onChangeText={handleChangeText}
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
