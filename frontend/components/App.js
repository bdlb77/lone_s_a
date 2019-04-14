import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";

class App extends React.Component{
    // state={
        

    // };
    //syncs our state 
    // componentDidMount(){

        // const {params}= this.props.match;
        // //1.reinstate our localstorage
        // const localStorageRef= localStorage.getItem(params.storeId);
        // if(localStorageRef){
        //     this.setState({order:JSON.parse(localStorage)})
        // }
        // this.ref=base.syncState(`${params.storeId}/fishes`, {
        //     context: this,
        //     state: "fishes"
//         });
//     }
//      //for local storage
//      componentDidUpdate(){
//         localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
//     }
//    //need this to unmount
//     componentWillUnmount(){
//         base.removeBinding(this.ref);
//     }
  
    //syntax for property
    render(){
        return(
            <div>
                 <Navbar/>
                 <Header/>
                 <Item/>
                 <Footer/>  
            </div>
            
        );
    }

}
export default App;