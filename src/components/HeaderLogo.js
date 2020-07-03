import React from 'react';

import {COLOR_TEXT} from '../components/Theme';
import SpotterTitle from "../../assets/spotter-title.svg";

export default function HeaderLogo({...props}){
    return (
        <SpotterTitle color={COLOR_TEXT} {...props} />
    );
}