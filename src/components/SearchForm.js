import React, { Component } from 'react';
import EditUser from './../components/EditUser'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    isChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    isDisplayEditUser = () => {
        if (this.props.isDisplayEditUser) {
            return (
                <EditUser id={this.props.id} saveUserAfterEdit={(user)=>this.props.saveUserAfterEdit(user)} userEditName={this.props.userEditName} userEditPhone={this.props.userEditPhone}
                userEditEmail={this.props.userEditEmail} userEditPhone={this.props.userEditPhone} userEditPermission={this.props.userEditPermission}/>
            )
        } else {
            return (
                <div className="col">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" style={{ width: '356px' }} name="textForSearch" className="form-control" onChange={(event) => this.isChange(event)}
                                placeholder="Enter name of user" />
                            <div className="btn btn-info" onClick={(val) => this.props.getTextSearchFromChild(this.state.textForSearch)}>Search</div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            );
        }
    }



    render() {
        return (
            <div>
                {
                    this.isDisplayEditUser()
                }
            </div>
        );
    }
}

export default SearchForm;