import { View, Text } from "react-native";

import styles from "./opis.style";

const Opis = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Opis trenera:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info.kratkiOpis}</Text>
      </View>
    </View>
  );
};

export default Opis;