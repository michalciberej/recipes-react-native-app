import { useEffect, useState } from 'react';
import {
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

import { COLORS, SIZES } from '@/constants/THEME';
import { SearchBar } from 'react-native-screens';
import RecipeCard from '@/components/cards/RecipeCard';

import { Recipe } from '@/types';

const recipes: Recipe[] = [];

const Home = () => {
  const [data, setData] = useState<Recipe[]>([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const getRandomRecipes = async () => {
    setLoading(true);
    try {
      // const res = await axios.get(
      //   `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.API_KEY}`
      // );
      // setData(res.data.recipes);
      for (let i = 0; i < 10; i++) {
        recipes.push({
          title: 'food',
          instructions: 'test',
          image: 'https://spoonacular.com/recipeImages/642276-556x370.jpg',
          id: i,
        });
      }
      setData(recipes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomRecipes();
    console.log(data);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
        paddingTop: 60,
        width: '100%',
      }}>
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            borderTopEndRadius: SIZES.medium,
            borderTopStartRadius: SIZES.medium,
            padding: SIZES.medium,
            gap: SIZES.medium,
            marginTop: 400,
          }}>
          <Text style={{ fontSize: SIZES.xLarge }}>
            Maybe want to try something new?
          </Text>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}></RecipeCard>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
