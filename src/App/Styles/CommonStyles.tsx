import React from 'react';
import {StyleSheet} from 'react-native';

export const CommonStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexOne: {
    flex: 1,
  },
  flexHalf: {
    flex: 0.5,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
});
