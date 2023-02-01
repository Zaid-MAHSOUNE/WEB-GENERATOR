import { useState } from 'react';

export const useContainer = (initialValue = "Containers") => {
    const [type,setType] = useState(initialValue);

    const typeChanger = (type) => {
        setType(type);
    }

    return {type, typeChanger};
}