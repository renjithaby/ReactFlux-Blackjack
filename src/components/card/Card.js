/**
 * Created by rabby
 * The Card  Component, which sets up the Card according the props passed from the parent.
 */

import React from 'react';
import './Card.css';



class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {rank:"", suitName:"",suitValue:"", value:[], show:true};

    }

    componentWillMount(){
       this.setState({rank:this.props.card.rank,suitName:this.props.card.suitName,suitValue:this.props.card.suitValue, value:this.props.card.value, show:this.props.card.show})
    }

    componentWillReceiveProps(nextProps){
        this.setState({rank:nextProps.card.rank,suitName:nextProps.card.suitName,suitValue:this.props.card.suitValue, value:nextProps.card.value, show:nextProps.card.show});
    }


    render() {
        return (
            <div class ="card-container">

                <div class={this.state.show?"flipper show":"flipper"}>

                    <div className ="front card">
                        <div className={this.state.suitName === "clubs"||this.state.suitName ==="spade"?"black":"red"}>
                            <div className = "top">
                                <span className="rank">{this.state.rank}</span>
                                <span className="suit">{this.state.suitValue}</span>
                            </div>

                            <div className="center">
                                <span className="suit">{this.state.suitValue}</span>
                            </div>

                            <div className = "bottom">

                                <span className="suit">{this.state.suitValue}</span>
                                <span className="rank">{this.state.rank}</span>
                            </div>
                        </div>
                    </div>

                    <div className ="back card"> </div>

                </div>

            </div>
        );
    }
}


export default Card;
