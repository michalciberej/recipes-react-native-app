import { StyleSheet } from "react-native";

import {SIZES} from "../../constants/THEME"

const styles = StyleSheet.create({
  button: {
    flexBasis: 'auto',
    height: 184,
    width: 184 
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    borderRadius: SIZES.medium,
  },
  title: {
    position: 'absolute'
  }
})

export default styles