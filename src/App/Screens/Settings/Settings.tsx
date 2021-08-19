import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {CommonStyles} from '../../Styles';

import {Button} from '../../Components/Button';

interface props {
  user: object;
}

const Settings: React.FC<props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>

      <Button title={'Update'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...CommonStyles.flexOne,
  },
});

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Settings);
