import styles from './NavBtn.style';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

interface SHBtnProps {
  icon: string;
  size?: number;
  color?: string;
  handlePress: () => void;
}

const NavBtn: React.FC<SHBtnProps> = ({ icon, size, handlePress, color }) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={handlePress}>
      <Icon
        name={icon}
        color={color}
        size={size}
      />
    </TouchableOpacity>
  );
};

export default NavBtn;
