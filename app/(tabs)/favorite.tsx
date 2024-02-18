import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '@/constants/THEME';

import NavBtn from '@/components/buttons/NavBtn';
import TabsContainer from '@/components/footer/Tabs';

const Favorite = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
        paddingTop: 60,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Text>FACORITE</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;
