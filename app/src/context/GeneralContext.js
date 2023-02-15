import { createContext } from 'react';

export const GeneralContext = () => {

const AppContext = createContext();

return (
    <AppContext.Provider value={}>
    </AppContext.Provider>
);

} 
