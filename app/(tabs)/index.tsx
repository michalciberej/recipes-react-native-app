import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ActivityIndicator,
  Image,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';

import { COLORS, SIZES } from '@/constants/THEME';
import { SearchBar } from 'react-native-screens';
import RecipeCard from '@/components/cards/RecipeCard';
import useFetch from '@/hooks/useFetch';
import image from '../../assets/images/homepage-image.jpg';

import { TestRecipe } from '@/types';
import { useState } from 'react';

const Home = () => {
  const { data, isLoading, error, refetch } = useFetch('test');
  const router = useRouter();
  const [value, setValue] = useState('hahahah');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.background,
        paddingTop: 45,
        width: '100%',
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: SIZES.medium,
          gap: SIZES.medium,
        }}>
        <TextInput
          placeholder='chicken'
          value={value}
          onChangeText={setValue}
          style={{
            width: '100%',
            height: SIZES.xxLarge,
            paddingHorizontal: SIZES.medium,
            color: 'black',
            borderRadius: SIZES.medium,
            backgroundColor: COLORS.orange,
          }}
        />
        {/* <SearchBar /> */}
        <Image
          source={image}
          style={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
            borderRadius: SIZES.xLarge,
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            backgroundColor: COLORS.background,
            borderTopEndRadius: SIZES.xxLarge,
            borderTopStartRadius: SIZES.xxLarge,
            padding: SIZES.medium,
            gap: SIZES.medium,
            marginTop: 400,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: 'gray',
          }}>
          <Text style={{ fontSize: SIZES.xLarge }}>
            Maybe want to try something new?
          </Text>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((recipe: TestRecipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
