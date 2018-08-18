import React, {Component} from 'react';
import './App.css';
import { Container, Header } from "semantic-ui-react"
import TabPanels from './components/tabPanels';

class  App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            account: null
        }
    }

    render(){
        const { account } = this.state;
        return(
            <Container >

                    <h1 >郭大大众筹网</h1>
                    <img src="https://api.gushi.ci/all.svg" alt="poem"/>
                    <br/>
                    <br/>
                    <p>
                        {
                            account ? `您的账户地址:${account}` : '您的账户地址:'
                        }
                    </p>

                <TabPanels/>
            </Container>
        )
    }

}

export default App;