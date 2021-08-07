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
import ImagePicker from 'react-native-image-crop-picker';
import CameraRoll from '@react-native-community/cameraroll';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {CommonStyles, Colors} from '../../Styles';
import {FlashMode, CameraType} from '../../Constants';

import {APP_ROUTES} from '../../Helpers/RouteHelpers';
import {upload} from '../../Store/actions';

import CameraIcon from '../../Assets/camera-white.png';
import CameraRetake from '../../Assets/camera-retake.png';
import UploadIcon from '../../Assets/upload.png';
import SwitchCamera from '../../Assets/switch-camera.png';

interface CameraProps {
  upload: Function;
}

const Camera: React.FC<CameraProps> = (props) => {
  const {upload} = props;

  const cameraRef = useRef<any>(null);
  const [camera, setCamera] = useState(CameraType.BACK);
  const [flashEnabled, setFlashEnabled] = useState(FlashMode.OFF);
  const [takenImage, setTakenImage] = useState({path: '', base64: ''});
  const [preview, setPreview] = useState<string>('');
  const navigation = useNavigation();

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
        .catch((error) => {});
    };

    initialize();
  }, []);

  const openPicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
    })
      .then((image: any) => {
        setTakenImage({path: image.path, base64: image.data});
      })
      .catch((err) => {});
  };

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
      const options = {base64: true, mirrorImage: true};
      let data;

      try {
        data = await cameraRef.current.takePictureAsync(options);
      } catch (err) {
        return;
      }

      setTakenImage({path: data.uri, base64: data.base64});
    }
  };

  const handleUpload = () => {
    const data = new FormData();
    let source = {
      uri: takenImage.path,
      name: 'media',
      type: 'image/png',
    };
    data.append('img', source as any);

    upload(data);
  };

  const toggleCamera = () => {
    if (camera === CameraType.BACK) {
      setCamera(CameraType.FRONT);
    } else {
      setCamera(CameraType.BACK);
    }
  };

  const imageHeight = takenImage && takenImage.path && {height: 50};

  return (
    <View style={[CommonStyles.flexOne]}>
      <View style={CommonStyles.flexOne}>
        <View style={[styles.header, imageHeight as any]}>
          {!takenImage.path && (
            <TouchableOpacity onPress={toggleCamera}>
              <Image style={[styles.switchCamera]} source={SwitchCamera} />
            </TouchableOpacity>
          )}
        </View>

        {takenImage?.path ? (
          <Image
            source={{uri: takenImage.path}}
            style={CommonStyles.flexOne}
            resizeMode="cover"
          />
        ) : (
          <RNCamera
            ref={cameraRef}
            type={camera}
            flashMode={flashEnabled}
            style={CommonStyles.flexOne}
          />
        )}
      </View>
      <View style={[styles.footer]}>
        {!takenImage.path && (
          <TouchableOpacity onPress={openPicker}>
            <Image style={styles.preview} source={{uri: preview}} />
          </TouchableOpacity>
        )}

        {Boolean(takenImage?.path) && (
          <TouchableOpacity onPress={handleUpload}>
            <Image source={UploadIcon} style={styles.upload} />
          </TouchableOpacity>
        )}

        {takenImage?.path ? (
          <TouchableOpacity
            onPress={() => setTakenImage({path: '', base64: ''})}>
            <Image source={CameraRetake} style={styles.retake} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={takePicture}>
            <Image source={CameraIcon} style={[styles.camera]} />
          </TouchableOpacity>
        )}

        {/* For Alignment */}
        <TouchableOpacity style={{width: 40, height: 40}}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    flexDirection: 'row',
    backgroundColor: Colors.black,
  },
  switchCamera: {
    marginTop: 10,
    width: 40,
    height: 40,
    marginLeft: 2,
    tintColor: 'white',
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
  upload: {
    width: 55,
    height: 55,
    alignSelf: 'flex-start',
  },
  retake: {
    width: 55,
    height: 55,
    alignSelf: 'center',
  },
});

const mapDispatchToProps = {
  upload,
};

export default connect(null, mapDispatchToProps)(Camera);
