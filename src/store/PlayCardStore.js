/**
 * Created by rabby
 *  The only Store for this game Application,
 *  which stores and supply teh data needed by the components,
 *  listen and respond to the actions dispatched.
 *  handles all the game decisions.
 *  The brain of this Flux Architecture Implementation.
 */
import {EventEmitter} from "events";
import Dispatcher from "../Dispatcher/Dispatcher.js";
import * as Actions from "../Actions/Actions.js";


class PlayCardStore extends EventEmitter{

    constructor (){
        super();
        this.emit = this.emit.bind(this);
        // define teh 52 play cards
        this.playCards = [
            // spades
            {id:1,rank:"A",suitValue:"\u2660",value:[1,11],suitName:"spade",show:true},
            {id:2,rank:"2",suitValue:"\u2660",value:[2],suitName:"spade",show:true},
            {id:3,rank:"3",suitValue:"\u2660",value:[3],suitName:"spade",show:true},
            {id:4,rank:"4",suitValue:"\u2660",value:[4],suitName:"spade",show:true},
            {id:5,rank:"5",suitValue:"\u2660",value:[5],suitName:"spade",show:true},
            {id:6,rank:"6",suitValue:"\u2660",value:[6],suitName:"spade",show:true},
            {id:7,rank:"7",suitValue:"\u2660",value:[7],suitName:"spade",show:true},
            {id:8,rank:"8",suitValue:"\u2660",value:[8],suitName:"spade",show:true},
            {id:9,rank:"9",suitValue:"\u2660",value:[9],suitName:"spade",show:true},
            {id:10,rank:"10",suitValue:"\u2660",value:[10],suitName:"spade",show:true},
            {id:11,rank:"J",suitValue:"\u2660",value:[10],suitName:"spade",show:true},
            {id:12,rank:"Q",suitValue:"\u2660",value:[10],suitName:"spade",show:true},
            {id:13,rank:"K",suitValue:"\u2660",value:[10],suitName:"spade",show:true},
            //clubs
            {id:14,rank:"A",suitValue:"\u2663",value:[1,11],suitName:"clubs",show:true},
            {id:15,rank:"2",suitValue:"\u2663",value:[2],suitName:"clubs",show:true},
            {id:16,rank:"3",suitValue:"\u2663",value:[3],suitName:"clubs",show:true},
            {id:17,rank:"4",suitValue:"\u2663",value:[4],suitName:"clubs",show:true},
            {id:18,rank:"5",suitValue:"\u2663",value:[5],suitName:"clubs",show:true},
            {id:19,rank:"6",suitValue:"\u2663",value:[6],suitName:"clubs",show:true},
            {id:20,rank:"7",suitValue:"\u2663",value:[7],suitName:"clubs",show:true},
            {id:21,rank:"8",suitValue:"\u2663",value:[8],suitName:"clubs",show:true},
            {id:22,rank:"9",suitValue:"\u2663",value:[9],suitName:"clubs",show:true},
            {id:23,rank:"10",suitValue:"\u2663",value:[10],suitName:"clubs",show:true},
            {id:24,rank:"J",suitValue:"\u2663",value:[10],suitName:"clubs",show:true},
            {id:25,rank:"Q",suitValue:"\u2663",value:[10],suitName:"clubs",show:true},
            {id:26,rank:"K",suitValue:"\u2663",value:[10],suitName:"clubs",show:true},
            //hearts
            {id:27,rank:"A",suitValue:"\u2665",value:[1,11],suitName:"hearts",show:true},
            {id:28,rank:"2",suitValue:"\u2665",value:[2],suitName:"hearts",show:true},
            {id:29,rank:"3",suitValue:"\u2665",value:[3],suitName:"hearts",show:true},
            {id:30,rank:"4",suitValue:"\u2665",value:[4],suitName:"hearts",show:true},
            {id:31,rank:"5",suitValue:"\u2665",value:[5],suitName:"hearts",show:true},
            {id:32,rank:"6",suitValue:"\u2665",value:[6],suitName:"hearts",show:true},
            {id:33,rank:"7",suitValue:"\u2665",value:[7],suitName:"hearts",show:true},
            {id:34,rank:"8",suitValue:"\u2665",value:[8],suitName:"hearts",show:true},
            {id:35,rank:"9",suitValue:"\u2665",value:[9],suitName:"hearts",show:true},
            {id:36,rank:"10",suitValue:"\u2665",value:[10],suitName:"hearts",show:true},
            {id:37,rank:"J",suitValue:"\u2665",value:[10],suitName:"hearts",show:true},
            {id:38,rank:"Q",suitValue:"\u2665",value:[10],suitName:"hearts",show:true},
            {id:39,rank:"K",suitValue:"\u2665",value:[10],suitName:"hearts",show:true},
            //diamond
            {id:40,rank:"A",suitValue:"\u2666",value:[1,11],suitName:"diamond",show:true},
            {id:41,rank:"2",suitValue:"\u2666",value:[2],suitName:"diamond",show:true},
            {id:42,rank:"3",suitValue:"\u2666",value:[3],suitName:"diamond",show:true},
            {id:43,rank:"4",suitValue:"\u2666",value:[4],suitName:"diamond",show:true},
            {id:44,rank:"5",suitValue:"\u2666",value:[5],suitName:"diamond",show:true},
            {id:45,rank:"6",suitValue:"\u2666",value:[6],suitName:"diamond",show:true},
            {id:46,rank:"7",suitValue:"\u2666",value:[7],suitName:"diamond",show:true},
            {id:47,rank:"8",suitValue:"\u2666",value:[8],suitName:"diamond",show:true},
            {id:48,rank:"9",suitValue:"\u2666",value:[9],suitName:"diamond",show:true},
            {id:49,rank:"10",suitValue:"\u2666",value:[10],suitName:"diamond",show:true},
            {id:50,rank:"J",suitValue:"\u2666",value:[10],suitName:"diamond",show:true},
            {id:51,rank:"Q",suitValue:"\u2666",value:[10],suitName:"diamond",show:true},
            {id:52,rank:"K",suitValue:"\u2666",value:[10],suitName:"diamond",show:true}

        ];
        this.cardDeck = this.playCards.slice(0);
        this.playerCards = [];
        this.delearCards = [];
        this.gameState="ready"; // 5 game states in order=> ready, initialDeal, stick, dealFinished(when the game decides no more deals to the delear), finished

        this.playerScore = { minValue:0, maxValue:0,currentScore:"" };
        this.delearScore = { minValue:0, maxValue:0,currentScore:"" };
        this.gameResult = "New Game";
        this.shuffle();
        Dispatcher.register(this.handleActions.bind(this)); // registering the handler for listening to the actions dispatched
    }

