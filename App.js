
import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Alert } from 'react-native';//Duplication Error+Cannot 
import {Entypo} from '@expo/vector-icons';
import {Button} from "native-base";

var itemArray =new Array(9).fill("empty")
export default class App extends React.Component{

  //Error 5: Not Explained by Hitesh
  // Invariant Violation: Element type is invalid: expected a string( for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in.
  
  constructor(props){
    super(props);
    this.state={
      isCross:false, //set the box to cross or circle
      winMessage:""
    }
  }
  
  componentDidUpdate() {
    this.onceAnyoneWin();
  }
  drawIcon=(itemNumber)=>{
    //TODO:decide what to draw :circle or cross or default
    if(itemArray[itemNumber]=== "empty"){
      itemArray[itemNumber]=this.state.isCross;
      // V.V.imp  ! itemArray  0 and x
      this.setState({isCross:!itemArray[itemNumber]},()=>
      {console.log(this.state.isCross)})
      
    }

    //Check for Win
    this.winGame()


  };

  onceAnyoneWin = () => {
    if (this.state.winMessage.includes("win")) {
      Alert.alert("Congrats..." + this.state.winMessage + " !!!");
      this.resetGame();
    } else if (this.state.winMessage.includes("Draw")) {
      Alert.alert(this.state.winMessage + " !!!");
      this.resetGame();
    }
  };

  chooseItemIcon=(itemNumber)=>{
    //TODO:choose appropriate icon
     if(itemArray[itemNumber]!=="empty"){
       return itemArray[itemNumber] ? "cross" :"circle"
     }
     return "pencil";
  };

  chooseItemColor=(itemNumber)=>{
    //TODO choose color for icon
    if(itemArray[itemNumber]!=="empty"){
      return itemArray[itemNumber] ? "red" :"green"
    }
    return "black";
  }

  resetGame=()=>{
     //reset all values and states
     itemArray.fill("empty");
     this.setState({winMessage:"",isCross:false})

     //force update to the component
     this.forceUpdate();
  }

  winGame=()=>{
    //decide winner
    if((itemArray[0]!=="empty")  && (itemArray[0]==itemArray[1]) && 
    (itemArray[1]==itemArray[2])){
       this.setState({winMessage:(itemArray[0]? "Cross":"Circle").concat('win')})

    }
    else if ((itemArray[3]!=="empty")  && (itemArray[3]==itemArray[4]) && 
    (itemArray[4]==itemArray[5])){
       this.setState({winMessage:(itemArray[3]?'Cross':'Circle').concat('win')})

    }
    else if ((itemArray[6]!=="empty")  && (itemArray[6]==itemArray[7]) && 
    (itemArray[7]==itemArray[8])){
       this.setState({winMessage:(itemArray[6]?'Cross':'Circle').concat('win')})

    }

    else if ((itemArray[0]!=="empty")  && (itemArray[0]==itemArray[3]) && 
    (itemArray[3]==itemArray[6])){
       this.setState({winMessage:(itemArray[0]?'Cross':'Circle').concat('win')})

    }
    
    else  if ((itemArray[1]!=="empty")  && (itemArray[1]==itemArray[4]) && 
    (itemArray[4]==itemArray[7])){
       this.setState({winMessage:(itemArray[1]?'Cross':'Circle').concat('win')})

    }

    else if ((itemArray[2]!=="empty")  && (itemArray[2]==itemArray[5]) && 
    (itemArray[5]==itemArray[8])){
       this.setState({winMessage:(itemArray[2]?'Cross':'Circle').concat('win')})

    }

    else if ((itemArray[0]!=="empty")  && (itemArray[0]==itemArray[4]) && 
    (itemArray[4]==itemArray[8])){
       this.setState({winMessage:(itemArray[0]?'Cross':'Circle').concat('win')})

    }
    else if ((itemArray[2]!=="empty")  && (itemArray[2]==itemArray[4]) && 
    (itemArray[4]==itemArray[6])){
       this.setState({winMessage:(itemArray[2]?'Cross':'Circle').concat('win')})

    }
    else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      this.setState({ winMessage: "It's Draw..Play Again" });
    }
  }
  render() {
     // Its Showing warning
    // if(this.state.winMessage !== "") {
    //   Alert.alert(this.state.winMessage);
    //   this.resetGame();
    // }
    return (
      <View style={styles.container}>
        <Text style={styles.result}> X and 0 Game </Text>

        <View style={styles.grid}>
          <View style={styles.row}>

            {/* Logic Error(Solved)  : 0  and 0 is shown for next time 1 is not coming */}
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(0);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(1);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(2);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
           </View>
          <View style={styles.row}>

            {/* Logic Error(Solved)  : 0  and 0 is shown for next time 1 is not coming */}
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(3);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(4);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  this.drawIcon(5);
                }}
              >
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
           </View>
          <View style={styles.row}>

{/* Logic Error(Solved)  : 0  and 0 is shown for next time 1 is not coming */}
<View style={styles.item}>
  <TouchableOpacity
    onPress={() => {
      this.drawIcon(6);
    }}
  >
    <Entypo
      name={this.chooseItemIcon(6)}
      size={50}
      color={this.chooseItemColor(6)}
    />
  </TouchableOpacity>
</View>
<View style={styles.item}>
  <TouchableOpacity
    onPress={() => {
      this.drawIcon(7);
    }}
  >
    <Entypo
      name={this.chooseItemIcon(7)}
      size={50}
      color={this.chooseItemColor(7)}
    />
  </TouchableOpacity>
</View>
<View style={styles.item}>
  <TouchableOpacity
    onPress={() => {
      this.drawIcon(8);
    }}
  >
    <Entypo
      name={this.chooseItemIcon(8)}
      size={50}
      color={this.chooseItemColor(8)}
    />
  </TouchableOpacity>
</View>
</View>
       </View>
       {/* Its Allwoing us to Play Again */}
       {/* Allowing to Display the Result :Error of Not Showing Result-- */}
          {/* <Text style={styles.winMessage}>{this.state.winMessage}</Text>  */}
          <Button
          onPress={() => {
            this.resetGame();
          }}
          style={styles.btnreset}
          full
          rounded
        >
          <Text style={styles.resettext}>Play Again</Text>
        </Button> 
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7CEC9F",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#2B2B52"
  },
  result: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    paddingVertical: 20
  },
  winMessage:{
    fontSize:25,
    fontWeight:"bold",
    color: "#000",
    marginBottom: 10,
    padding: 20
  },
  
  btnreset: {
    margin: 20,
    padding: 30,
    backgroundColor: "#2475B0"
  },
  resettext: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold"
  }
});


