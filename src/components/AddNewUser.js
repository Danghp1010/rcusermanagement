import React, { Component } from 'react';

class AddNewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayButtonAddOrClose: true,
            isDisplayDialogAddNewUser: false
        }
    }

    displayButton = () => {
        if (this.state.isDisplayButtonAddOrClose === true) {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.changeDisplayDialogAddNewUser()}>Add New User</div>
            )
        } else {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeDisplayDialogAddNewUser()}>Close</div>
            )
        }
    }

    changeDisplayDialogAddNewUser = () => {
        this.setState({
            isDisplayButtonAddOrClose: !this.state.isDisplayButtonAddOrClose,
            isDisplayDialogAddNewUser: !this.state.isDisplayDialogAddNewUser
        });
    }

    getValueForAddNew = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] :  value
        });
    }

    addNewuser = () => {
        this.props.addNewuser(this.state.name,this.state.phone,this.state.permission);
        this.setState({
            name : '',
            phone : '',
            permission : ''
        });
    }

    displayDialogAddNewUser = () => {
        if (this.state.isDisplayDialogAddNewUser === true) {
            return (
                <div className="col">
                    <div className="card text-left mt-3">
                        <div className="card bg-light">
                        <form>
                            <div className="card-header">Add new user</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="card-title">Login User</label>
                                    <input type="text" name="name" className="form-control" onChange={(event) => this.getValueForAddNew(event)} placeholder="Enter user name" />
                                </div>
                                <div className="form-group">
                                    <label className="card-title">Phone</label>
                                    <input type="text" name="phone" className="form-control" onChange={(event) => this.getValueForAddNew(event)} placeholder="Enter user phone" />
                                </div>
                                <div className="form-group">
                                    <label className="card-title">Email</label>
                                    <input type="text" name="email" className="form-control" onChange={(event) => this.getValueForAddNew(event)} placeholder="Enter user email" />
                                </div>
                                <div className="form-group">
                                    <label className="card-title">Role</label>
                                    <select className="custom-select" name="permission" onChange={(event) => this.getValueForAddNew(event)} required>
                                        <option value>Choose one role</option>
                                        <option value={0}>Admin</option>
                                        <option value={1}>User</option>
                                        <option value={2}>Viewer</option>
                                    </select>
                                </div>
                                <input type="reset" value="Submit" className="btn btn-block btn-primary" onClick={() => this.addNewuser()} style={{ marginTop: '15px' }}/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return true
        }
    }
    isDisplayEditUser = () => {
        if (this.props.isDisplayEditUser) {
            return true 
        } else {
            return (
                <div>
                {
                    this.displayButton()
                }
                {
                    this.displayDialogAddNewUser()
                }
                </div>
            )
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

export default AddNewUser;