    /**
     * Function which return the playerCards
     */
    getPlayerCards(){
        return this.playerCards;
    }

    /**
     * Function which return the delearCards
     */
    getDelearCards(){
        return this.delearCards;
    }

    /**
     * Function which return the gameState
     */
    getGameState(){
        return this.gameState;
    }

    /**
     * Function which return the gameResult
     */
    getGameResult(){
        return this.gameResult;
    }

    /**
     * Function which return the playerScore
     */
    getPlayerScores(){
        return this.playerScore;
    }

    /**
     * Function which return the delearScore
     */
    getDelearScores(){
        return this.delearScore;
    }

    /**
     * Function which handles the HANDLE_PLAYER_STICK action
     *  shows the second card of the delear , change the state to stick
     *  and checks for whether teh deal is finished
     */
    handlePlayerStick(){
        for(let i=0;i< this.delearCards.length;i++){
            this.delearCards[i].show = true;
        }
        this.gameState = "stick";
        this.updateScoreCards();
        this.emit("change");
        this.checkForDealFinish();
    }

    /**
     * Function which handles the HANDLE_PLAYER_HIT action,
     * add another player card
     */
    handlePlayerHit(){
        this.addPlayerCard();
    }

    /**
     * Function which is called from the initial deal timer and
     * adds the player and delear card in turns during initial deal animation
     * @param turn -> represents the turn number
     */
    newGame(turn){
        this.gameState="initialDeal";
        switch(turn) {
            case 0:
                this.addPlayerCard();
                break;
            case 1:
                this.addDelearCard();
                break;
            case 2:
                this.addPlayerCard();
                break;
            case 3:
                this.addDelearCard();
                break;
        }
    }

