import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {Card} from '../../Components/Card';

const arr = [1, 2, 3, 4, 5, 7, 8, 8, 9];

interface listItem {
  item: number;
  index: number;
}

const Camera: React.FC = () => {
  const renderList = ({_, index}: listItem) => {
    return <Card key={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        renderItem={renderList}
        numColumns={2}
        key={2}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Camera;
