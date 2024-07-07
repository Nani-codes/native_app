import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.loginScreen}
      onPress={() => navigation.navigate("HomeScreen")}
    >
      <View style={styles.frameParent}>
        <View style={styles.optionParent}>
          <View style={styles.optionSpaceBlock}>
            <Text style={styles.value}>User ID</Text>
          </View>
          <View style={[styles.option1, styles.optionSpaceBlock]}>
            <Text style={styles.value}>Password</Text>
          </View>
        </View>
        <View
          style={[styles.orSignInWithWrapper, styles.groupParentSpaceBlock]}
        >
          <Text style={styles.orSignIn}>{`OR 
Sign In With`}</Text>
        </View>
        <View style={styles.groupParentSpaceBlock}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.g, styles.gPosition]}>G</Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.f, styles.gPosition]}>F</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  optionSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_base,
    justifyContent: "flex-end",
    flexDirection: "row",
    width: 320,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_7xs,
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.neutralsWhite,
  },
  groupParentSpaceBlock: {
    marginTop: 35,
    flexDirection: "row",
  },
  groupLayout: {
    height: 50,
    width: 50,
  },
  gPosition: {
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    marginTop: -24,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  value: {
    color: Color.colorLightgray_100,
    textAlign: "left",
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    flex: 1,
  },
  option1: {
    marginTop: 26,
  },
  optionParent: {
    alignItems: "center",
  },
  orSignIn: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
  },
  orSignInWithWrapper: {
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderStyle: "solid",
    width: 50,
    position: "absolute",
    backgroundColor: Color.neutralsWhite,
  },
  g: {
    marginLeft: -12,
  },
  f: {
    marginLeft: -9,
  },
  rectangleGroup: {
    marginLeft: 40,
  },
  frameParent: {
    marginTop: -163,
    marginLeft: -160,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loginScreen: {
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default LoginScreen;
