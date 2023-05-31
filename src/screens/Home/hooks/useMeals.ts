import { useEffect, useState } from "react";

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
              }
            ],
          },
    ];

    const [ meals, setMeals ] = useState([] as typeof mockMeals)

    function getMeals(){
        setMeals(mockMeals)
    }

    useEffect(() => {
        getMeals()
    }, [])

    return {
        meals
    }
}