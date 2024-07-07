import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const DisputeResolveScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.disputeResolveScreen, styles.iconLayout1]}>
      <View style={[styles.disputeResolveScreenChild, styles.disputeLayout]} />
      <View style={[styles.frameParent, styles.groupWrapperFlexBox]}>
        <Pressable
          style={[styles.groupWrapper, styles.groupWrapperFlexBox]}
          onPress={() => navigation.navigate("AllLoansScreen")}
        >
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupBorder]} />
            <Text style={[styles.loans, styles.xyzTypo]}>Loans</Text>
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
            <Text style={[styles.investments, styles.investmentsPosition]}>
              Investments
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.disputeResolveScreenItem, styles.disputeLayout]} />
      <View style={styles.iconArrowLeftParent}>
        <Image
          style={[styles.iconArrowLeft, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconarrowleft.png")}
        />
        <Text style={[styles.xyz, styles.xyzTypo]}>XYZ</Text>
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
      <Text
        style={[styles.disputeResolutionMechanism, styles.investmentsPosition]}
      >
        Dispute Resolution Mechanism
      </Text>
      <View
        style={[
          styles.loremIpsumDolorSitAmetConWrapper,
          styles.groupWrapperFlexBox,
        ]}
      >
        <Text
          style={[styles.loremIpsumDolor, styles.xyzTypo]}
        >{`Lorem ipsum dolor sit amet consectetur. Quis cras mattis eget sed mi amet. Vulputate dui vel venenatis senectus purus bibendum sollicitudin. Felis nibh consequat pretium sit ut ac. Vivamus cursus lorem at sed sit sed nullam. Id ipsum neque 
Justo velit lacus sollicitudin dolor sed. Lacus nunc maecenas volutpat cum. Semper mattis consequat in dignissim faucibus sit tellus enim mattis. Et tincidunt non dui quis enim diam. Adipiscing in orci 
Metus felis massa sem aliquam neque lacus vitae. Mi diam id tincidunt in tempus dignissim tincidunt magna. Ipsum feugiat dolor eget ligula integer ornare. 
Id lorem amet rhoncus id justo. Sed sagittis volutpat etiam tristique sed donec quis. Nascetur scelerisque quis quisque dui fames facilisis enim. Adipiscing facilisi platea quis lobortis molestie lacus. Convallis aliquam velit est sit dui faucibus sagittis turpis mattis. `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  disputeLayout: {
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
  xyzTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  investmentsPosition: {
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  disputeResolveScreenChild: {
    top: 583,
  },
  groupChild: {
    top: 5,
    width: 105,
  },
  loans: {
    top: 0,
    left: 5,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
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
    fontFamily: FontFamily.wFBodyBodyMedium,
    left: "50%",
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
    position: "absolute",
    left: 0,
  },
  disputeResolveScreenItem: {
    top: 61,
  },
  iconArrowLeft: {
    overflow: "hidden",
  },
  xyz: {
    marginLeft: 111,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
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
  disputeResolutionMechanism: {
    marginLeft: -116,
    top: 81,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textDecoration: "underline",
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.1,
    lineHeight: 18,
    alignSelf: "stretch",
    flex: 1,
  },
  loremIpsumDolorSitAmetConWrapper: {
    top: 137,
    left: 37,
    width: 303,
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  disputeResolveScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
    width: "100%",
  },
});

export default DisputeResolveScreen;
