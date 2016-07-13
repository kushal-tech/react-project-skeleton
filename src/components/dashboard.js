
var React = require('react');
var Grid = require('./grid.js');
//import Grid from './grid.js';

class Dashboard extends React.Component{
	constructor() {
		super()
	}

	render() {
		return (

		<div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard</h1>
                </div>
            </div>


			<div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-comments fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">26</div>
                                    <div>New Comments!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-green">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-tasks fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">12</div>
                                    <div>New Tasks!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-yellow">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-shopping-cart fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">124</div>
                                    <div>New Orders!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-red">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-support fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">13</div>
                                    <div>Support Tickets!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-bar-chart-o fa-fw"></i> Daily Report
                            <div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Actions
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a href="#">Action</a>
                                        </li>
                                        <li><a href="#">Another action</a>
                                        </li>
                                        <li><a href="#">Something else here</a>
                                        </li>
                                        <li className="divider"></li>
                                        <li><a href="#">Separated link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="table-responsive">

										<div>
											<Grid url='/comments' />
										</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
		);
	}
}
module.exports = Dashboard;

//export default Dashboard;
