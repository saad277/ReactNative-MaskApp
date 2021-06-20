import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

import {CommonStyles, Colors} from '../../Styles';
import {FlashMode, CameraType} from '../../Constants';

import CameraIcon from '../../Assets/camera-white.png';
import CameraRetake from '../../Assets/camera-retake.png';

const Camera: React.FC = (props) => {
  const cameraRef = useRef<any>(null);

  const [camera, setCamera] = useState(CameraType.BACK);
  const [flashEnabled, setFlashEnabled] = useState(FlashMode.OFF);
  const [takenImage, setTakenImage] = useState({path: ''});
  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    const initialize = async () => {
      await askPermission();
      CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',
      })
        .then((res) => {
          setPreview(res.edges[0].node.image.uri);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    initialize();
  }, []);

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
        return;
      }
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);

      setTakenImage({path: data.uri});
    }
  };

  return (
    <View style={[CommonStyles.flexOne]}>
      <View style={CommonStyles.flexOne}>
        <View style={styles.header}></View>

        {takenImage?.path ? (
          <Image source={{uri: takenImage.path}} style={CommonStyles.flexOne} />
        ) : (
          <RNCamera
            ref={cameraRef}
            type={camera}
            flashMode={flashEnabled}
            style={CommonStyles.flexOne}
          />
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image style={styles.preview} source={{uri: preview}} />
        </TouchableOpacity>
        {takenImage?.path ? (
          <TouchableOpacity onPress={() => setTakenImage({path: ''})}>
            <Image source={CameraRetake} style={styles.retake} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={takePicture}>
            <Image source={CameraIcon} style={styles.camera} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{width: 40, height: 40}}></TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preview: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginLeft: 2,
  },
  camera: {
    width: 55,
    height: 55,
    alignSelf: 'center',
  },
  retake: {
    width: 55,
    height: 55,
    alignSelf: 'center',
  },
});

export default Camera;
