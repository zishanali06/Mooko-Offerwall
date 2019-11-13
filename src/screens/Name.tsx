import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface NameProps {
    name: string
}

const Name: React.SFC<NameProps> = (props) => {
    return (
            <Text style={{color: 'black'}}>{props.name}</Text>
    );
}

export default Name;