import React, { ReactNode, ReactNodeArray } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

interface InputGroupProps {
  style?: StyleProp<ViewStyle>;
}

const InputGroup: React.FC<InputGroupProps> = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      {(children as ReactNodeArray).map((node, index) => (
        <View key={index}>
          {index !== 0 && <View style={styles.divider} />}
          {React.cloneElement(node as React.ReactElement<any>, {
            noBorder: true,
          })}
        </View>
      ))}
    </View>
  );
};

export default InputGroup;
