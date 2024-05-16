import { StyleSheet, Dimensions } from "react-native";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.white,
  },
  logo: {
    marginTop: height * 0.1,
    width: 321,
  },
  loginText: {
    fontWeight: "700",
    fontSize: Fonts.Size.md,
    color: Colors["z-dark-blue-100"],
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: Fonts.Size.sm,
    alignSelf: "flex-end",
    color: Colors.black,
    marginBottom: 40,
  },
});

export default styles;
