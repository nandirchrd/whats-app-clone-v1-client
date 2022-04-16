import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
}

.landing-page{
    margin-top: 1em;
    display: flex;
    flex-direction: column;
}

.home{
    overflow: hidden;
    display: flex;
    width: 100%;
    min-height: 100vh;
}
.home.chat-list{
    flex: 4;
}
.home.conversation{
    flex: 8;
}
textarea:focus, input:focus, select:focus{
    outline: none;
}

`;

export default Global;
