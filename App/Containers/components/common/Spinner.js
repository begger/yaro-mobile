//@flow
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

type Props = {
    size: string
}

export const Spinner = ({ size } : Props) => {
    const { spinnerStyle } = styles;
    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size} />
        </View>
    );
};

Spinner.defaultProps = {
    size: 'large'
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
