import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants/THEME"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.medium,
    overflow: "hidden"
  },
  button: {
    height: "100%",
    width: "100%",
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    position: "absolute",
    left: SIZES.xSmall,
    bottom: SIZES.xSmall,
    padding: 6,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.xLarge
  },
  time: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    position: 'absolute',
    right: SIZES.xSmall,
    bottom: SIZES.xSmall,
    padding: 6,
    color: "grey",
    backgroundColor: COLORS.background,
    borderRadius: SIZES.xLarge,
  },
  shadow: {
    shadowColor: "black",
    elevation: 4
  }
})

export default styles