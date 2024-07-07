import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AllInvestmentsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.allInvestmentsScreen, styles.iconLayout1]}>
      <View style={[styles.allInvestmentsScreenChild, styles.allLayout]} />
      <View style={[styles.frameParent, styles.groupFlexBox]}>
        <Pressable
          style={[styles.groupWrapper, styles.groupFlexBox]}
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
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.groupBorder]} />
            <Text style={[styles.investments, styles.investmentsPosition]}>
              Investments
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.allInvestmentsScreenItem, styles.allLayout]} />
      <View style={[styles.iconArrowLeftParent, styles.parentFlexBox]}>
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
        style={[styles.welcomeJohnDoe, styles.disputeTypo]}
      >{`Welcome John Doe
All Investment Accounts`}</Text>
      <View style={[styles.instanceParent, styles.parentFlexBox]}>
        <View style={[styles.frameGroup, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>ID</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>
              Investment Amount
            </Text>
          </View>
          <View style={[styles.disputeWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute, styles.disputeTypo]}>
              Raise Dispute
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>50000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute1, styles.disputeTypo]}>Dispute</Text>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>100000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute2, styles.disputeTypo]}>Dispute</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>30000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute2, styles.disputeTypo]}>Dispute</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>4</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>500000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute2, styles.disputeTypo]}>Dispute</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>25000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute2, styles.disputeTypo]}>Dispute</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>6</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>75000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute2, styles.disputeTypo]}>Dispute</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>7</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>60000</Text>
          </View>
          <View style={[styles.disputeContainer, styles.wrapperFlexBox]}>
            <Text style={[styles.dispute2, styles.disputeTypo]}>Dispute</Text>
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
  allLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupBorder: {
    height: 40,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.neutralsWhite,
  },
  xyzTypo: {
    textAlign: "left",
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
  },
  investmentsPosition: {
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
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
    fontFamily: FontFamily.wFBodyBodyMedium,
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
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  textTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.wFBodyBodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  allInvestmentsScreenChild: {
    top: 583,
  },
  groupChild: {
    top: 5,
    width: 105,
  },
  loans: {
    top: 0,
    left: 5,
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 48,
    letterSpacing: -0.3,
    fontSize: FontSize.size_13xl,
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
    textAlign: "left",
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
    backgroundColor: Color.colorDeepskyblue,
    marginLeft: 20,
  },
  frameParent: {
    top: 586,
    width: 360,
    flexDirection: "row",
    left: 0,
    justifyContent: "center",
    position: "absolute",
  },
  allInvestmentsScreenItem: {
    top: 61,
  },
  iconArrowLeft: {
    overflow: "hidden",
  },
  xyz: {
    marginLeft: 111,
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
    flexDirection: "row",
  },
  welcomeJohnDoe: {
    marginLeft: -90,
    top: 83,
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    color: Color.colorGray_100,
  },
  wrapper: {
    borderRightWidth: 1,
    borderColor: Color.colorSilver,
    padding: Padding.p_8xs,
  },
  text1: {
    color: Color.colorBlack,
    flex: 1,
  },
  dispute: {
    color: Color.colorBlack,
    flex: 1,
  },
  disputeWrapper: {
    borderColor: Color.colorSilver,
    padding: Padding.p_8xs,
    borderWidth: 1,
  },
  frameGroup: {
    borderWidth: 2,
  },
  text2: {
    color: Color.colorLimegreen,
  },
  dispute1: {
    color: Color.colorSnow,
    flex: 1,
  },
  disputeContainer: {
    backgroundColor: Color.colorRed,
    borderColor: Color.neutralsWhite,
    borderWidth: 5,
  },
  frameContainer: {
    borderWidth: 1,
  },
  dispute2: {
    color: Color.neutralsWhite,
    flex: 1,
  },
  frameParent1: {
    borderWidth: 1,
    backgroundColor: Color.neutralsWhite,
  },
  instanceParent: {
    top: 155,
    left: 22,
    borderRadius: Border.br_7xs,
  },
  allInvestmentsScreen: {
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default AllInvestmentsScreen;
