import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    { menuItem: '众筹项目', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: '我发起的', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: '我参与的', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabPanels = () => <Tab panes={panes} />

export default TabPanels;
