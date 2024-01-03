import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useJobs from "../hooks/useJobs";
import JobsCard from "../components/JobsCard";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [
    jobs,
    errorMessage,
    isLoading,
    search,
    setSearch,
    category,
    setCategory,
    searchJobs,
  ] = useJobs();

  const loadingComponent = (
    <View style={styles.loading}>
      <Text style={styles.textWhite}>Loading please wait ...</Text>
    </View>
  );

  const errorComponent = (
    <View style={styles.loading}>
      <Text style={styles.textWhite}>
        Your API limit reached try again later
      </Text>
    </View>
  );

  if (errorMessage) return errorComponent;

  if (isLoading) return loadingComponent;

  const filterJobs = (searchValue) => {
    const filList = jobs?.filter((jobDetails) => {
      const {
        title,
        company_name,
        category,
        job_type,
        candidate_required_location,
        salary,
      } = jobDetails;

      if (
        title?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        company_name?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        category?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        job_type?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        candidate_required_location
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase()) ||
        salary?.toLowerCase()?.includes(searchValue?.toLowerCase())
      )
        return true;
      return false;
    });

    setFilteredJobs(filList);
    setSearch(searchValue);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          {/* <SearchBar
            value={category}
            onChange={(value) => setCategory(value)}
            onSubmit={searchJobs}
            placeholder="Get new jobs"
            containerStyle={styles.categorySearch}
          /> */}
          <SearchBar
            value={search}
            onChange={(value) => filterJobs(value)}
            onSubmit={() => filterJobs(search)}
            placeholder="Search"
          />
        </View>
        <FlatList
          keyExtractor={(item) => item?.id}
          data={search?.length === 0 ? jobs : filteredJobs}
          refreshing={loadingComponent}
          initialNumToRender={7}
          renderItem={({ item }) => <JobsCard jobDetails={item} />}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categorySearch: {
    marginRight: 10,
  },
  loading: {
    padding: 10,
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  textWhite: {
    color: "white",
  },
  companyLogo: {
    width: 100,
    height: 100,
  },
});

export default SearchScreen;
