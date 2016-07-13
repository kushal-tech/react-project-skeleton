var React = require('react');
var ReactDOM = require('react-dom');
var ContentEditable = require("react-contenteditable");
  
var Main = React.createClass({
	render : function(){
		return (
			<div>
			Yahoo, I created editor.
			<MyComponent/>
			<ListComponent/>
			</div>
		)
	}
});


// inside your render function


var MyComponent = React.createClass({
    getInitialState: function(){
      return {html: "<b>Hello <i>World</i></b>"};
    },

    handleChange: function(evt){
      this.setState({html: evt.target.value});
    },

    render: function(){
      return <ContentEditable
                html={this.state.html} // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={this.handleChange} // handle innerHTML change
              />
    }
  });


var Cell = React.createClass({
  render: function() {
    return (
      <View style={{height:30}}>
        <Text>{this.props.item}</Text>
      </View>
    );
  }
});
 

ReactDOM.render(<Main/>, document.getElementById('app'));