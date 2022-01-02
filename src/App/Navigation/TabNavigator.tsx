import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import {Colors} from '../Styles';

import Settings from '../Screens/Settings/Settings';
import UploadStack from '../Navigation/UploadStack';
import HomeStack from '../Navigation/HomeStack';
import {locateCurrentPosition} from '../Services/locationService';
import {setLocation, updateFcm} from '../Store/actions';

import CameraIcon from '../Assets/camera.png';
import GalleryIcon from '../Assets/gallery.png';
import GearIcon from '../Assets/gear.png';

interface props {
  setLocation: Function;
  updateFcm: Function;
}

const BottomTabs = createBottomTabNavigator();

const renderIcon = (source: any, focused: boolean) => {
  return (
    <Image
      source={source}
      style={{
        width: 30,
        height: 30,
        ...(focused && {tintColor: Colors.primary}),
      }}
    />
  );
};

const Tabs: React.FC<props> = (props) => {
  const {setLocation, updateFcm} = props;

  useEffect(() => {
    async function initialize() {
      locateCurrentPosition()
        .then((res: any) => {
          setLocation(res);
        })
        .catch((err) => {
          Snackbar.show({
            text: err.message,
            duration: Snackbar.LENGTH_SHORT,
          });
        });
    }

    initialize();
  }, []);

  useEffect(() => {
    const getToken = async () => {
      try {
        const enabled = await messaging().hasPermission();

        if (!enabled) {
          await messaging().requestPermission();
        }
        let fcmToken = await messaging().getToken();

        if (fcmToken) {
          updateFcm({FcmToken: fcmToken});
        }
      } catch (err) {}
    };

    getToken();
  }, []);

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
      }}>
      <BottomTabs.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={() => {
          return {
            tabBarIcon: ({focused}) => renderIcon(GalleryIcon, focused),
          };
        }}
      />
      <BottomTabs.Screen
        name={'Upload'}
        component={UploadStack}
        options={() => {
          return {
            tabBarIcon: ({focused}) => renderIcon(CameraIcon, focused),
          };
        }}
      />

      <BottomTabs.Screen
        name={'Settings'}
        component={Settings}
        options={() => {
          return {
            tabBarIcon: ({focused}) => {
              return renderIcon(GearIcon, focused);
            },
          };
        }}
      />
    </BottomTabs.Navigator>
  );
};

const mapDispatchToProps = {
  setLocation,
  updateFcm,
};

export default connect(null, mapDispatchToProps)(Tabs);
