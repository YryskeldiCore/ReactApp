import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             years: 18
//         }

//         this.nextYear = this.nextYear.bind(this); // 1st method

//         // this.nextYear = () => { 2nd method
//         //     this.setState(state => ({
//         //         years: ++state.years
//         //     }))
//         // }
        
//     }
//     // state = { 3rd method
//     //     years: 18
//     // }

//     // nextYear = () => {
//     //     this.setState(state => ({
//     //         years: ++state.years
//     //     }))
//     // }

//     nextYear(){
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }
//     render (){
//         const{name, surname, link} = this.props;
//         const{years} = this.state;
        
//         return (
//             <>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name} , surname - {surname}, years:{years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }
// }

// function WhoAmI ({name, surname, link}){
//     return (
//         <>
//             <h1>My name is {name} , surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </>
//     )
// }

// const All = ()=> {
//     return(
//         <>
//             <WhoAmI name="Yrys" surname="Amanturov" link="youtube.com"/>
//             <WhoAmI name="Bermet" surname="Asangalieva" link="youtube.com"/>
//             <WhoAmI name="Milana" surname="Tilekova" link="youtube.com"/>
//             <WhoAmI name="Ularbek" surname="Tilekov" link="youtube.com"/>
//         </>
//     )
// }

ReactDOM.render(<App/>, document.getElementById('root'));

//body 
// const elem = (
//   <div>
//       <h2>Hello!</h2>
//       <input type="text" placeholder="write here plz!" />
//       <button/>
//   </div>)

// const Header = () => {
//     return <h2>Hello work!</h2>
// }

// const Zone = () => {
//   const styledZone = {
//     width: '300px',
//     height: '40px',
//     backgroundColor: 'silver',
//     borderColor: 'red'
//   }
//   const holder = "Enter here!";
//   return <input 
//               style={styledZone}
//               type="text" 
//               placeholder={holder} 
//               autoComplete=""
//               className="first" 
//               htmlFor=""/>
// }

// const Btn = () => {
//   const text = "Log in";
//   const logged = true;
//   // const res = () => {
//   //   return 'Log in, plz!'
//   // }
//   // const p = <p>Log in!</p>
//   return <button>{logged ? "Send" : text}</button>
// }

// const App = () => {
//   return(
//       <div>
//         <Header/>
//         <Zone/>
//         <Btn/>
//       </div>
//   )
// }

