import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import JobCard from "../components/JobCard";
import SearchInput from "../components/SearchInput";
import useFetchJobs from "../hooks/useFetchJobs";

const Home = () => {
  const { jobs, error } = useFetchJobs();
  const [filters, setFilters] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Add filter on click
  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  // Remove filter
  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters([]);
    setSearchText("");
  };

  // Search when "Enter" is pressed
  const handleKeyDown = (e) => {
    if (e.nativeEvent.key === "Enter" && searchText.trim() !== "") {
      addFilter(searchText.trim());
      setSearchText("");
    }
  };

  // Filter jobs based on search
  const filteredJobs = jobs.filter((job) => {
    const jobDetails = [
      job.company,
      job.position,
      job.role,
      job.level,
      job.contract,
      job.location,
      ...job.languages,
      ...job.tools,
    ].map((item) => item.toLowerCase());

    const lowerCaseFilters = filters.map((filter) => filter.toLowerCase());

    return lowerCaseFilters.every((filter) =>
      jobDetails.some((jobDetail) => jobDetail.includes(filter))
    );
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Job Listing APP</Text>
        </View>

          {/* Main Content */}
          <View style={styles.mainContainer}>
            {/* Search Input */}
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
              filters={filters}
              removeFilter={removeFilter}
              clearFilters={clearFilters}
              handleKeyDown={handleKeyDown}
            />

            {/* Job List */}
            {error ? (
              <View style={styles.messageContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : filteredJobs.length === 0 ? (
              <View style={styles.messageContainer}>
                <Text style={styles.errorText}>No Jobs Found!</Text>
              </View>
            ) : (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} addFilter={addFilter} />
              ))
            )}
          </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFFAFA",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "#2C3A3A",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 4, height: 4},
    textShadowRadius: 4,
  },
  mainContainer: {
    padding: 16,
  },
  messageContainer: {
    backgroundColor: "#EFFAFA",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3A3A",
  },
});
