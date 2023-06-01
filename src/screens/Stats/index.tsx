import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { Feather } from '@expo/vector-icons'
import { InfoPanel } from "../../components/InfoPanel";
import { MyTitle } from "../../components/MyTitle";
import { useNavigation } from "@react-navigation/native";
import { useMeals } from "../Home/hooks/useMeals";

export function Stats(){
    const theme = useTheme()
    const { stats, limiar } = useMeals()
    const { goBack } = useNavigation() 

    return (
        <Box flex={1} bgColor={stats.percentInDiet < limiar ? 'red.300' : 'green.300'}>
            <InfoPanel 
                mt={'36px'} 
                value={`${stats.percentInDiet.toFixed(2)}%`}
                bgColor={stats.percentInDiet < limiar ? 'red.300' : 'green.300'}
                infoFontSize={'32px'}
                description="das refeições dentro da dieta"
                leftIcon={
                    <Feather 
                        name="arrow-left" 
                        onPress={goBack} 
                        color={stats.percentInDiet < limiar ? theme.colors.red[800] : theme.colors.green[800]} 
                        size={24}
                    />}
            />
            <VStack flex={1} space={2} pt={10} bgColor={'gray.800'} borderTopRadius={20} px={'24px'}>
                <MyTitle fontWeight={'bold'} pb={5} textAlign={'center'} value="Estatísticas gerais" />
                <InfoPanel
                    value={String(stats.mealsInDiet)}
                    bgColor="gray.500"
                    infoColor={'gray.100'}
                    description="melhor sequência de pratos dentro de dieta"
                />
                <InfoPanel
                    value={String(stats.mealsOutDiet)}
                    infoColor={'gray.100'}
                    bgColor="gray.500"
                    description="refeições registradas"
                />
                <HStack space={2}>
                    <InfoPanel
                        w={'49%'}
                        value={String(stats.mealsInDiet)}
                        bgColor="green.100"
                        description="refeições dentro da dieta"

                    />
                    <InfoPanel
                        w={'49%'}
                        value={String(stats.mealsOutDiet)}
                        bgColor="red.100"
                        description="refeições fora da dieta"

                    />
                </HStack>
            </VStack>
        </Box>
    )
}