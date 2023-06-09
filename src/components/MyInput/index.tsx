import React from 'react'
import { Input } from 'native-base'
import { Controller, Control, FieldValues, Path  } from 'react-hook-form'
import { ErrorMessage } from '../ErrorMessage';
import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

interface MyInputProps<T extends FieldValues> {
  control: Control<T, any>;
  placeholder?: string;
  InputRightElement?: JSX.Element | JSX.Element[] | undefined;
  secureTextEntry?: boolean;
  name: Path<T>;
  type?: InterfaceInputProps['type'];
  errorMessage?: string;
  defaultValue?: string;
  editable?: boolean
}

export function MyInput<T extends FieldValues>({
  control,
  placeholder,
  InputRightElement,
  secureTextEntry,
  name,
  errorMessage,
  type,
  defaultValue,
  editable
}: MyInputProps<T>){

  return (
    <>
      <Controller 
        control={control}
        render={({ field: { onChange, onBlur, value, }, }) => {
          return (
            <Input
              defaultValue={defaultValue}
              isInvalid={Boolean(errorMessage)}
              onBlur={onBlur}
              borderColor={'gray.500'}
              selectionColor={'green.300'}
              cursorColor={'#F4E6E7'}
              bgColor={'transparent'}
              editable={editable}
              isDisabled={Boolean(defaultValue)}
              fontSize={'16px'} 
              type={type}
              secureTextEntry={secureTextEntry}
              InputRightElement={InputRightElement}
              _focus={{
                placeholderTextColor: 'gray.100',
                borderColor: 'green.300',
                cursorColor: '#F4E6E7',
                selectionColor: 'green.300'

              }} 
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
            />
          )}}
        name={name}
      />
      {errorMessage && <ErrorMessage message={errorMessage}/>}
    </>
  )
}