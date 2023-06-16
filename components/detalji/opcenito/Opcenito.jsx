import { View, Text } from "react-native";

import styles from "./opcenito.style";

const Opcenito = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Općenito o treneru:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{points.duziOpis}</Text>
      </View>
    </View>
  );
};

export default Opcenito;