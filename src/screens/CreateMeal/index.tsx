import { Box, HStack, Input, Text, VStack, useTheme } from "native-base";
import { Feather } from '@expo/vector-icons'
import { InfoPanel } from "../../components/InfoPanel";
import { MyTitle } from "../../components/MyTitle";
import { useNavigation } from "@react-navigation/native";
import { useMeals } from "../Home/hooks/useMeals";

export function CreateMeal(){
    const theme = useTheme()
    const { stats, limiar } = useMeals()
    const { goBack } = useNavigation() 

    return (
        <Box flex={1} bgColor={'gray.500'}>
            <Box h={'132px'} justifyContent={'space-between'} pt={10} alignItems={'center'} flexDir={'row'} px={'24px'}>
                <Feather 
                    name="arrow-left" 
                    onPress={goBack} 
                    color={theme.colors.gray[100]} 
                    size={24}
                />
                <MyTitle fontWeight={'bold'} fontSize={'18px'} textAlign={'center'} value="Nova refeição" />
                <Box />
            </Box>

            <VStack flex={1} space={2} pt={10} bgColor={'gray.800'} borderTopRadius={20} px={'24px'}>
                
            </VStack>
        </Box>
    )
}