import { TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './SeachBar.style';
import { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState<string>('retard');
  const router = useRouter();

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder='chicken'
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
};

export default SearchBar;
