import { View, Text } from "react-native";

import styles from "./opcenito.style";

const Opcenito = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {
          <View style={styles.pointWrapper} key={points.kljuc}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{points.ime}</Text>
          </View>
        }
      </View>
    </View>
  );
};

export default Opcenito;