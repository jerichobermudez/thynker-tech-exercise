import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const JobCard = ({
  job,
  addFilter
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.position}>{job.position}</Text>
      <Text style={styles.details}>{job.role} • {job.level} • {job.contract}</Text>
      <Text style={styles.details}>{job.location}</Text>

      <View style={styles.filters}>
        {[job.role, job.level, ...job.languages, ...job.tools].map((filter) => (
          <Button key={filter} title={filter} onPress={() => addFilter(filter)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  company: {
    fontSize: 16,
    fontWeight: "bold",
  },
  position: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    color: "#777",
    marginTop: 5,
  },
  filters: {
    flexDirection: "row",
    marginTop: 15,
  },
});

export default JobCard;
