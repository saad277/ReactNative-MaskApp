import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {CommonStyles} from '../../Styles';

import {Tag} from '../../Components/Tag';
import {Button} from '../../Components/Button';
import {OverlayLoader} from '../../Components/OverlayLoader';
import {uploadToEval} from '../../Store/actions';
import {LocalNotification} from '../../Services/notification';

const ClassifiedDetails: React.FC = (props) => {
  const {route, navigation, uploadToEval, user, location}: any = props;

  const [loading, setLoading] = useState(false);

  const classified = route?.params?.classified;
  //const base64 = route?.params?.image?.base64;
  //const path = route?.params?.image?.path;
  const withMask = route?.params?.mask;
  const withoutMask = route?.params?.withoutMask;

  const handleUpload = () => {
    setLoading(true);

    let payload = {
      Description: 'string',
      Location: location?.longitude && location?.latitude ? location : {},
      Area: 'string',
      WithMask: withMask,
      WithoutMask: withoutMask,
      Img: classified,
    };

    uploadToEval(payload)
      .then(({Data}: any) => {
        LocalNotification(
          Data.Status === 1 ? 'green' : Data.Status === 2 ? 'yellow' : 'red',
        );
        navigation.goBack();
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ScrollView>
      {loading && <OverlayLoader />}
      <View style={styles.container}>
        <Image
          source={{uri: `data:image/gif;base64,${classified}`}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.cardContainer}>
          <Tag text={`With Mask ${withMask || 0}`} safe={true} />
          <Tag text={`Without Mask ${withoutMask || 0}`} />
        </View>
        <Button
          title="Upload"
          style={styles.uploadBtn}
          onPress={handleUpload}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexOne,
    backgroundColor: 'white',
  },
  cardContainer: {
    marginHorizontal: 10,
    ...CommonStyles.flexRow,
    ...CommonStyles.justifyBetween,
  },
  image: {
    width: '100%',
    height: 300,
  },
  uploadBtn: {
    marginTop: 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

const mapDispatchToProps = {
  uploadToEval,
};

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
    location: state.location.location,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassifiedDetails);
