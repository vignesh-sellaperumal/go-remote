import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { EvilIcons } from "@expo/vector-icons";

const JobsCard = ({ jobDetails = {} }) => {
  const navigation = useNavigation();

  const {
    id,
    url,
    title,
    company_name,
    category,
    publication_date,
    candidate_required_location,
    salary,
  } = jobDetails;

  const redirectToRemotive = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container} key={id}>
      <View style={styles.LeftContainer}>
        <Text style={{ ...styles.textWhite, ...styles.title }} numberOfLines={1}>{title}</Text>
        <Text style={{ ...styles.companyName, ...styles.textWhite }} numberOfLines={1}>
          {company_name}
        </Text>
        <Text style={styles.textWhite} numberOfLines={1}>{category}</Text>
        <Text style={styles.textWhite} numberOfLines={1}>{candidate_required_location}</Text>
        <Text style={{ ...styles.textWhite, ...styles.publishDate }} numberOfLines={1}>
          {moment(publication_date).fromNow()}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <View style={styles.redirectContainer} onPress={redirectToRemotive}>
            <Text style={styles.textWhite}>Remotive</Text>
            <EvilIcons name="external-link" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={styles.textWhite} numberOfLines={1}>{salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 30,
    borderColor: '#5c5a56',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#2a2a2b'
  },
  LeftContainer: {
    flex: 3,
    marginRight: 20,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textWhite: {
    color: "white",
  },
  redirectContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: '#767578',
    padding: 6,
    borderRadius: 4,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  publishDate: {
    marginTop: 6,
  },
  companyName: {
    fontWeight: 600,
    fontSize: 12,
    marginBottom: 2,
  },
});

export default JobsCard;
