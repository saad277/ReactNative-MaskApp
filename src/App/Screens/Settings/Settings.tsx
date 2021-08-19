import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {CommonStyles, Colors} from '../../Styles';

import {Button} from '../../Components/Button';
import {Header} from '../../Components/Header';

import Avatar from '../../Assets/avatar.png';
import Pencil from '../../Assets/pencil.png';

interface props {
  user: {
    UserName: string;
    Email: string;
  };
}

const Settings: React.FC<props> = (props) => {
  const {user} = props;

  const renderField = (label: string, text: string) => {
    return (
      <View
        style={{
          backgroundColor: Colors.light,
          padding: 12,
          marginBottom: 15,
          marginHorizontal: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 17}}>
          {label} : {text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Profile'} />

      <View style={styles.wrapper}>
        <View style={CommonStyles.relative}>
          <Image source={Avatar} style={styles.img} resizeMode="cover" />
          <TouchableOpacity style={styles.editContainer}>
            <Image source={Pencil} style={styles.editIcon} />
          </TouchableOpacity>
        </View>

        <View>
          {renderField('Name', user.UserName)}
          {renderField('Email', user.Email)}
        </View>

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
  img: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: 10,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginBottom: 12,
  },
  editContainer: {
    position: 'absolute',
    bottom: -10,
    right: '30%',
    backgroundColor: Colors.light,
    borderRadius: 100,
    padding: 6,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
});

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Settings);
