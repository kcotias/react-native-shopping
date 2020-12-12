import React, { ReactElement, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useQuery } from '@apollo/client';
import SkeletonContent from 'react-native-skeleton-content';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Header, CustomInput } from '../../../../components';
import styles from './styles';
import { CategoriesList, CardItem } from '../../components';
import { Layout } from '../../../../constants';
import { CATEGORY_QUERY, PRODUCTS_QUERY } from '../../queries';
import { RootStackParamList } from '../../../../types';

interface ProductListProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<{ params: { pocId: number } }, 'params'>;
}

const ProductsList: React.FC<ProductListProps> = ({ route, navigation }) => {
  const { pocId } = route.params;
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const { loading: categoriesLoading, data: categoriesData } = useQuery(CATEGORY_QUERY);
  const { loading: productsLoading, data: productsData, refetch } = useQuery(PRODUCTS_QUERY, {
    variables: {
      id: pocId,
      categoryId: activeCategory,
      search,
    },
  });

  function emptyList(): ReactElement {
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
        <Text style={styles.emptyMessage}>Nada para exibir aqui :/</Text>
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

  function onCategoryPress(id: number) {
    if (activeCategory === id) {
      setActiveCategory(null);
    } else {
      setActiveCategory(id);
    }
    refetch();
  }

  function renderItem({ item }) {
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
