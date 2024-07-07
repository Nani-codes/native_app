import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DisputeDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.disputeDetailsScreen, styles.iconLayout1]}>
      <View style={[styles.disputeDetailsScreenChild, styles.disputeLayout]} />
      <View style={[styles.frameParent, styles.groupWrapperFlexBox]}>
        <Pressable
          style={[styles.groupWrapper, styles.groupWrapperFlexBox]}
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
          style={[styles.groupContainer, styles.groupWrapperFlexBox]}
          onPress={() => navigation.navigate("AllInvestmentsScreen")}
        >
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.groupBorder]} />
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
          <View style={[styles.groupInner, styles.groupBorder]} />
          <Text style={[styles.t, styles.tPosition]}>T</Text>
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("LoanDetailsScreen")}
        >
          <View style={[styles.groupInner, styles.groupBorder]} />
          <Text style={[styles.t, styles.tPosition]}>D</Text>
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("LoanStatementScreen")}
        >
          <View style={[styles.groupInner, styles.groupBorder]} />
          <Text style={[styles.t, styles.tPosition]}>S</Text>
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("LoanHistoryScreen")}
        >
          <View style={[styles.groupInner, styles.groupBorder]} />
          <Text style={[styles.t, styles.tPosition]}>H</Text>
        </Pressable>
        <View style={styles.groupPressable}>
          <View style={[styles.groupChild3, styles.groupBorder]} />
          <Text style={[styles.t, styles.tPosition]}>D</Text>
        </View>
      </View>
      <View style={[styles.disputeDetailsScreenItem, styles.disputeLayout]} />
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
      <Text style={[styles.disputeDetailsOf, styles.descriptionTypo]}>
        Dispute Details of record 1
      </Text>
      <View style={styles.frameView}>
        <View style={styles.referenceLoanAccountNo1Wrapper}>
          <Text
            style={[styles.referenceLoanAccount, styles.descriptionTypo]}
          >{`Reference Loan account No.: 1
Amount in dispute: 50000
Dispute raised date: March 15, 2023`}</Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={[styles.frameWrapper, styles.wrapperLayout]}>
          <View style={[styles.descriptionWrapper, styles.wrapperLayout]}>
            <Text
              style={[styles.description, styles.descriptionTypo]}
            >{`Description:
 `}</Text>
          </View>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.ageOfDispute1Years2MonWrapper}>
          <Text
            style={[styles.referenceLoanAccount, styles.descriptionTypo]}
          >{`Age of Dispute: 1 Years, 2 Months, 21 Days
Total Amount: 52000 Rs.
Dispute Closing date: Active
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
  xyzTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  groupBorder: {
    top: 4,
    height: 40,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
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
  descriptionTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  wrapperLayout: {
    height: 72,
    width: 322,
  },
  disputeDetailsScreenChild: {
    top: 583,
  },
  groupChild: {
    top: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
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
  },
  frameChild: {
    width: 1,
    height: 57,
    marginLeft: 20,
  },
  groupItem: {
    width: 190,
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
  },
  frameParent: {
    top: 586,
    width: 360,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  groupInner: {
    width: 40,
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
    marginLeft: 25,
    width: 40,
    height: 48,
  },
  groupChild3: {
    backgroundColor: "#fb5454",
    width: 40,
  },
  groupParent: {
    marginLeft: -149,
    top: 68,
    flexDirection: "row",
    overflow: "hidden",
  },
  disputeDetailsScreenItem: {
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
  disputeDetailsOf: {
    top: 136,
    left: 100,
    textDecoration: "underline",
    position: "absolute",
  },
  referenceLoanAccount: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  referenceLoanAccountNo1Wrapper: {
    width: 268,
    height: 80,
  },
  frameItem: {
    width: 320,
    height: 2,
    marginTop: 9,
  },
  description: {
    alignSelf: "stretch",
    flex: 1,
  },
  descriptionWrapper: {
    padding: Padding.p_3xs,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  frameWrapper: {
    marginTop: 9,
  },
  ageOfDispute1Years2MonWrapper: {
    width: 317,
    height: 108,
    marginTop: 9,
  },
  frameView: {
    top: 185,
    left: 22,
    position: "absolute",
  },
  disputeDetailsScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default DisputeDetailsScreen;
