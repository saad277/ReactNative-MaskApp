import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {CommonStyles, Colors} from '../../Styles';
import {FlashMode, CameraType} from '../../Constants';

const Camera: React.FC = (props) => {
  const cameraRef = useRef<any>(null);

  const [camera, setCamera] = useState(CameraType.BACK);
  const [flashEnabled, setFlashEnabled] = useState(FlashMode.OFF);

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      // console.log(data.uri);
    }
  };

  return (
    <View style={[CommonStyles.flexOne]}>
      <View style={CommonStyles.flexOne}>
        <View style={styles.header}></View>
        <RNCamera
          ref={cameraRef}
          type={camera}
          flashMode={flashEnabled}
          style={CommonStyles.flexOne}
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: Colors.black,
  },
  footer: {
    flex: 0.18,
    backgroundColor: Colors.black,
  },
});

export default Camera;
