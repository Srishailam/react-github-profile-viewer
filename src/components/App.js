import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Profile from './github/Profile.js';
import Search from './github/search.js';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'srishailam',
            userData :[],
            userRepos:[],
            perPage:5
        }
    }
    //Get Github user repos
    getUserRepos(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({userRepos:data});
            }.bind(this),
            error:function(xhr, status, error){
                this.setState({username:null});
            }.bind(this)
        });
    }
    //Get Github User Data
    getUserData(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({userData:data});
            }.bind(this),
            error:function(xhr, status, error){
                this.setState({username:null});
            }.bind(this)
        });
    }
    handleFormSubmit(username){
        this.setState({username:username}, function(){
            this.getUserData();
            this.getUserRepos();
        });
    }
    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }
    render(){
        return(
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile {...this.state}/>
            </div>
        )
    }
}
App.propTypes = {
    clientId : PropTypes.string,
    clientSecret :PropTypes.string
};
App.defaultProps = {
    clientId:'c8098c448d2f59c5d028',
    clientSecret:'533f2c95fd6147da6371cbf5e8fa91c2a9eb1f54'
};
export default App