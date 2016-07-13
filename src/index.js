var React = require('react');
var ReactDOM = require('react-dom');

var NavHeader = require('./components/header.js');
var Dashboard = require('./components/dashboard.js');

//import NavHeader from './components/header.js';
//import Dashboard from './components/dashboard.js';
//import BasicGrid from './Grid/BasicExample.js';


// var Main = React.createClass({
	// render : function(){
		// return (
			// <div>
				// <NavHeader/>
			// </div>
		// )
	// }
// });

// var NavHeader = React.createClass({
  // render: function() {
    // return (
       // <div className="header">
         // <h2 className="logo">
          // GoldLasso
         // </h2>
       // </div>
    // );
  // }
// });


class Main extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (<div>
			<NavHeader/>
			<Dashboard/>

		</div>);
	}
}



// inside your render function
ReactDOM.render(<Main/>, document.getElementById('app'));
