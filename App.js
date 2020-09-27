import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      newItem:"",
      list:[]
   }
  }

  updateInput(key,value){
  this.setState({
    [key]: value
  });
}

addItem(){
  const newItem={
    id: 1+Math.random(),
    value:this.state.newItem.slice()
    };
    const list= [...this.state.list];
    list.push(newItem);
    this.setState(
      {
        list,
        newItem:""

      }
    );
  }
  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist=list.filter(item=>item.id!==id);
      this.setState({list:updatedlist});
  }

  render() {
  return (
    <div className="App">
      <div>
        Add an item 
        <br/>
        <input
         type="text"
         placeholder="type item here.."
         value={this.state.newItem}
         onChange={e => this.updateInput("newItem",e.target.value)}
         />
         <button
         onClick={() => this.addItem()}
         >
           Add
         </button>
         <br/>
         <ul>
           {this.state.list.map(Item => {
          return(
            <li key={Item.id}>
              {Item.value}
              <button
              onClick={()=>this.deleteItem(Item.id)}
              >
                X
              </button>
            </li>
          );
           })}
         </ul>
      </div>
    </div>
  );
  }
}

export default App;
