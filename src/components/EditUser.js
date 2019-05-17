import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.setState({
            id: this.props.id,
            phone: this.props.userEditPhone,
            name: this.props.userEditName,
            permission: this.props.userEditPermission,
            email : this.props.userEditEmail
        });
    }

    isChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    saveUserAfterEdit = () => {
        var infoEditUser = {};
        infoEditUser.id = this.state.id;
        infoEditUser.phone = this.state.phone;
        infoEditUser.name = this.state.name;
        infoEditUser.permission = this.state.permission;
        infoEditUser.email = this.state.email;
        this.props.saveUserAfterEdit(infoEditUser);

    }
    render() {
        return (
            <div className="card text-left mt-3">
                <div className="card bg-light">
                    <form>
                        <div className="card-header">Edit User</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="card-title">Login User</label>
                                <input type="text" defaultValue={this.props.userEditName} name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Enter user name" />
                            </div>
                            <div className="form-group">
                                <label className="card-title">Phone</label>
                                <input type="text" defaultValue={this.props.userEditPhone} name="phone" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Enter user phone" />
                            </div>
                            <div className="form-group">
                                <label className="card-title">Email</label>
                                <input type="text" defaultValue={this.props.userEditEmail} name="email" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Enter user email" />
                            </div>
                            <div className="form-group">
                                <label className="card-title">Role</label>
                                <select className="custom-select" defaultValue={this.props.userEditPermission} name="permission" onChange={(event) => this.isChange(event)} required>
                                    <option value>Choose one role</option>
                                    <option value={0}>Admin</option>
                                    <option value={1}>User</option>
                                    <option value={2}>Viewer</option>
                                </select>
                            </div>
                            <input type="button" value="Save" className="btn btn-block btn-primary" onClick={() => this.saveUserAfterEdit()} style={{ marginTop: '15px' }} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;