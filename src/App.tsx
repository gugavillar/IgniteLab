import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { client } from './libs/apollo'

import Header from './components/Header'
import Router from './components/Router'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
