import { TextInput, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './SeachBar.style';
import { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState<string>('yep');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.searchBar}>yey</Text>
    </View>
  );
};

export default SearchBar;
