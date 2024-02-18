import { TouchableOpacity, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './RecipeCard.style';

interface RecipeCardProps {
  title?: string;
  image?: string;
  time?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image, time }) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity style={styles.button}>
        <Image
          src={image}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.time}>
        <Icon name='clockcircleo' />
        <Text>{time}</Text>
      </View>
    </View>
  );
};

export default RecipeCard;
