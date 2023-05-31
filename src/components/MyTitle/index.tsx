import { Text } from 'native-base'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'
import { memo } from 'react'

interface MyTitleProps extends InterfaceTextProps {
    value: string
}

function MyTitleComponent({ value, ...props }: MyTitleProps){
    return (
        <Text fontSize={'16px'} {...props}>{value}</Text>
    )
}

export const MyTitle = memo(MyTitleComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
})