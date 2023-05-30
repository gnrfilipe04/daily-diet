import { Avatar, Box, HStack, Image } from "native-base";
import Logo from '../../assets/Logo.png'

export function Home(){
    return (
        <Box flex={1} bgColor={'gray.900'}>
            <HStack marginTop={20}>
                <Image source={Logo} alt="Logo" />
                <Avatar />
            </HStack>
        </Box>
    )
}