import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const FormTermsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.formTermsScreen, styles.iconLayout1]}>
      <View style={[styles.formTermsScreenChild, styles.formLayout]} />
      <View style={styles.frameParent}>
        <Pressable
          style={styles.groupWrapper}
          onPress={() => navigation.navigate("AllLoansScreen")}
        >
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <Text style={[styles.loans, styles.containerTypo]}>Loans</Text>
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
        <Pressable
          style={[styles.groupPressable, styles.vectorParentSpaceBlock]}
          onPress={() => navigation.navigate("LoanHistoryScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
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
      <View style={[styles.formTermsScreenItem, styles.formLayout]} />
      <View style={styles.iconArrowLeftParent}>
        <Image
          style={[styles.iconArrowLeft, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconarrowleft.png")}
        />
        <Text style={[styles.xyz, styles.containerTypo]}>XYZ</Text>
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
        style={[styles.termsOfNew, styles.termsOfNewTypo]}
      >{`Terms of New Loan Account `}</Text>
      <View style={styles.frameGroup}>
        <View style={styles.tdsDeductionYesNoNoWrapper}>
          <Text style={[styles.tdsDeductionYes, styles.tdsDeductionYesTypo]}>
            TDS Deduction (Yes/ No): No
          </Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.rateOfInterest12PerAnnuWrapper}>
          <Text style={[styles.tdsDeductionYes, styles.tdsDeductionYesTypo]}>
            Rate of Interest: 12% per annum
          </Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestWillBePaidAtLumWrapper}>
          <Text style={styles.containerTypo}>
            <Text
              style={styles.interestWillBe}
            >{`Interest will be paid at : Lumpsum
`}</Text>
            <Text style={styles.monthlyQuarterlyHal}>
              (Monthly/ Quarterly/ Hal yearly/ Annually/ Lumpsum)
            </Text>
          </Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestWillBePaidAtLumWrapper}>
          <Text style={styles.tdsDeductionYesTypo}>
            The lock-in period for the loan (Months): 6
          </Text>
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <View style={styles.interestWillBePaidAtLumWrapper}>
          <Text style={[styles.taxesExtraScopeContainer, styles.containerTypo]}>
            <Text style={styles.interestWillBe}>{`Taxes Extra scope : Lender
`}</Text>
            <Text style={styles.monthlyQuarterlyHal}>(Lender/ Borrower)</Text>
          </Text>
        </View>
      </View>
      <View style={styles.lenderAcceptanceBorrowerAccParent}>
        <Text style={styles.termsOfNewTypo}>{`Lender acceptance  
Borrower acceptance`}</Text>
        <View style={styles.frameContainer}>
          <View style={styles.frameLayout}>
            <View style={[styles.frameChild2, styles.frameLayout]} />
            <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
          </View>
          <View style={[styles.rectangleParent3, styles.frameLayout]}>
            <View style={[styles.frameChild2, styles.frameLayout]} />
            <Text style={[styles.submit1, styles.submitTypo]}>Submit</Text>
          </View>
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
  containerTypo: {
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
  vectorParentSpaceBlock: {
    marginLeft: 25,
    height: 48,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  termsOfNewTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  tdsDeductionYesTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    flex: 1,
  },
  frameLayout: {
    height: 25,
    width: 142,
  },
  submitTypo: {
    top: 1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  formTermsScreenChild: {
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
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
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
  formTermsScreenItem: {
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
    fontFamily: FontFamily.wFBodyBodyMedium,
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
  termsOfNew: {
    top: 136,
    left: 100,
    textDecoration: "underline",
    position: "absolute",
  },
  tdsDeductionYes: {
    alignSelf: "stretch",
  },
  tdsDeductionYesNoNoWrapper: {
    width: 320,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameItem: {
    height: 2,
    marginTop: 8,
    width: 320,
  },
  rateOfInterest12PerAnnuWrapper: {
    marginTop: 8,
    width: 320,
    flexDirection: "row",
    overflow: "hidden",
  },
  interestWillBe: {
    fontSize: FontSize.wFBodyBodyMedium_size,
  },
  monthlyQuarterlyHal: {
    fontSize: FontSize.size_xs,
  },
  interestWillBePaidAtLumWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  taxesExtraScopeContainer: {
    flex: 1,
  },
  frameGroup: {
    top: 191,
    left: 22,
    position: "absolute",
  },
  frameChild2: {
    backgroundColor: Color.colorGainsboro,
    top: 0,
    position: "absolute",
    left: 0,
  },
  submit: {
    left: 44,
  },
  submit1: {
    left: 40,
  },
  rectangleParent3: {
    marginTop: 8,
  },
  frameContainer: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  lenderAcceptanceBorrowerAccParent: {
    top: 444,
    left: 19,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  formTermsScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
    width: "100%",
  },
});

export default FormTermsScreen;
