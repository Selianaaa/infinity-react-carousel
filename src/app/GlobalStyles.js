import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Open Sans', sans-serif;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html, body{
        width: 100%;
        height: 100%;
    }

    #root{
        position: relative;
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle
