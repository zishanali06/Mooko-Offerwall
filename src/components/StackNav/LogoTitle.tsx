import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

interface LogoTitleProps {

}

const LogoTitle: React.SFC<LogoTitleProps> = (props) => {



    return (
        <Image source={require('../../../assets/mookologo.png')} style={{width: 60, height: 30}} />
    );
}

export default LogoTitle;


