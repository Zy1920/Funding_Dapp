import React from 'react'
import { Tab } from 'semantic-ui-react'
import Home from "./home/Home";
import FundingCreatorScene from "./creator/FundingCreatorScene";
import FundingList from "./common/FundingList";

const panes = [
    { menuItem: '众筹项目', render: () => <Tab.Pane><Home/></Tab.Pane> },
    { menuItem: '我发起的', render: () => <Tab.Pane><FundingCreatorScene/></Tab.Pane> },
    { menuItem: '我参与的', render: () => <Tab.Pane><FundingList/></Tab.Pane> },
]

const TabPanels = () => <Tab panes={panes} />

export default TabPanels;
