import React from 'react'
import { Input, TextArea } from 'native-base'
import { Controller, Control, FieldValues, Path  } from 'react-hook-form'
import { ErrorMessage } from '../ErrorMessage';
import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types';

interface MyTextAreaProps<T extends FieldValues> {
  control: Control<T, any>;
  placeholder?: string;
  InputRightElement?: JSX.Element | JSX.Element[] | undefined;
  secureTextEntry?: boolean;
  name: Path<T>;
  type?: InterfaceInputProps['type'];
  errorMessage?: string;
  defaultValue?: string
}

export function MyTextArea<T extends FieldValues>({
  control,
  placeholder,
  InputRightElement,
  secureTextEntry,
  name,
  errorMessage,
  type,
  defaultValue,
}: MyTextAreaProps<T>){

  return (
    <>
      <Controller 
        control={control}
        render={({ field: { onChange, onBlur, value, }, }) => {
          return (
            <TextArea
							autoCompleteType
              defaultValue={defaultValue}
              isInvalid={Boolean(errorMessage)}
              onBlur={onBlur}
              borderColor={'gray.500'}
              selectionColor={'green.300'}
              bgColor={'transparent'}
              isDisabled={Boolean(defaultValue)}
              placeholderTextColor={'gray.500'}
              fontSize={'16px'} 
              type={type}
              secureTextEntry={secureTextEntry}
              InputRightElement={InputRightElement}
              _focus={{
                placeholderTextColor: 'gray.100',
                borderColor: 'green.300',
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