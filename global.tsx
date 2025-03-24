import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingHorizontal : 200,
  },
  title: {
    color: "#49f",
    fontSize: 44,
    textAlign: "center",
  },
  page_title: {
    color: "#49f",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dessertContainer: {
    flex: 2,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  dessertImageList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
  dessertIngredients: {
    // justifyContent: "center",
    // alignItems: "center",
    // marginRight: 100,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 18,
    textAlign: "center",
    margin: 10,
  },

// debugging
  borders: {
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "red",
  },

  // buttons
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 3,
  },
  buttonS: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
    textAlign: "center",
  },
  buttonM: {
    fontSize: 30,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    color: "#ccc",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  footerContainer: {
    // flex: 1 / 3,
    alignItems: "center",
  },

  // tags
  tagContainer: {
    // width: 320,
    // height: 68,
    marginHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 3,
  },
  tagButton: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  tagLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
