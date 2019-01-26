// export default ImgCard;
import React, { Component } from 'react';
import cards from "./cards.json";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

let alerts='Welcome to the Clicky-Game!';
let currentScore=0;
let topScore=0;

function shuffleArray(array) {
   let i = array.length - 1;
   for (; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
   return array;
}
 
let shuffledCards=shuffleArray(cards);
 
class App extends Component {
 
   state = {
     shuffledCards
   };
   clickedCard=id=>{
      console.log("id: "+id);
      console.log("clicked: "+shuffledCards[id-1].clicked)
      let selectedCard={};
      let index=0;
      for(var i=0;i<shuffledCards.length;i++){
        if(shuffledCards[i].id===id){
          selectedCard=shuffledCards[i];
          index=i;
          console.log("selected card: "+selectedCard.clicked);
          console.log("shuffledCards: "+shuffledCards)
        }
      }
      if(!selectedCard.clicked){
        alerts='You guessed correctly!';
        shuffledCards[(id-1)].clicked=true;
        shuffledCards[index].clicked=true;
        currentScore++;
        if(currentScore>=topScore){
        topScore=currentScore;}
        shuffledCards=shuffleArray(shuffledCards);
        this.setState(shuffledCards);
        if(currentScore===shuffledCards.length){
          for(i=0;i<shuffledCards.length;i++){
            shuffledCards[i].clicked=false;
          }
          alerts="Well done! You win. Click on any card to start again!";
          currentScore=0;
        }
        
      }
      else{
        //endGame
        for(i=0;i<shuffledCards.length;i++){
          shuffledCards[i].clicked=false;
        }
        //instruction='You guessed incorrectly!';
        currentScore=0;
        shuffledCards=shuffleArray(shuffledCards);
        alerts='You have lost! Click on any card to start again!';
        this.setState(shuffledCards);
      }
    };
    render() {
      return (
         <div>
            <Navbar
               alerts={alerts}
               currentScore={currentScore}
               topScore={topScore} >
            </Navbar>
            <Main>
               <Header>
               </Header>   
                  {this.state.shuffledCards.map(card => (
                     <Card
                        id={card.id}
                        key={card.id}
                        name={card.name}
                        image={card.image}
                        clicked={card.clicked}
                        clickedCard={this.clickedCard}  />
                  ))}
            </Main>
         </div>
      );
    }
  }
  
  export default App;   
