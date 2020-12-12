import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useQuery } from '@apollo/client';
import SkeletonContent from 'react-native-skeleton-content';
import { Header, CustomInput } from '../../../../components';
import styles from './styles';
import { CategoriesList, CardItem } from '../../components';
import { Layout } from '../../../../constants';
import { CATEGORY_QUERY, PRODUCTS_QUERY } from '../../queries';

interface ProductListProps {
  navigation: any;
  route: any;
}

const ProductsList: React.FC<ProductListProps> = ({ route, navigation }) => {
  const { pocId } = route.params;
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const { loading: categoriesLoading, data: categoriesData } = useQuery(CATEGORY_QUERY);
  const { loading: productsLoading, data: productsData, refetch } = useQuery(PRODUCTS_QUERY, {
    variables: {
      id: pocId,
      categoryId: activeCategory,
      search,
    },
  });

  function emptyList() {
    return productsLoading ? (
      <SkeletonContent
        containerStyle={{
          ...styles.emptyContainer,
          marginHorizontal: Layout.spacing.paddingX,
        }}
        layout={[{}, {}, {}, {}].map(() => {
          return styles.skeletonContainer;
        })}
        isLoading
      />
    ) : (
      <View style={{ ...styles.emptyContainer, paddingTop: 30 }}>
        <Text style={styles.emptyMessage}>Nothing to show here! :/</Text>
      </View>
    );
  }

  function handleBackPress() {
    navigation.goBack();
  }

  function handleChangeText(text: string) {
    setActiveCategory(null);
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
          isLoading={categoriesLoading}
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
