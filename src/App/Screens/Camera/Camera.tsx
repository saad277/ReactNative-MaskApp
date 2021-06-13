import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {CommonStyles, Colors} from '../../Styles';
import {FlashMode, CameraType} from '../../Constants';

const Camera: React.FC = (props) => {
  const cameraRef = useRef(null);

  const [camera, setCamera] = useState(RNCamera.Constants.Type.back);
  const [flashEnabled, setFlashEnbled] = useState(
    RNCamera.Constants.FlashMode.off,
  );

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      // const data = await cameraRef.takePictureAsync(options);
      // console.log(data.uri);
    }
  };

  return (
    <View style={[CommonStyles.flexOne]}>
      <View style={CommonStyles.flexOne}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          style={CommonStyles.flexOne}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.4,
    backgroundColor: Colors.black,
  },
});

export default Camera;
