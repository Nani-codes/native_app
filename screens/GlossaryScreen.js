import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GlossaryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.glossaryScreen, styles.iconLayout1]}>
      <View style={[styles.glossaryScreenChild, styles.glossaryLayout]} />
      <View style={[styles.frameParent, styles.groupWrapperFlexBox]}>
        <Pressable
          style={[styles.groupWrapper, styles.groupWrapperFlexBox]}
          onPress={() => navigation.navigate("AllLoansScreen")}
        >
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupBorder]} />
            <Text style={[styles.loans, styles.xyzFlexBox]}>Loans</Text>
          </View>
        </Pressable>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <View style={[styles.groupContainer, styles.groupWrapperFlexBox]}>
          <Pressable
            style={styles.rectangleGroup}
            onPress={() => navigation.navigate("AllInvestmentsScreen")}
          >
            <View style={[styles.groupItem, styles.groupBorder]} />
            <Text style={[styles.investments, styles.glossaryPosition]}>
              Investments
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.glossaryScreenItem, styles.glossaryLayout]} />
      <View style={styles.iconArrowLeftParent}>
        <Image
          style={[styles.iconArrowLeft, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconarrowleft.png")}
        />
        <Text style={[styles.xyz, styles.xyzFlexBox]}>XYZ</Text>
        <Pressable
          style={[styles.iconHome, styles.iconLayout]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/iconhome1.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.glossary, styles.glossaryPosition]}>Glossary</Text>
      <View
        style={[
          styles.loremIpsumDolorSitAmetConWrapper,
          styles.glossaryPosition,
        ]}
      >
        <Text
          style={[styles.loremIpsumDolor, styles.xyzFlexBox]}
        >{`Lorem ipsum dolor sit amet consectetur. 
Vitae phasellus eu massa laoreet. 
Turpis eu et mauris quam eget. 
Vitae venenatis lacus leo orci turpis eu massa. 
In nisl sagittis risus amet. 
Pretium consectetur libero commodo cursus elementum et cursus morbi. 
Mi tellus vel sem nulla egestas volutpat donec. 
Viverra iaculis eget ac nunc convallis neque. 
Vulputate nunc dis phasellus cursus risus. 
Suspendisse turpis vivamus mauris dignissim dui pellentesque in non urna.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  glossaryLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupBorder: {
    height: 40,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.neutralsWhite,
  },
  xyzFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  glossaryPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  glossaryScreenChild: {
    top: 583,
  },
  groupChild: {
    top: 5,
    width: 105,
  },
  loans: {
    top: 0,
    left: 5,
    fontFamily: FontFamily.wFBodyBodyMedium,
    color: Color.colorBlack,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  rectangleParent: {
    height: 48,
    width: 105,
  },
  groupWrapper: {
    width: 117,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 1,
    height: 57,
    marginLeft: 20,
  },
  groupItem: {
    top: 4,
    width: 190,
  },
  investments: {
    marginTop: -24,
    marginLeft: -91,
    top: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  rectangleGroup: {
    width: 190,
    height: 48,
  },
  groupContainer: {
    marginLeft: 20,
  },
  frameParent: {
    top: 586,
    width: 360,
    flexDirection: "row",
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },
  glossaryScreenItem: {
    top: 61,
  },
  iconArrowLeft: {
    overflow: "hidden",
  },
  xyz: {
    marginLeft: 111,
    fontFamily: FontFamily.wFBodyBodyMedium,
    color: Color.colorBlack,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconHome: {
    marginLeft: 111,
  },
  iconArrowLeftParent: {
    top: 15,
    left: 9,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  glossary: {
    marginLeft: -34,
    top: 75,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textDecoration: "underline",
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.colorBlack,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.1,
    lineHeight: 18,
    fontFamily: FontFamily.wFBodyBodyMedium,
    color: Color.colorBlack,
    alignSelf: "stretch",
    flex: 1,
  },
  loremIpsumDolorSitAmetConWrapper: {
    marginLeft: -173,
    top: 122,
    width: 346,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  glossaryScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
    width: "100%",
  },
});

export default GlossaryScreen;
