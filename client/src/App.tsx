import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './views/Profile'
import Account from './views/Account'
import Paymethod from './views/Paymethod'
import Address from './views/Address'
import Notification from './views/Notification'
import Tab from './components/Tab'

const tabData = [
  {
    to: '/profile',
    title: '프로필',
  },
  {
    to: '/account',
    title: '계정',
  },
  {
    to: '/paymethod',
    title: '결제수단',
  },
  {
    to: '/address',
    title: '배송지',
  },
  {
    to: '/notification',
    title: '알림',
  },
]

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header className="container">
          <p className="title">설정</p>
          <Tab tabDataSet={tabData} />
        </header>
        <main className="container">
          <Switch>
            <Route exact path={['/', '/profile']}>
              <Profile />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/paymethod">
              <Paymethod />
            </Route>
            <Route path="/address">
              <Address />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
