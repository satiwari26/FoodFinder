import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary:{   //blue
            100: "#014E5F",
            200: "#028090",
            300: '#003F4C',
            400:  '#006D82', 
            500: '#0098B5',
            600:  '#00C3E0',
        },
        secondary:{ //green
                50: '#E8F5E9',
                100: '#C8E6C9',
                200: '#A5D6A7',
                300: '#81C784',
                400: '#66BB6A',
                500: '#4CAF50',
                600: '#43A047',
                700: '#388E3C',
                800: '#2E7D32',
                900: '#1B5E20',
              }, 
        gray: { //gray for background mostly
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121"
          }
    },
    typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            }
    }
});