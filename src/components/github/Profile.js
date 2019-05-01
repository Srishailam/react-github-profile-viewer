import React, {Component} from 'react';
import RepoList from './RepoList.js';

class Profile extends Component{
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h3>{this.props.userData.login}</h3>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.props.userData.avatar_url} className="thumnail" style={{width:"100%"}}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="btn btn-primary">{this.props.userData.public_repos} Repos </span>
                                    <span className="btn btn-success">{this.props.userData.public_gists} Gists </span>
                                    <span className="btn btn-info">{this.props.userData.followers} Followers </span>
                                    <span className="btn btn-danger">{this.props.userData.following} Following</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Username: {this.props.userData.login}</strong></li>
                                        <li className="list-group-item"><strong>Location: {this.props.userData.location}</strong></li>
                                        <li className="list-group-item"><strong>Email: {this.props.userData.email}</strong></li>
                                        <li className="list-group-item"><strong>Bio: {this.props.userData.bio}</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <br/>
                            <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
                        </div>
                    </div>
                    <hr/>
                    <h3> User Repositories</h3>
                    <RepoList {...this.props}/>
                </div>
            </div>

        )
    }
}

export default Profile