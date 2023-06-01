import { useEffect, useState, useMemo } from "react";

interface DietProps {
    id: string,
    hour: string,
    value: string,
    inDiet: boolean
}

interface MealsProps {
    title: string,
    data: DietProps[]
}

export function useMeals(){
    const mockMeals: MealsProps[] = [
        {
          title: '12.08.22',
          data: [
            {   
                id: '1',
                hour: '20:00',
                value: 'X-Tudo',
                inDiet: false
            },
            {   
                id: '2',
                hour: '21:00',
                value: 'Sequela',
                inDiet: false
            },
            {   
                id: '3',
                hour: '21:00',
                value: 'Chocolate',
                inDiet: false
            }
          ],
        },
        {
            title: '20.08.22',
            data: [
              {   
                  id: '1',
                  hour: '12:00',
                  value: 'Alaminuta',
                  inDiet: true
              },
              {   
                id: '2',
                hour: '12:00',
                value: 'Salada',
                inDiet: true
            }
            ],
            
          },
    ];

    const [ meals, setMeals ] = useState<MealsProps[]>([])
    const [ sequenceInDiet, setSequenceInDiet ] = useState(2)

    const limiar = 50

    const stats = useMemo(() => {
        const totalMeals = meals.reduce((acc, item) => [...acc, ...item.data], [])
        const mealsInDiet = totalMeals.filter(item => item.inDiet)
        const mealsOutDiet = totalMeals.filter(item => !item.inDiet)

        return {
            percentInDiet: (100 * mealsInDiet.length) / totalMeals.length,
            mealsOutDiet: mealsOutDiet.length,
            mealsInDiet: mealsInDiet.length,
            sequence: sequenceInDiet
        } 

    },  [meals])

    function handleSequence(meal: DietProps){
        meal.inDiet ? setSequenceInDiet( sequenceInDiet + 1) : setSequenceInDiet(0)
    }

    function getMeals(){
        setMeals(mockMeals)
    }

    function createMeal(meal: MealsProps){
        //setMeals([...meals, meal])
        //handleSequence(meal.data[0])
    }

    useEffect(() => {
        getMeals()
        
    }, [])

    return {
        meals,
        stats,
        limiar,
        createMeal
    }
}