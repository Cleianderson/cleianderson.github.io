declare module 'react-alert-template-basic';

declare type MainState = {
    userPassword: string | undefined,
    selectedPage: 'weeks' | 'warns' | 'suggestions' | 'answers'
}

declare type MainRootState = {
    mainState: MainState,
}