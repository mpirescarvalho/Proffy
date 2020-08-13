import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
  Text,
} from 'react-native';

import styles from './styles';

interface InputProps extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  labelKind?: 'placeholder' | 'floating' | 'outside';
  noBorder?: boolean;
  inputRef?: React.RefObject<TextInput>;
  textArea?: boolean;
}

//TODO: use animation for floating label

const Input: React.FC<InputProps> = ({
  inputStyle,
  containerStyle,
  label,
  value,
  onChangeText,
  labelKind = 'placeholder',
  noBorder,
  inputRef: inputRefProp,
  textArea,
  ...rest
}) => {
  const inputRef = inputRefProp || useRef<TextInput>(null);
  const [internalValue, setInternalValue] = useState(value ? value : '');
  const [focused, setFocused] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    setFloating(!!internalValue || !!focused);
  }, [internalValue, focused]);

  function handleOnChangeText(newValue: string) {
    if (onChangeText) {
      onChangeText(newValue);
    }
    setInternalValue(newValue);
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {focused && (
        <View
          style={[
            styles.focusIndicator,
            labelKind === 'outside' && styles.focusIndicatorOutsideLabel,
          ]}
        />
      )}
      {labelKind === 'outside' && (
        <Text style={styles.outsideLabel}>{label}</Text>
      )}
      {labelKind === 'floating' && (
        <Text
          onPress={() => inputRef.current?.focus()}
          style={[styles.floatingLabel, floating ? styles.floating : {}]}
        >
          {label}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        style={[
          styles.input,
          noBorder && styles.noBorder,
          labelKind === 'floating' && floating ? styles.inputFloating : {},
          textArea && styles.textArea,
          inputStyle,
        ]}
        value={internalValue}
        onChangeText={handleOnChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={labelKind === 'placeholder' ? label : undefined}
        placeholderTextColor="#9C98A6"
        multiline={!!textArea}
        numberOfLines={!!textArea ? 20 : 1}
        {...rest}
      />
    </View>
  );
};

export default Input;
