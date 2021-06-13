import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;

import {CommonStyles, Colors} from '../../Styles';

const Card: React.FC = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.2}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1603367433513-5f273ceaedb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          }}
          style={styles.image}
        />
        <Text style={[CommonStyles.alignSelfCenter, styles.text]}> Card</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth / 2.2,
    height: 200,
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: 6,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default Card;
