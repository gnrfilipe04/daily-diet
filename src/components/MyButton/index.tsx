import { Button, IButtonProps } from "native-base";
import { memo } from "react";

interface MyButtonProps extends IButtonProps {
    title: string
}

function MyButtonComponent({ title, ...props }: MyButtonProps){
    return (
        <Button {...props}>{title}</Button>
    )
}

export const MyButton = memo(MyButtonComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
})