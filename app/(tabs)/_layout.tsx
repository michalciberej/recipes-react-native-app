import TabsContainer from '@/components/footer/Tabs';
import { Slot, Stack } from 'expo-router';

import React from 'react';

export const Layout = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Slot />
      <TabsContainer />
    </>
  );
};

export default Layout;
