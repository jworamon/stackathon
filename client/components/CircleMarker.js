import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';

const CircleMarker = (props) => {
    return (
            <Svg height="100" width="100" opacity={0.85} fill={props.fill} >
                <Circle cx="22" cy="22" r="20" stroke="lightgrey" strokeWidth="1.5"/>
                <Text
                    x="22"
                    y="27"
                    fontSize="15"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill='black'
                >
                    {props.pm25}
                </Text>

            </Svg>
    )
}

export default CircleMarker;