    /**
     * Function which handles the START_NEW_GAME action,
     * Start a new timer to add new cards for player and dealer in turns
     */
    startInitialDelearTimer(){
        let i = 0;
        let myVar = setInterval(() =>{
            if(i < 4){
                this.newGame(i);
                i++;
            }else{
                clearInterval(myVar);
            }
           }, 100);
    }

    /**
     * Game Win logic calculation function
     * which checks the result fo the games, with each score card update.
     * first it checks for the blackJack for player and delaer.
     * secondly it checks for the bust of player and delear,
     * thirdly if both the bove scenarios doesnt happens,
     * it compares the actual scores of player and dealer to determine the winner
     */
    updateScoreCards(){
        this.getScoreCard();
        // Player Blackjack Scenario
        if(this.playerCards.length === 2 && this.playerScore.maxValue === 21){
            this.playerScore.currentScore = "BlackJack";
            if(this.gameState ==="initialDeal") {
                this.gameState = "stick";
                this.handlePlayerStick();
                return;
            }else if(this.playerCards.length === 2 && this.delearScore.maxValue === 21){
                this.delearScore.currentScore = "BlackJack";
                this.gameResult = "Draw";
                this.gameState = "finished";
            }else{
                this.gameResult = "Player Wins";
                this.gameState = "finished";
            }
        }else if(this.delearCards.length === 2 && this.delearScore.maxValue === 21) { // Delear BlackJack
            this.delearScore.currentScore= "BlackJack";
            this.gameResult = "Delear Wins";
            this.gameState = "finished";
        }else if(this.playerScore.minValue > 21){ // player Bust
            this.gameResult = "Delear Wins";
            this.gameState = "finished";
        }else if(this.delearScore.minValue > 21){ // delear Bust
            this.gameResult = "Player Wins";
            this.gameState = "finished";
        }else if(this.gameState ==="dealFinished"){ // all deal finished after the stick
            if(this.playerScore.currentScore === this.delearScore.currentScore ){
                this.gameResult = "Draw";
                this.gameState = "finished";
            }else if(this.playerScore.currentScore > this.delearScore.currentScore ){
                this.gameResult = "Player Wins";
                this.gameState = "finished";
            }else{
                this.gameResult = "Dealer Wins";
                this.gameState = "finished";
            }
        }
    }

    /**
     * Function calculates the scores of player and dealer
     * approach  is ,
     * get the normal card values( the value excluding any A cards)
     * get the Acardsmininum value( the sum of all Acards minimum values ie 1)
     * get the AcardsMaximumvalue((MAX_A_VALUE + MIN_A_VALUE *(numofAs-1)); )
     */
    getScoreCard(){
        this.playerScore.minValue = this.getTotalNormalCardValues("player") +  this.getMinACardsValue("player");
        this.playerScore.maxValue = this.getTotalNormalCardValues("player") +  this.getMaxACardsValue("player");
        this.delearScore.minValue = this.getTotalNormalCardValues("delear") +  this.getMinACardsValue("delear");
        this.delearScore.maxValue = this.getTotalNormalCardValues("delear") +  this.getMaxACardsValue("delear");
        this.calculateCurrentScore("player");
        this.calculateCurrentScore("delear");
    }

    /**
     * Function to calulate the normal card value for the player and delaer
     * @param type player / delear
     * @returns {number}
     */
    getTotalNormalCardValues(type) {
        let points = 0,cards = [], arrLength = 0;
        if(type === "player" && this.playerCards.length > 0) {
            cards = this.playerCards;
            arrLength = this.playerCards.length;
        }else if(type === "delear" && this.delearCards.length > 0){
            arrLength = this.gameState === "initialDeal" ? 1 : this.delearCards.length;
            cards = this.delearCards;
        }
        for(let i = 0;i < arrLength;i++){

           if(cards[i].rank !== 'A'){
               points += cards[i].value[0];
           }
        }
        return points;
    }

    /**
     * Function to calulate the minmum value of Acards for the player and delear
     * @param type
     * @returns {number}
     */
    getMinACardsValue(type) {
        let points = 0,cards=[], arrLength =0 ;
        if(type === "player" && this.playerCards.length>0)
        {
            cards = this.playerCards;
            arrLength = this.playerCards.length;
        }else if(type === "delear" && this.delearCards.length>0 ){
            arrLength = this.gameState === "initialDeal"?1:this.delearCards.length;
            cards = this.delearCards;
        }
        for(let i=0;i< arrLength;i++){

            if(cards[i].rank === 'A'){
                points += cards[i].value[0];
            }
        }
        return points;
    }

