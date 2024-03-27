import { 
    createContext, 
    useContext, 
    useEffect, 

    useState 
} from "react";

export const TelegramContext = createContext({});

export const TelegramProvider = ({children}) => {
    const [webApp, setWebApp] = useState(null);

    useEffect(() => {
        const app = window?.Telegram?.WebApp;
        console.log(app);
        if (app) {
            app.ready();
            setWebApp(app);
        }
    }, []);

    return (
        <TelegramContext.Provider value={{
            webApp,
            unsafeData: webApp?.initDataUnsafe,
            user: webApp?.initDataUnsafe?.user
        }}>
            {children}
        </TelegramContext.Provider>
    );
};
  
export const useTelegram = () => useContext(TelegramContext);