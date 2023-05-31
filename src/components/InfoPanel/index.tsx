import { Box, VStack, Text, HStack, ITextProps } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import { memo } from "react";

interface PercentProps extends InterfaceBoxProps {
    value: string
    rightIcon?: JSX.Element
    leftIcon?: JSX.Element
    infoFontSize?: ITextProps['fontSize']
    infoColor?: ColorType
}

function InfoPanelComponent({ 
    value, 
    backgroundColor, 
    rightIcon, 
    leftIcon, 
    infoFontSize = '24px', 
    infoColor = 'gray.600',
    ...props 
}: PercentProps){
    return (
        <Box borderRadius={'8px'} py={'20px'} px={'16px'} {...props}>
            <HStack justifyContent={'space-between'}>
                {leftIcon}
                <Box/>
                {rightIcon}
            </HStack>
            <VStack alignItems={'center'}>
                <Text color={infoColor} fontSize={infoFontSize} textAlign={'center'} fontWeight={'700'}>{value}</Text>
                <Text color={infoColor} textAlign={'center'}>das refeições dentro da dieta</Text>
            </VStack>
        </Box>
    )
}

export const InfoPanel = memo(InfoPanelComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
})