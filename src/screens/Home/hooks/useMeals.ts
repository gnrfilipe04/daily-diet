import { useEffect, useState, useMemo } from "react";

export function useMeals(){
    const mockMeals = [
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

    const [ meals, setMeals ] = useState([] as typeof mockMeals)

    const percentInDiet = useMemo(() => {
        const totalMeals = meals.reduce((acc, item) => [...acc, ...item.data], [])
        const mealsInDiet = totalMeals.filter(item => item.inDiet)

        return  (100 * mealsInDiet.length) / totalMeals.length


    },  [meals])

    function getMeals(){
        setMeals(mockMeals)
    }

    useEffect(() => {
        getMeals()
        
    }, [])

    return {
        meals,
        percentInDiet
    }
}