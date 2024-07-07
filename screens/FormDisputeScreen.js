import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FormDisputeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.formDisputeScreen, styles.iconLayout1]}>
      <View style={[styles.formDisputeScreenChild, styles.formLayout]} />
      <View style={styles.frameParent}>
        <Pressable
          style={styles.groupWrapper}
          onPress={() => navigation.navigate("AllLoansScreen")}
        >
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <Text style={[styles.loans, styles.xyzTypo]}>Loans</Text>
          </View>
        </Pressable>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Pressable
          style={styles.groupContainer}
          onPress={() => navigation.navigate("AllInvestmentsScreen")}
        >
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.investments, styles.parentPosition]}>
              Investments
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <Pressable
          style={styles.rectangleContainer}
          onPress={() => navigation.navigate("LoanTermsScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.parentPosition]}>T</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanDetailsScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.parentPosition]}>D</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanStatementScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.parentPosition]}>S</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanHistoryScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.parentPosition]}>H</Text>
        </Pressable>
        <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
          <Image
            style={[styles.rectangleIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Text style={[styles.rd, styles.parentPosition]}>RD</Text>
        </View>
      </View>
      <View style={[styles.formDisputeScreenItem, styles.formLayout]} />
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
      <View style={[styles.petitionerParent, styles.parentPosition]}>
        <Text style={styles.submitTypo}>{`Petitioner `}</Text>
        <View style={styles.frameWrapper}>
          <View style={styles.frameLayout}>
            <View style={[styles.frameItem, styles.frameLayout]} />
            <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.disputeInLoan, styles.submitTypo]}
      >{`Dispute in Loan Account 1 `}</Text>
      <View style={[styles.frameGroup, styles.frameGroupLayout]}>
        <View style={styles.descriptionWrapper}>
          <Text style={[styles.description, styles.descriptionTypo]}>
            Description:
          </Text>
        </View>
        <View style={styles.wrapperSpaceBlock}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/line-31.png")}
          />
        </View>
        <View style={[styles.loremIpsumHgWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.loremIpsumHg, styles.descriptionTypo]}>
            Lorem ipsum hg
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  formLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  xyzTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  groupPosition: {
    top: 4,
    height: 40,
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  vectorParentSpaceBlock: {
    marginLeft: 25,
    height: 48,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  frameLayout: {
    height: 25,
    width: 142,
  },
  submitTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameGroupLayout: {
    height: 240,
    width: 320,
    position: "absolute",
  },
  descriptionTypo: {
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  wrapperSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  formDisputeScreenChild: {
    top: 583,
  },
  groupChild: {
    top: 5,
    height: 40,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    width: 105,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.neutralsWhite,
  },
  loans: {
    left: 5,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    height: 48,
    width: 105,
  },
  groupWrapper: {
    width: 117,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 1,
    height: 57,
    marginLeft: 20,
  },
  groupItem: {
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.neutralsWhite,
  },
  investments: {
    marginLeft: -91,
    top: "50%",
    marginTop: -24,
    left: "50%",
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
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 586,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  groupInner: {
    width: 40,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.neutralsWhite,
  },
  t: {
    marginLeft: -9,
    top: "50%",
    marginTop: -24,
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  rectangleContainer: {
    width: 40,
    height: 48,
  },
  groupPressable: {
    width: 40,
  },
  rectangleIcon: {
    width: 60,
  },
  rd: {
    marginLeft: -22,
    top: "50%",
    marginTop: -24,
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  vectorParent: {
    width: 60,
  },
  groupParent: {
    marginLeft: -159,
    top: 68,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  formDisputeScreenItem: {
    top: 61,
  },
  iconArrowLeft: {
    overflow: "hidden",
  },
  xyz: {
    marginLeft: 111,
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
  frameItem: {
    backgroundColor: Color.colorGainsboro,
    top: 0,
    left: 0,
    position: "absolute",
  },
  submit: {
    top: 1,
    left: 44,
    position: "absolute",
  },
  frameWrapper: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  petitionerParent: {
    marginLeft: -120,
    top: 444,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  disputeInLoan: {
    top: 136,
    left: 100,
    textDecoration: "underline",
    position: "absolute",
  },
  description: {
    height: 240,
    width: 320,
    position: "absolute",
    top: 0,
    left: 0,
  },
  descriptionWrapper: {
    height: 16,
    width: 320,
  },
  frameInner: {
    height: 2,
    width: 320,
  },
  loremIpsumHg: {
    alignSelf: "stretch",
    flex: 1,
  },
  loremIpsumHgWrapper: {
    width: 319,
    height: 216,
  },
  frameGroup: {
    top: 191,
    left: 22,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  formDisputeScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default FormDisputeScreen;
