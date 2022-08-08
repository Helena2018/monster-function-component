import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');
  console.log(searchField)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };  

  return (
    <div className="App">
        <h1 className='app-title'>Monster Robot</h1>

        <SearchBox 
          className = 'monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
        />
        {/* <CardList monsters={ filteredMonsters } /> */}
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(user =>
//         this.setState(() => {
//           return {monsters: user}
//           }) 
//         )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
        
//         <h1 className='app-title'>Monster Robot</h1>

//         <SearchBox 
//           className = 'monsters-search-box'
//           onChangeHandler={ onSearchChange } 
//           placeholder='search monsters'
//         />
//         <CardList monsters={ filteredMonsters } />
//       </div>
//     );
//   }
// }

export default App;
