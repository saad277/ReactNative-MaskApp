import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface TagProps {
  text: string;
  safe?: boolean;
}

const Tag: React.FC<TagProps> = (props) => {
  const {text = '', safe = false} = props;

  const bgColor = safe ? '#4db6ac' : '#e57373';

  return (
    <View style={[styles.tagContainer, {backgroundColor: bgColor}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },

  tagContainer: {
    height: 60,
    borderRadius: 18,
    alignItems: 'center',
    width: 150,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Tag;
