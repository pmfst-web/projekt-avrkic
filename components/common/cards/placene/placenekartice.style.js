import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (odabran, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: odabran === item.job_id ? COLORS.white : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  containerManji: (odabran, item) => ({
    width: 250,
    height: 50,
    padding: SIZES.xLarge,
    backgroundColor: odabran === item.job_id ? COLORS.white : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (odabran, item) => ({
    width: 50,
    height: 50,
    backgroundColor: odabran === item.job_id ? "#172" : COLORS.white,

    borderRadius: SIZES.medium,
    justifyContent: "space-around",
    alignItems: "center",
    display:"flex"
  }),
  logoContainer1: (odabran, item) => ({
    width: 150,
    height: 150,
    backgroundColor: odabran === item.job_id ? "#892" : COLORS.white,

    borderRadius: SIZES.medium,
    justifyContent: "space-around",
    alignItems: "center",
    display:"flex"
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (odabran, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: odabran === item.job_id ? COLORS.white : COLORS.primary,
    
  }),
  jobNameDesno: (odabran, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: odabran === item.job_id ? COLORS.white : COLORS.primary,
    alignSelf:"flex-end"
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (odabran) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: odabran === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
