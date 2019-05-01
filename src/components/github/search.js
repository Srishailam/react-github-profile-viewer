import React, {Component} from 'react';

class Search extends Component{

    onSubmit(e){
        e.preventDefault();
        console.log('submitted');
        let username = this.refs.username.value.trim();
        if(!username){
            alert('Please enter user name');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }
    render(){
        const {repo} = this.props;
        return(
           <div>
               <form onSubmit = {this.onSubmit.bind(this)}>
                <div className="form-group">
                <label className="" htmlFor="searchusername">Search Github Users</label>
                <input autoComplete="off" type="text" ref="username" username="form-control" className="form-control" placeholder="Enter username" id="searchusername"/>
                </div>
               </form>
           </div>
        )
    }
}

export default Search