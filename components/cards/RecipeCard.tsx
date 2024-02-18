import { TouchableOpacity, Image, Text } from 'react-native';

import styles from './RecipeCard.style';

interface RecipeCardProps {
  title?: string;
  image?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        src={image}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RecipeCard;
