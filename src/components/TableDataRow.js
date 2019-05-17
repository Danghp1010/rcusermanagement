import React, { Component } from 'react';

class TableDataRow extends Component {
    renderPermission = () => {
        if (this.props.permission === 0) {
            return "Admin"
        } else if (this.props.permission === 1) {
            return "User"
        } else if (this.props.permission === 2) {
            return "Viewer"
        }
    }
        
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{
                    this.renderPermission()
                }
                </td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning edit">
                            <i className="fa fa-edit" onClick={()=>this.props.editUser()}>Edit</i>
                        </div>
                        <div className="btn btn-danger delete">
                            <i className="fa fa-delete" onClick={() => this.props.deleteUser(this.props.id)}>Delete</i>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default TableDataRow;