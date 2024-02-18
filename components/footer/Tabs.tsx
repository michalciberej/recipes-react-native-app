import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { usePathname, useRouter } from 'expo-router';

import NavBtn from '../buttons/NavBtn';

import { COLORS, SIZES } from '@/constants/THEME';

const TabsContainer = () => {
  const route = useRoute();
  const router = useRouter();
  const path = usePathname();

  return (
    <View
      style={{
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 80,
        paddingVertical: 10,
      }}>
      <NavBtn
        icon='home'
        size={40}
        color={path === '/' ? COLORS.primary : '#ababab'}
        handlePress={() => router.replace('/')}
      />
      <NavBtn
        icon='heart'
        color={path === '/favorite' ? COLORS.primary : '#ababab'}
        size={40}
        handlePress={() => router.replace('/favorite')}
      />
    </View>
  );
};

export default TabsContainer;
