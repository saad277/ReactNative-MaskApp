import {RNCamera} from 'react-native-camera';

export enum CameraType {
  BACK = RNCamera.Constants.Type.back,
  FRONT = RNCamera.Constants.Type.front,
}

export enum FlashMode {
  ON = RNCamera.Constants.FlashMode.on,
  OFF = RNCamera.Constants.FlashMode.off,
}
