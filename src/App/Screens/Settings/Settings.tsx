import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {CommonStyles} from '../../Styles';

import {Button} from '../../Components/Button';
import {Header} from '../../Components/Header';

interface props {
  user: {
    UserName: string;
  };
}

const Settings: React.FC<props> = (props) => {
  const {user} = props;

  return (
    <View style={styles.container}>
      <Header title={user.UserName || '-'} />

      <View style={styles.wrapper}>
        <View />

        <Button title={'Update'} onPress={() => {}} style={styles.btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...CommonStyles.flexOne,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  btn: {
    alignSelf: 'center',
    marginBottom: 12,
  },
});

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Settings);
