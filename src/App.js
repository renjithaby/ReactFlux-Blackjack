/**
 *  The  Parent  Component, which wraps up the whole application
 */

import React, { Component } from 'react';
import './App.css';
import Card from './components/card/Card';
import playCardStore from "./store/PlayCardStore";
import * as Actions from  "./Actions/Actions";
import GameUI from './components/ui/GameUI';

class App extends Component {

    constructor()
    {
        super();
        this.handlePlayCardStoreChange = this.handlePlayCardStoreChange.bind(this);
        this.state = {playerCards : [], delearCards : [], gameResult : "",playerScores : {}, delearScores:{}};
    }

    componentWillMount(){
        playCardStore.on("change", this.handlePlayCardStoreChange);
        this.handlePlayCardStoreChange();
    }

    componentWillUnMount(){
        playCardStore.removeListener("change",this.handlePlayCardStoreChange);
    }


    /**
     * Listener for the store change event
     */
    handlePlayCardStoreChange(){
        this.setState({playerCards: playCardStore.getPlayerCards()});
        this.setState({delearCards: playCardStore.getDelearCards()});
        this.setState({gameResult : playCardStore. getGameResult()});
        this.setState({playerScores : playCardStore. getPlayerScores()});
        this.setState({delearScores : playCardStore. getDelearScores()});
    }


    render() {
        return (
            <div id="App" className="App">
                <div className ="play-table">

                    <div className="game-result">
                        {this.state.gameResult}
                    </div>

                    <div className= "deck"></div>

                    <div className = "delear">
                        <span className = "current-score">{this.state.delearScores?this.state.delearScores.currentScore:""}</span>
                        <ul>
                            {
                                this.state.delearCards.map((item) =>

                                    <li key = {item.id} className = "list-group-item">
                                        <Card card= {item}/>
                                    </li>
                                )

                            }
                        </ul>
                    </div>

                    <div className= "player">
                       <span className = "current-score">{this.state.playerScores?this.state.playerScores.currentScore:""}</span>
                        <ul >
                            {
                                this.state.playerCards.map((item) =>

                                    <li key = {item.id} className = "list-group-item">
                                        <Card card= {item}/>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                <GameUI/>

            </div>
        );
    }
}

export default App;

