import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants/THEME';

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: (size) => ({
    width: size,
    height: size,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
