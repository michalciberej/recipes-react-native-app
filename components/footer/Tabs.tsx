import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { usePathname, useRouter } from 'expo-router';

import NavBtn from '../buttons/NavBtn';
import styles from './Tabs.style';

import { COLORS } from '@/constants/THEME';

const TabsContainer = () => {
  const route = useRoute();
  const router = useRouter();
  const path = usePathname();

  return (
    <View style={styles.container}>
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
