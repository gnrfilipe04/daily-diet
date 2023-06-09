import { Box, Button, FormControl, HStack, Modal, Pressable, Text, VStack, View, useTheme } from "native-base";
import { Feather, FontAwesome } from '@expo/vector-icons'
import { InfoPanel } from "../../components/InfoPanel";
import { MyTitle } from "../../components/MyTitle";
import { useNavigation } from "@react-navigation/native";
import { useMeals } from "../Home/hooks/useMeals";
import { MyInput } from "../../components/MyInput";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MyTextArea } from "../../components/MyTextArea";
import { MyButton } from "../../components/MyButton";
import { DatePicker } from "../../components/DatePicker";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export interface MealFormData {
    name: string
    description: string
    date: string
    hour: string
    inDiet: boolean
}

export function CreateMeal() {
    const theme = useTheme()
    const { stats, limiar } = useMeals()
    const { goBack } = useNavigation()

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
            
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    const createMealFormSchema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        description: yup.string().required('Descrição é obrigatória'),
        date: yup.string().required('Data é obrigatória'),
        hour: yup.string().required('Hora é obrigatória'),
        inDiet: yup.boolean().required('Selecione se a refeição está dentro da dieta')
    })

    const { control, formState: { errors } } = useForm<MealFormData>({
        resolver: yupResolver(createMealFormSchema)
    })

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

            <VStack flex={1} justifyContent={'space-between'} bgColor={'gray.800'} borderTopRadius={20} px={'24px'} py={10}>
                <VStack space={2}>
                    <FormControl.Label>Nome</FormControl.Label>
                    <MyInput
                        control={control}
                        name='name'
                        errorMessage={errors.name?.message}
                    />

                    <FormControl.Label>Descrição</FormControl.Label>
                    <MyTextArea
                        control={control}
                        name='description'
                        errorMessage={errors.description?.message}
                    />

                    <HStack space={'5px'}>

                        <VStack flex={1} space={'5px'}>
                            <FormControl.Label>Data</FormControl.Label>
                            <Pressable onPress={showDatepicker}>
                                <MyInput
                                    editable={false}
                                    control={control}
                                    name='date'
                                    errorMessage={errors.date?.message}
                                />
                            </Pressable>
                        </VStack>

                        <VStack flex={1} space={'5px'}>
                            <FormControl.Label>Horas</FormControl.Label>
                            <MyInput
                                control={control}
                                name='hour'
                                errorMessage={errors.hour?.message}
                            />
                        </VStack>

                    </HStack>

                    <VStack space={'5px'}>
                        <FormControl.Label>Está dentro da dieta?</FormControl.Label>
                        <HStack space={'5px'}>

                            <View flex={1}>
                                <MyButton
                                    title="Sim"
                                    leftIcon={<FontAwesome name='circle' color={theme.colors.green[800]} />}
                                    py={'20px'}
                                    bgColor={'gray.600'} />
                            </View>

                            <View flex={1}>
                                <MyButton
                                    title="Não"
                                    leftIcon={<FontAwesome name='circle' color={theme.colors.red[800]} />}
                                    py={'20px'}
                                    bgColor={'gray.600'} />
                            </View>

                        </HStack>

                    </VStack>
                </VStack>
                <MyButton
                    title="Cadastrar nova refeição"
                    size={'lg'}
                    bgColor={'gray.600'}
                    py={'20px'}

                />
            </VStack>
        </Box>
    )
}