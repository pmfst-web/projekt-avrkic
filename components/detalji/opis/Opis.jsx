import { View, Text } from "react-native";

import styles from "./opis.style";

const Opis = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Opis trenera:</Text>

      <View style={styles.pointsContainer}>
        {
          <View style={styles.pointWrapper} key={info.kljuc}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>Način treniranja: {info.nacin}</Text>
          </View>
        }

      </View>
      <Text style={styles.contextText}>{info.kratkiOpis}</Text>
      </View>

  );
};

export default Opis;