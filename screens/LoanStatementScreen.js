import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const LoanStatementScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loanStatementScreen, styles.iconLayout1]}>
      <View style={[styles.loanStatementScreenChild, styles.loanLayout]} />
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
      <View style={[styles.loanStatementScreenItem, styles.loanLayout]} />
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
      <Text style={[styles.loanStatementOf, styles.disputeTypo]}>
        Loan Statement of Account 1
      </Text>
      <View style={styles.instanceParent}>
        <View style={[styles.frameGroup, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text, styles.textContainerTypo]}>SNo</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              {" "}
              Amount
            </Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>Date</Text>
          </View>
          <View style={[styles.disputeWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute, styles.disputeTypo]}>Remarks</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>1</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>50000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              20/05/24
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>2</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>1000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              18/06/23
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>3</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>3000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              15/04/23
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>4</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>50000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              18/02/23
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>Cash</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>5</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>25000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              23/06/23
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>6</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>75000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              15/04/23
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text3, styles.textContainerTypo]}>7</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>60000</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textContainerTypo]}>
              27/09/23
            </Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.dispute, styles.disputeTypo]}>xxx0500</Text>
          </View>
        </View>
      </View>
      <View style={styles.principalAmountDuea8400Parent}>
        <Text
          style={[
            styles.principalAmountDueaContainer,
            styles.textContainerTypo,
          ]}
        >
          <Text
            style={styles.principalAmountDuea}
          >{`Principal Amount due(a) : `}</Text>
          <Text style={styles.text24}>840000</Text>
        </Text>
        <Text
          style={[
            styles.interestAccruedDuebContainer,
            styles.textContainerTypo,
          ]}
        >
          <Text
            style={styles.principalAmountDuea}
          >{`Interest Accrued due(b) : `}</Text>
          <Text style={styles.text24}>32900</Text>
        </Text>
        <Text
          style={[styles.totalAmountDueabContainer, styles.textContainerTypo]}
        >
          <Text
            style={styles.principalAmountDuea}
          >{`Total Amount due(a+b) : `}</Text>
          <Text style={styles.text24}>872900</Text>
        </Text>
      </View>
      <View style={[styles.groupParent, styles.tPosition]}>
        <Pressable
          style={styles.rectangleContainer}
          onPress={() => navigation.navigate("LoanTermsScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tTypo]}>T</Text>
        </Pressable>
        <View style={[styles.groupView, styles.groupViewSpaceBlock]}>
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Pressable
            style={[styles.d, styles.tPosition]}
            onPress={() => navigation.navigate("LoanDetailsScreen")}
          >
            <Text style={styles.tTypo}>D</Text>
          </Pressable>
        </View>
        <View style={[styles.groupView, styles.groupViewSpaceBlock]}>
          <View style={[styles.groupChild1, styles.groupPosition]} />
          <Text style={[styles.t, styles.tTypo]}>S</Text>
        </View>
        <Pressable
          style={[styles.groupView, styles.groupViewSpaceBlock]}
          onPress={() => navigation.navigate("LoanHistoryScreen")}
        >
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.t, styles.tTypo]}>H</Text>
        </Pressable>
        <View style={[styles.vectorParent, styles.groupViewSpaceBlock]}>
          <Image
            style={[styles.rectangleIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Pressable
            style={[styles.d, styles.tPosition]}
            onPress={() => navigation.navigate("FormDisputeScreen")}
          >
            <Text style={[styles.rd1, styles.rd1Typo]}>RD</Text>
          </Pressable>
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
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
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
  wrapperFlexBox: {
    padding: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  textContainerTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  tTypo: {
    marginLeft: -9,
    marginTop: -24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  groupViewSpaceBlock: {
    marginLeft: 25,
    height: 48,
  },
  rd1Typo: {
    marginTop: -24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  loanStatementScreenChild: {
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
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 4,
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
  loanStatementScreenItem: {
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
  loanStatementOf: {
    marginLeft: -109,
    top: 121,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textDecoration: "underline",
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.colorGray_100,
  },
  wrapper: {
    borderRightWidth: 1,
    borderColor: Color.colorSilver,
    padding: Padding.p_8xs,
    borderStyle: "solid",
  },
  text1: {
    color: Color.colorBlack,
    flex: 1,
  },
  dispute: {
    fontFamily: FontFamily.wFBodyBodyMedium,
    textAlign: "center",
    flex: 1,
  },
  disputeWrapper: {
    borderColor: Color.colorSilver,
    padding: Padding.p_8xs,
    borderStyle: "solid",
    borderWidth: 1,
  },
  frameGroup: {
    borderWidth: 2,
  },
  text3: {
    color: Color.colorLimegreen,
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
  principalAmountDuea: {
    color: Color.colorBlack,
  },
  text24: {
    color: Color.colorMediumslateblue,
    textDecoration: "underline",
  },
  principalAmountDueaContainer: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  interestAccruedDuebContainer: {
    top: 30,
    left: 1,
    position: "absolute",
  },
  totalAmountDueabContainer: {
    top: 58,
    left: 2,
    position: "absolute",
  },
  principalAmountDuea8400Parent: {
    top: 457,
    left: 30,
    width: 252,
    height: 82,
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
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  rectangleContainer: {
    width: 40,
    height: 48,
  },
  d: {
    top: "50%",
    left: "50%",
  },
  groupView: {
    width: 40,
  },
  groupChild1: {
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
  rd1: {
    marginLeft: -22,
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
  loanStatementScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default LoanStatementScreen;
