import { StyleSheet } from "react-native";

export const colours = {
  "white" : "#fff",
  "lightgrey" : "#555",
  "grey" : "#333",
  "specgrey" : "#25292e",
  "darkgrey" : "#222",
  "black" : "#000",

  "skyblue" : "#8df",
  "blue" : "#49f",
  "slateblue" : "#549",
  "royalblue" : "#47e",
  "medblue" : "#11d",
  "navyblue" : "#008",
  "nightblue" : "#003",
  "indigo" : "#317",
} ;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingHorizontal : 200,
  },
  title: {
    color: colours["blue"],
    fontSize: 44,
    textAlign: "center",
  },
  page_title: {
    color: colours["blue"],
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    color: colours["white"],
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
    color: colours["white"],
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
    color: colours["grey"],
  },
  buttonLabel: {
    color: colours["white"],
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
    color: colours["white"],
    fontSize: 16,
  },
});
