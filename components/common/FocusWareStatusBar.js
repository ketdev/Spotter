import * as React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? < StatusBar {...props} /> : null;
  }