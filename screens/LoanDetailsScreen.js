import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoanDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loanDetailsScreen, styles.iconLayout1]}>
      <View style={[styles.loanDetailsScreenChild, styles.loanLayout]} />
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
        <Pressable
          style={styles.rectangleContainer}
          onPress={() => navigation.navigate("LoanTermsScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>T</Text>
        </Pressable>
        <View style={[styles.groupView, styles.groupViewSpaceBlock]}>
          <View style={[styles.rectangleView, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>D</Text>
        </View>
        <Pressable
          style={[styles.groupView, styles.groupViewSpaceBlock]}
          onPress={() => navigation.navigate("LoanStatementScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>S</Text>
        </Pressable>
        <Pressable
          style={[styles.groupView, styles.groupViewSpaceBlock]}
          onPress={() => navigation.navigate("LoanHistoryScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tPosition]}>H</Text>
        </Pressable>
        <View style={[styles.vectorParent, styles.groupViewSpaceBlock]}>
          <Image
            style={[styles.rectangleIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Pressable
            style={[styles.rd, styles.tPosition]}
            onPress={() => navigation.navigate("FormDisputeScreen")}
          >
            <Text style={[styles.rd1, styles.tTypo]}>RD</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.loanDetailsScreenItem, styles.loanLayout]} />
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
      <Text style={[styles.loanDetailsOf, styles.loanDetailsOfTypo]}>
        Loan Details of Account 1
      </Text>
      <View style={styles.frameView}>
        <View style={styles.principalAmount50000RsRaWrapper}>
          <Text
            style={[styles.principalAmount50000, styles.loanDetailsOfTypo]}
          >{`Principal Amount: 50000 Rs.
Rate of Interest: 12% per Annum
Loan start date: March 15, 2023`}</Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.ifCashIgnoreTheseFieldsLWrapper}>
          <Text
            style={[styles.principalAmount50000, styles.loanDetailsOfTypo]}
          >{`If Cash ignore these fields.
Lender Ac. Details: hdfc123456_222333
Borrower Ac. Details: icic111111_500500 `}</Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestAccrued2000RsAgeWrapper}>
          <Text
            style={[styles.principalAmount50000, styles.loanDetailsOfTypo]}
          >{`Interest Accrued: 2000 Rs.
Age of Account: _ Years, _ Months, _ Days
Total Amount: 52000 Rs.
Loan Closing date: Active
Dispute Status: Nil`}</Text>
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
  groupViewSpaceBlock: {
    marginLeft: 25,
    height: 48,
  },
  tTypo: {
    marginTop: -24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  loanDetailsOfTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    position: "absolute",
  },
  loanDetailsScreenChild: {
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
    top: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.neutralsWhite,
  },
  investments: {
    marginLeft: -91,
    top: "50%",
    left: "50%",
    marginTop: -24,
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
    top: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.neutralsWhite,
  },
  t: {
    marginLeft: -9,
    top: "50%",
    left: "50%",
    marginTop: -24,
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
    backgroundColor: Color.colorDeepskyblue,
    width: 40,
    borderWidth: 1,
    top: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  groupView: {
    width: 40,
  },
  rectangleIcon: {
    width: 60,
  },
  rd1: {
    marginLeft: -22,
  },
  rd: {
    top: "50%",
    left: "50%",
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
  loanDetailsScreenItem: {
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
  loanDetailsOf: {
    top: 136,
    left: 100,
    textDecoration: "underline",
  },
  principalAmount50000: {
    top: 0,
    left: 0,
  },
  principalAmount50000RsRaWrapper: {
    width: 238,
    height: 80,
  },
  frameItem: {
    width: 320,
    height: 2,
    marginTop: 9,
  },
  ifCashIgnoreTheseFieldsLWrapper: {
    width: 298,
    marginTop: 9,
    height: 80,
  },
  interestAccrued2000RsAgeWrapper: {
    width: 310,
    height: 136,
    marginTop: 9,
  },
  frameView: {
    top: 185,
    left: 22,
    position: "absolute",
  },
  loanDetailsScreen: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.neutralsWhite,
  },
});

export default LoanDetailsScreen;
