import { Avatar, Box, HStack, Image, useTheme, Text, VStack, SectionList, Pressable } from "native-base";
import Logo from '../../assets/Logo.png'
import { StatusBar } from "react-native";
import { InfoPanel } from "../../components/InfoPanel";
import { MyButton } from "../../components/MyButton";
import { Ionicons } from '@expo/vector-icons'
import { useMeals } from "./hooks/useMeals";
import { MyListItem } from "../../components/MyListItem";
import { Feather } from '@expo/vector-icons'
import { MyTitle } from "../../components/MyTitle";
import { useNavigation } from "@react-navigation/native";

function HeaderComponent() {
    const theme = useTheme()
    const { stats, limiar } = useMeals()
    const { navigate } = useNavigation()

    return (
        <>
            <HStack justifyContent={'space-between'} alignItems={'center'} paddingTop={'66px'}>
                <Image source={Logo} alt="Logo" w={'82px'} h={'37px'}/>
                <Avatar borderWidth={3} borderColor={'white'}/>
            </HStack>

            <Pressable onPress={() => navigate('stats')}>
                <InfoPanel
                    mt={'36px'}
                    value={`${stats.percentInDiet.toFixed(2)}%`}
                    bgColor={stats.percentInDiet < limiar ? 'red.300' : 'green.300'}
                    infoFontSize={'32px'}
                    description="das refeições dentro da dieta"
                    rightIcon={
                        <Feather 
                            name="arrow-up-right" 
                            color={stats.percentInDiet < limiar ? theme.colors.red[800] : theme.colors.green[800]} size={24}
                        />
                    }
                />
            </Pressable>
            
            <VStack mt={'40px'} space={'20px'}>
                <MyTitle value="Refeições"/>
                <MyButton 
                    onPress={() => navigate('createmeal')}
                    title="Nova refeição"
                    size={'lg'}
                    bgColor={'gray.600'} 
                    leftIcon={<Ionicons name="md-add" size={24} color={theme.colors.gray[100] }/>}
                />
            </VStack>
        </>
    )
}

export function Home(){
    const theme = useTheme()
    const { meals } = useMeals()
    const { navigate } = useNavigation()

    return (
        <Box flex={1} bgColor={'gray.900'} paddingX={'20px'}>
            <StatusBar 
                barStyle="light-content"
                translucent={true}
                backgroundColor={'transparent'}
            />
            
            <SectionList
                ListHeaderComponent={HeaderComponent}
                sections={meals}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, section }) => (
                    <Pressable mb={'10px'} onPress={() => console.log({ item, section })}>
                        <MyListItem 
                            hour={item.hour}
                            value={item.value}
                            statusColor={item.inDiet ? theme.colors.green[300] : theme.colors.red[300]}
                        />
                    </Pressable>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text fontSize={18} mb={'10px'} mt={'40px'}>{title}</Text>
                )}
            />

        </Box>
    )
}