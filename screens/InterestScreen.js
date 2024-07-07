import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const InterestScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.interestScreen, styles.iconLayout1]}>
      <View style={[styles.interestScreenChild, styles.interestLayout]} />
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
            <Text style={[styles.investments, styles.xyzFlexBox]}>
              Investments
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.interestScreenItem, styles.interestLayout]} />
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
      <Text style={[styles.interestFixingMethod, styles.xyzFlexBox]}>
        Interest Fixing Method
      </Text>
      <View
        style={[
          styles.loremIpsumDolorSitAmetConWrapper,
          styles.groupWrapperFlexBox,
        ]}
      >
        <Text
          style={[styles.loremIpsumDolor, styles.xyzFlexBox]}
        >{`Lorem ipsum dolor sit amet consectetur. Curabitur leo et sed donec faucibus pellentesque tincidunt et. Volutpat congue posuere morbi fringilla ultrices consectetur maecenas quis. Et purus quis egestas suspendisse. Metus feugiat cursus non arcu quam faucibus vitae ornare condimentum. Quam donec in eu libero turpis sagittis. Bibendum posuere vel ac pretium ultrices pellentesque cras ipsum. 
Amet malesuada pharetra sed ultricies. Maecenas egestas pellentesque pellentesque mi quam porttitor. Orci nunc mattis scelerisque tellus tortor. Massa at turpis tincidunt pellentesque etiam in neque. suspendisse at velit etiam at.
Pharetra penatibus odio lorem elementum at lectus nullam. Id nulla risus at quisque tempor malesuada tortor habitant condimentum. Vulputate feugiat ultricies ipsum sed. Tortor morbi diam elementum blandit ultrices gravida volutpat augue enim. `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  interestLayout: {
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
  iconLayout: {
    height: 32,
    width: 32,
  },
  interestScreenChild: {
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
    alignSelf: "stretch",
    width: 117,
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
    left: "50%",
    fontFamily: FontFamily.wFBodyBodyMedium,
    color: Color.colorBlack,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    position: "absolute",
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
    position: "absolute",
    left: 0,
  },
  interestScreenItem: {
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
  interestFixingMethod: {
    top: 74,
    left: 93,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textDecoration: "underline",
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.1,
    lineHeight: 18,
    fontFamily: FontFamily.wFBodyBodyMedium,
    color: Color.colorBlack,
    flex: 1,
  },
  loremIpsumDolorSitAmetConWrapper: {
    top: 116,
    left: 29,
    width: 296,
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  interestScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
    width: "100%",
  },
});

export default InterestScreen;
