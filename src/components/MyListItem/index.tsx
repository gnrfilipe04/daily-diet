import { HStack, Text } from "native-base"
import { memo } from "react"
import { FontAwesome } from '@expo/vector-icons'

interface MyListItemComponentProps {
    hour: string
    value: string
    statusColor: string
}

function MyListItemComponent({
    hour,
    value,
    statusColor
 }: MyListItemComponentProps){
    return (
        <HStack 
            justifyContent={'space-between'} 
            borderWidth={1} 
            borderRadius={4} 
            borderColor={'gray.500'}
            px={'16px'}
            py={'14px'}
            alignItems={'center'}
        >
            <HStack space={'15px'} alignItems={'center'}>
                <Text color={'white'} fontWeight={'bold'}>{hour}</Text>
                <Text fontSize={'16px'}>|</Text>
                <Text numberOfLines={1} maxW={'70%'} fontSize={'16px'}>{value}</Text>
            </HStack>
            <FontAwesome name="circle" color={statusColor} size={16}/>
        </HStack>
    )
}

export const MyListItem = memo(MyListItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
})