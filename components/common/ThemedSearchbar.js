import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform } from 'react-native';

import { 
    COLOR_TEXT,
    COLOR_SURFACE_TOP,
    COLOR_INACTIVE,
    COLOR_BORDER
 } from '../../Theme';

export default function ThemedSearchBar({ ...props }) {
    return (
        <SearchBar
            platform= {Platform.OS == 'ios' ? 'ios': 'android'}
            containerStyle={{
                backgroundColor: 'transparent',
            }}
            lightTheme='false'
            keyboardAppearance='dark'
            inputContainerStyle={{
                backgroundColor: COLOR_SURFACE_TOP,
                borderColor: COLOR_BORDER,
            }}
            inputStyle={{ 
                color: COLOR_TEXT,
            }}
            placeholderTextColor={COLOR_INACTIVE}
            clearIcon={{
                color: COLOR_INACTIVE,
            }}
            searchIcon={{
                color: COLOR_INACTIVE,
            }}
            cancelIcon={{
                color: COLOR_INACTIVE,
            }}
            cancelButtonProps={{
                buttonTextStyle: {
                    color: COLOR_TEXT
                }
            }}
            {...props}
        />
    );
}