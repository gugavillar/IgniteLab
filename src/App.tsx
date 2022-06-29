import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { client } from './libs/apollo'

import Router from './components/Router'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
