import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { Feather } from '@expo/vector-icons'
import { InfoPanel } from "../../components/InfoPanel";
import { MyTitle } from "../../components/MyTitle";

export function Stats(){
    const theme = useTheme()

    return (
        <Box flex={1} bgColor={'green.100'}>
            <InfoPanel 
                mt={'36px'} 
                value="91,20%"
                bgColor="green.100"
                infoFontSize={'32px'}
                leftIcon={<Feather name="arrow-left" color={theme.colors.green[800]} size={24}/>}
            />
            <VStack flex={1} space={2} pt={10} bgColor={'gray.800'} borderTopRadius={20} px={'24px'}>
                <MyTitle fontWeight={'bold'} pb={5} textAlign={'center'} value="Estatísticas gerais" />
                <InfoPanel
                    value="22"
                    bgColor="gray.500"
                    infoColor={'gray.100'}
                />
                <InfoPanel
                    value="109"
                    infoColor={'gray.100'}
                    bgColor="gray.500"
                />
                <HStack space={2}>
                    <InfoPanel
                        w={'49%'}
                        value="99"
                        bgColor="green.100"
                    />
                    <InfoPanel
                        w={'49%'}
                        value="10"
                        bgColor="red.100"
                    />
                </HStack>
            </VStack>
        </Box>
    )
}