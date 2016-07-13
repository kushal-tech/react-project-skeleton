var React = require('react');

class Grid extends React.Component{
	constructor() {
		super();
		this.state = this.getInitialState();
	}

	loadCommentsFromServer() {
		$.ajax({
		  url: this.props.url,
		  dataType: 'json',
		  cache: false,
		  success: function(data) {

			this.setState({data: data}, function(){
			  console.log(this.state.data);
			}.bind(this));

		  }.bind(this),
		  error: function(xhr, status, err) {
			console.error(this.props.url, status, err.toString());
		  }.bind(this)
		});
	}

	getInitialState() {
		return {data: []};
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render () {

		var rows = this.state.data.map(function(comment) {
		  return (
			<tr>
				<td>{comment.id}</td>
				<td>{comment.author}</td>
				<td>{comment.date}</td>
				<td>{comment.amount}</td>
			</tr>
		  );
		});

		return (
			<table className="table table-bordered table-hover table-striped">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Date</th>
						<th>Amount(in Rs.)</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

module.exports = Grid;
//export default Grid;