    /**
     * Function to calulate the maximum value of Acards for the player and delear
     * @param type
     * @returns {number}
     */
    getMaxACardsValue(type) {
        let numofAs = 0, points = 0,cards =[], arrLength = 0 ;
        const MIN_A_VALUE = 1, MAX_A_VALUE =11;
        if(type === "player" && this.playerCards.length>0)
        {
            cards = this.playerCards;
            arrLength = this.playerCards.length;
        }else if(type === "delear" &&  this.delearCards.length>0){
            arrLength = this.gameState === "initialDeal"?1:this.delearCards.length; // consider the unrevealed delear card
            cards = this.delearCards;
        }
        for(let i=0;i< arrLength;i++){

            if(cards[i].rank === 'A'){
                numofAs += 1;
            }
        }
        if(numofAs >= 1){
            points = (MAX_A_VALUE + MIN_A_VALUE *(numofAs-1));
        }
        return points;
    }

    /**
     * Function to calculate the current score of the player and dealer.
     * @param playerType
     */
    calculateCurrentScore(playerType)
    {
        let score = {};
        if(playerType === "player"){
            score = this.playerScore;
        }else if (playerType === "delear"){
            score = this.delearScore;
        }
        if (this.gameState === "initialDeal") {
            if (score.minValue != score.maxValue && score.maxValue <= 21) {
                score.currentScore = score.minValue + " / " + score.maxValue;
            } else {
                score.currentScore = score.minValue;
            }
        } else {
            if (score.maxValue <= 21) {
                score.currentScore = score.maxValue;
            } else {
                score.currentScore = score.minValue;
            }
        }
    }

    /**
     * Function to add the player card
     */
    addPlayerCard(){
        if(this.cardDeck.length>0){
            this.playerCards.push(this.cardDeck.pop());
        }
        this.updateScoreCards();
        this.emit("change");
    }

    /**
     * Function to add the delear card
     */
    addDelearCard(){
        if(this.cardDeck.length>0){
            this.delearCards.push(this.cardDeck.pop());
        }
        if(this.gameState !== "stick" &&  this.delearCards.length == 2) {
            this.delearCards[1].show = false;
        }
        this.updateScoreCards();
        this.emit("change");
        this.checkForDealFinish();
    }

    /**
     * After the player agrees to  stick, this function will serves new card for delear until the deal is finished.
     * The Delear will take new cards until the total score of 17 or over , after that it changes to state to dealFinished.
     */
    checkForDealFinish(){
        if (this.gameState === "stick") {
            if (!(this.delearScore.maxValue >= 17 && this.delearScore.maxValue <= 21) && this.delearScore.minValue < 17 ) {
                setTimeout(() => this.addDelearCard(), 500);
            } else {
                this.gameState = "dealFinished";
                this.updateScoreCards();
                this.emit("change");
            }
        }
    }

    /**
     * Function to reset the game.
     * Clear the player and delear cards and the scores.
     * and decks card length is < 15, add all teh cards and  shuffle.
     */
    resetGame(){
        this.playerCards = [];
        this.delearCards = [];
        this.gameState = "ready";
        this.playerScore = { minValue:0, maxValue:0, currentScore:"" };
        this.delearScore = { minValue:0, maxValue:0, currentScore:"" };
        this.gameResult = "New Game";
        if(this.cardDeck.length< 15){
            this.cardDeck = [];
            this.cardDeck = this.playCards.slice(0);
            this.shuffle();
        }
    }

    /**
     * Shuffles the card
     */
    shuffle(){
        this.cardDeck.sort(()=>(Math.random() - 0.5));
    }

    /**
     * Actions event listener.
     * The core communication handler
     * @param action
     */
    handleActions(action){
        switch (action.type) {

            case "START_NEW_GAME" :
                this.startInitialDelearTimer();
                break;
            case "HANDLE_PLAYER_STICK":
                this.handlePlayerStick();
                break;
            case "HANDLE_PLAYER_HIT":
                this.handlePlayerHit();
                break;
            case "RESET_GAME" :
                this.resetGame();
                break;
        }
    }

}
const playCardStore = new PlayCardStore;
export default playCardStore;