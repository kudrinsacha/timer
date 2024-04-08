import React from 'react';
import ReactDOM from 'react-dom/client';
//Эта строка импортирует ReactDOM из пакета react-dom/client, который используется для монтирования React-элементов в DOM. Обычно react-dom используется вместо react-dom/client, однако, в некоторых случаях, например, в средах с ограниченной поддержкой, можно использовать этот вариант.
import App from './app';
import GlobalStyles from './assets/styles/global.styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//Эта строка создаёт корневой элемент для рендеринга React-приложения. В данном случае, создаётся корневой элемент с идентификатором 'root', найденный в DOM.
root.render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>
);
//Эта строка рендерит React-элементы в созданный корневой элемент. <React.StrictMode> используется для включения строгого режима, который помогает выявить потенциальные проблемы в вашем приложении. <App /> рендерит основной компонент приложения, а <GlobalStyles /> рендерит глобальные стили.