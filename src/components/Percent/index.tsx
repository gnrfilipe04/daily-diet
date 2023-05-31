import { Box, VStack, Text, ArrowForwardIcon, HStack } from "native-base";
import { Feather } from '@expo/vector-icons'
import { ColorValue } from "react-native";
import { ColorType } from "native-base/lib/typescript/components/types";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import { memo } from "react";

interface PercentProps extends InterfaceBoxProps {
    value: string
    iconColor: ColorValue
}

function PercentComponent({ value, backgroundColor, iconColor, ...props }: PercentProps){
    return (
        <Box borderRadius={'8px'} py={'20px'} px={'16px'} {...props}>
            <HStack justifyContent={'space-between'}>
                <Box/>
                <Feather name="arrow-up-right" color={iconColor} size={24}/>
            </HStack>
            <VStack alignItems={'center'}>
                <Text color={'gray.700'} fontSize={'32px'} fontWeight={'700'}>{value}</Text>
                <Text color={'gray.700'}>das refeições dentro da dieta</Text>
            </VStack>
        </Box>
    )
}

export const Percent = memo(PercentComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
})