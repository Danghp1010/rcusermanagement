import React, { Component } from 'react';
import TableDataRow from './../components/TableDataRow'

class TableData extends Component {
    renderTableDataRow = () => this.props.dataUser.map((value, key) => (
        <TableDataRow deleteUser={(id) => this.props.deleteUser(id)} editUser={(user) => this.props.editUser(value)} key={key} id={value.id} name={value.name} phone={value.phone} permission={value.permission} />
    )
    )
    isDisplayEditUser = () => {
        if (this.props.isDisplayEditUser) {
            return true
        } else {
            return (
                <div className="col text-center">
                    <table className="table table-inverse table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderTableDataRow()
                            }
                        </tbody>
                    </table>
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

export default TableData;