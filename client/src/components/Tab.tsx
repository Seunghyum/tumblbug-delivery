import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

type TabsProps = {
  tabDataSet: { to: string; title: string }[]
}
type TabsState = {
  tabDataSet: { to: string; title: string }[]
}

export default class Tabs extends Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props)
    this.state = {
      tabDataSet: this.props.tabDataSet || [],
    }
  }

  render() {
    const TabComponent = this.state.tabDataSet.map(
      (data: { to: string; title: string }): JSX.Element => {
        return (
          <NavLink
            to={data.to}
            isActive={(match, location) => {
              if (match) return true
              if (location.pathname == '/' && data.to === '/profile') return true
              return false
            }}
            key={data.title}
          >
            {data.title}
          </NavLink>
        )
      },
    )
    return (
      <nav className="box-tab">
        <div className="box-tab">
          {TabComponent}
          <div className="box-tab--bottom-boder"></div>
        </div>
      </nav>
    )
  }
}

// export const TabsComponent: React.FC = () => {
//   return (
//     <Tabs active={1}>
//       <Tab title="" to="/">
//         <h2>Content 1</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       </Tab>
//       <Tab title="Tab 2">
//         <h2>Content 2</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       </Tab>
//       <Tab title="Tab 3">
//         <h2>Content 3</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       </Tab>
//     </Tabs>
//   )
// }
