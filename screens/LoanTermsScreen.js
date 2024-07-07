import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LoanTermsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loanTermsScreen, styles.iconLayout1]}>
      <View style={[styles.loanTermsScreenChild, styles.loanLayout]} />
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
      <View style={[styles.groupParent, styles.tPosition]}>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>T</Text>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanDetailsScreen")}
        >
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>D</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanStatementScreen")}
        >
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>S</Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanHistoryScreen")}
        >
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>H</Text>
        </Pressable>
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
      <View style={[styles.loanTermsScreenItem, styles.loanLayout]} />
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
      <Text style={[styles.loanTermsOf, styles.loanTermsOfTypo]}>
        Loan Terms of Account 1
      </Text>
      <View style={styles.frameGroup}>
        <View style={styles.tdsWillNotBeDeductedAndIWrapper}>
          <Text style={[styles.tdsWillNot, styles.willTypo]}>
            TDS will not be deducted and it is responsibility of the lender
          </Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestWillBePaidAtLumpsWrapper}>
          <Text style={styles.willTypo}>Interest will be paid at Lumpsum</Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestWillBePaidAtLumpsWrapper}>
          <Text style={[styles.theLockInPeriod, styles.willTypo]}>
            The lock-in period for the loan account is 6 months
          </Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestWillBePaidAtLumpsWrapper}>
          <Text style={[styles.theLockInPeriod, styles.willTypo]}>
            No extra-charges will be levied on the borrower for taxes
          </Text>
        </View>
      </View>
      <View style={styles.lenderAcceptanceDateDec5Wrapper}>
        <Text
          style={styles.loanTermsOfTypo}
        >{`Lender acceptance date: Dec. 5, 2023
Borrower acceptance date: Dec. 8, 2023`}</Text>
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
  tPosition: {
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
  loanTermsOfTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  willTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  loanTermsScreenChild: {
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
    top: 4,
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
    backgroundColor: Color.colorDeepskyblue,
    width: 40,
    borderWidth: 1,
    top: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
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
  rectangleView: {
    width: 40,
    borderWidth: 1,
    top: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.neutralsWhite,
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
  loanTermsScreenItem: {
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
  loanTermsOf: {
    top: 136,
    left: 100,
    textDecoration: "underline",
    position: "absolute",
  },
  tdsWillNot: {
    alignSelf: "stretch",
    flex: 1,
  },
  tdsWillNotBeDeductedAndIWrapper: {
    width: 320,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameItem: {
    height: 2,
    marginTop: 8,
    width: 320,
  },
  interestWillBePaidAtLumpsWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  theLockInPeriod: {
    flex: 1,
  },
  frameGroup: {
    top: 191,
    left: 22,
    position: "absolute",
  },
  lenderAcceptanceDateDec5Wrapper: {
    top: 444,
    left: 19,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  loanTermsScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default LoanTermsScreen;
