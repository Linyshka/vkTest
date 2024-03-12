import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider appearance="dark">
    <AdaptivityProvider>
      <StrictMode>
        <App/>
      </StrictMode>
    </AdaptivityProvider>
  </ConfigProvider>
  ,
)
