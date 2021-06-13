import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {CommonStyles, Colors} from '../../Styles';
import {Card} from '../../Components/Card';

const arr = [1, 2, 3, 4, 5, 7, 8, 8, 9];

const Camera: React.FC = () => {
  const renderList = ({item, index}) => {
    return <Card key={index} />;
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <FlatList data={arr} renderItem={renderList} numColumns={2} key={2} />
    </View>
  );
};

export default Camera;
