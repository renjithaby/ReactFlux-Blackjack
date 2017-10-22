
/**
 * Created by rabby
 * The UI component which handles the UI buttons,
 * Bet, Hit and Stick
 * buttons clickhandlers call the corresponding actions to serve the user request.
 *
 */

import React from 'react';
import './GameUI.css';
import playCardStore from "../../store/PlayCardStore";
import * as Actions from  "../../Actions/Actions";



class GameUI extends React.Component {

    constructor(props){
        super(props);
        this.handlePlayCardStoreChange = this.handlePlayCardStoreChange.bind(this);
        this.state = {gameSate: ""}
    }
    componentWillMount(){
        playCardStore.on("change", this.handlePlayCardStoreChange); // set the listener for the store change event
        this.handlePlayCardStoreChange();
    }

    /**
     * Listener for the store change event
     */
    handlePlayCardStoreChange(){
        this.setState({gameState :playCardStore. getGameState()})
    }

    /**
     * Function to handle Bet button click
     */
    handleNewBet(){
        if(!(this.state.gameState ==="ready" || this.state.gameState ==="finished")){
            return;
        }
        Actions.resetGame();
        Actions.startNewGame();
    }
    /**
     * Function to handle Hit button click, only works in the initialDeal state
     */
    handleHit(){
        if(this.state.gameState!=="initialDeal"){
            return;
        }
        Actions.handlePlayerHit();
    }
    /**
     * Function to handle Hit button click, only works in the initialDeal state
     */
    handleStick(){
        if(this.state.gameState!=="initialDeal"){
            return;
        }
        Actions.handlePlayerStick();
    }

    render() {
        return (
            <div className = "table-ui">
                <button className={this.state.gameState === "initialDeal"?"btn":"btn disable"}  onClick = {this.handleHit.bind(this)}> Hit  </button>
                <button className={this.state.gameState === "ready"||this.state.gameState === "finished"?"btn":"btn disable"} onClick = {this.handleNewBet.bind(this)}> Bet </button>
                <button className={this.state.gameState === "initialDeal"?"btn":"btn disable"} onClick = {this.handleStick.bind(this)}> Stick  </button>
            </div>
        );
    }
}


export default GameUI;
