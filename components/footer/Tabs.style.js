import { StyleSheet } from "react-native-web";

import {COLORS, SIZES} from "../../constants/THEME"

const styles = StyleSheet.create({
  container: {
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 80,
        paddingVertical: 10,
  },

})

export default styles;