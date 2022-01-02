import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from "moment"

import {CommonStyles, Colors} from '../../Styles';

const screenWidth = Dimensions.get('window').width;

const Card: React.FC = (props) => {
  const {Img,CreatedAt} = props;

  return (
    <TouchableOpacity activeOpacity={0.2}>
      <View style={styles.cardContainer}>
        <Image
          source={{uri: `data:image/gif;base64,${Img}`}}
          style={styles.image}
        />
        <Text style={styles.text}> {moment(CreatedAt).format("DD-MM-YYYY")}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth / 2.2,
    height: 210,
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: 6,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    ...CommonStyles.alignSelfCenter,
    marginTop:10,
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 6,
    marginTop: 10,
    ...CommonStyles.alignSelfCenter,
  },
});

export default Card;
