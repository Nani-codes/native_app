import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const LoanHistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loanHistoryScreen, styles.iconLayout1]}>
      <View style={[styles.loanHistoryScreenChild, styles.loanLayout]} />
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
            <Text style={[styles.investments, styles.tPosition]}>
              Investments
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.loanHistoryScreenItem, styles.loanLayout]} />
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
      <Text style={[styles.loanHistoryOf, styles.disputeTypo]}>
        Loan History of Account 1
      </Text>
      <View style={styles.instanceParent}>
        <View style={[styles.frameGroup, styles.frameBorder]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>SNo</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Description</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Date</Text>
          </View>
          <View style={[styles.disputeWrapper, styles.disputeFlexBox]}>
            <Text style={[styles.dispute, styles.disputeTypo]}>Remarks</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text3, styles.textTypo]}>1</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text4, styles.xyzTypo]}>Loan Start</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>20/05/24</Text>
          </View>
          <View style={styles.disputeFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.frameBorder]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text3, styles.textTypo]}>2</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text4, styles.xyzTypo]}>
              Lender Terms Accepted
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>18/06/23</Text>
          </View>
          <View style={styles.disputeFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text3, styles.textTypo]}>3</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text4, styles.xyzTypo]}>
              Borrower Terms Accepted
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>15/04/23</Text>
          </View>
          <View style={styles.disputeFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text3, styles.textTypo]}>4</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text4, styles.xyzTypo]}>Payment 1</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>18/02/23</Text>
          </View>
          <View style={styles.disputeFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text3, styles.textTypo]}>5</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text4, styles.xyzTypo]}>Payment 2</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text1, styles.textTypo]}>23/06/23</Text>
          </View>
          <View style={styles.disputeFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.tPosition]}>
        <Pressable
          style={styles.rectangleContainer}
          onPress={() => navigation.navigate("FormTermsScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>T</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanDetailsScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>D</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanStatementScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>S</Text>
        </Pressable>
        <View style={[styles.groupPressable, styles.vectorParentSpaceBlock]}>
          <View style={[styles.groupChild2, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>H</Text>
        </View>
        <Pressable
          style={[styles.vectorParent, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("FormDisputeScreen")}
        >
          <Image
            style={[styles.rectangleIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Text style={[styles.rd, styles.tPosition]}>RD</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  loanLayout: {
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
  },
  groupPosition: {
    top: 4,
    height: 40,
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
  },
  tPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  disputeTypo: {
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    color: Color.colorBlack,
  },
  frameBorder: {
    width: 323,
    borderColor: Color.colorLightgray_200,
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  textTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  disputeFlexBox: {
    display: "none",
    padding: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  vectorParentSpaceBlock: {
    marginLeft: 25,
    height: 48,
  },
  loanHistoryScreenChild: {
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
    top: 0,
    left: 5,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    height: 48,
    width: 105,
  },
  groupWrapper: {
    alignSelf: "stretch",
    width: 117,
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
    top: 4,
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
  loanHistoryScreenItem: {
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
    textAlign: "left",
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
  loanHistoryOf: {
    marginLeft: -97,
    top: 121,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.colorGray_100,
  },
  wrapper: {
    borderRightWidth: 1,
    padding: Padding.p_8xs,
    borderColor: Color.colorSilver,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  text1: {
    color: Color.colorBlack,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    flex: 1,
  },
  dispute: {
    fontFamily: FontFamily.wFBodyBodyMedium,
    textAlign: "center",
    flex: 1,
  },
  disputeWrapper: {
    borderColor: Color.colorSilver,
    display: "none",
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameGroup: {
    borderWidth: 2,
  },
  text3: {
    color: Color.colorLimegreen,
  },
  text4: {
    fontSize: FontSize.size_xs,
    letterSpacing: -0.1,
    lineHeight: 18,
    flex: 1,
  },
  frameContainer: {
    borderWidth: 1,
  },
  frameParent1: {
    borderWidth: 1,
    backgroundColor: Color.neutralsWhite,
  },
  instanceParent: {
    top: 165,
    left: 18,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    position: "absolute",
  },
  groupInner: {
    width: 40,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 4,
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
  groupChild2: {
    backgroundColor: Color.colorDeepskyblue,
    width: 40,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 4,
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
  loanHistoryScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default LoanHistoryScreen;
