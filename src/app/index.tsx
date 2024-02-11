import { useState } from 'react';
import { View, FlatList } from 'react-native';

import { CATEGORIES } from '@/utils/data/products';

import { CategoryButton } from '@/components/category-button';
import { Header } from '@/components/header';

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={0} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="mt-5 max-h-10"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
