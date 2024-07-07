import * as React from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { Padding } from "../GlobalStyles"; // Add this line

const SectionHeader = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const glossaryTerms = [
    { title: "Glossary terms" },
    { title: "Interest rate fixing method" },
    { title: "Dispute Resolution Mechanism" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/iconarrowleft.png")} />
        <Text style={styles.headerText}>Welcome John Doe</Text>
        <Image source={require("../assets/iconhome.png")} />
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Your Summary</Text>
        <View style={styles.summaryDetails}>
          <Text style={styles.summaryDetail}>Investments:</Text>
          <Text style={styles.summaryDetail}>Loan Amount:</Text>
          <Text style={styles.summaryDetail}>Disputes:</Text>
        </View>
      </View>
      <View style={styles.glossaryTerms}>
        <FlatList
          data={glossaryTerms}
          renderItem={({ item }) => (
            <SectionHeader title={item.title} onPress={() => {}} />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
      <Pressable style={styles.allDisputes} onPress={() => {}}>
        <Text style={styles.allDisputesText}>All Disputes</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_16,
  },
  headerText: {
    fontSize: FontSize.size_18,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    color: Color.colorBlack,
    marginLeft: 111,
  },
  summary: {
    padding: Padding.p_16,
  },
  summaryText: {
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    color: Color.colorBlack,
    marginBottom: 8,
  },
  summaryDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  summaryDetail: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    color: Color.colorGray_100,
    marginBottom: 8,
    marginRight: 16,
    width: "45%",
  },
  glossaryTerms: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  sectionHeader: {
    padding: Padding.p_12,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    color: Color.colorBlack,
  },
  allDisputes: {
    padding: Padding.p_12,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    alignSelf: "flex-start",
    marginLeft: 16,
    marginTop: 20,
  },
  allDisputesText: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 24,
    letterSpacing: -0.2,
    color: Color.colorBlack,
  },
});

export default HomeScreen;
