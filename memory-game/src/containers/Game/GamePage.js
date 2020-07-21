import React from 'react';
import { Board, Card } from '../../components';
import {connect} from 'react-redux';

const GamePage = ({isActive, onCardClick}) => (
    <Board>
        <Card name="Card" isActive={isActive} onClick={onCardClick}/>
    </Board>
);

// class GamePage extends React.Component {

//     state = { isActive : false };

//     handleCardClick = () => {
//         this.setState(prevState => ({
//             isActive: !prevState.isActive
//         }))
//     }

//     render(){
//         return (
//             <Board>
//                 <Card name="Card" 
//                 isActive={this.state.isActive}
//                 onClick={this.handleCardClick}
//                 />
//             </Board>
//         );
//     }

// }

const mapStateToProps = state => ({
    isActive: state.isActive
});

const mapDispatchToProps = dispatch => ({
    onCardClick: () => {
        dispatch({ type: "SELECTED_CARD" });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);