import * as Font from 'expo-font';

const useCustomFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Lato-Bold': require('./assets/Lato/Lato-Bold.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
}, []);

    return fontsLoaded;
   
};


export default useCustomeFonts;