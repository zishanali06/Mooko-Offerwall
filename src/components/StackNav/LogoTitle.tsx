import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

interface LogoTitleProps {

}

const LogoTitle: React.SFC<LogoTitleProps> = (props) => {

    return (
        <Image source={{uri: 'https://mooko.media/wp-content/uploads/2019/08/Mooko_Logo_Hi_Res_Transparent_BG.png'}} style={{width: 60, height: 30}} />
    );
}

export default LogoTitle;


