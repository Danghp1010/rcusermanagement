import React, { Component } from 'react';
import './../App.css';
import Header from './../components/Header';
import SearchForm from './../components/SearchForm';
import TableData from './../components/TableData';
import AddNewUser from './../components/AddNewUser';
import DataUser from './../components/Data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      isDisplayButton: true,
      data: DataUser,
      textForSearch: '',
      isDisplayEditUser: false,
      userEditName: '',
      userEditPhone: '',
      userEditEmail: '',
      userEditPermission: '',
      id: ''
    }
  }

  setDataIntoLocalStorage = () => {
    var oneTime = true;
    if (oneTime) {
      localStorage.setItem("data", JSON.stringify(this.state.data));
    }
  }

  changeStatus = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
      isDisplayButton: !this.state.isDisplayButton
    });
  }

  getTextSearch = (value) => {
    this.setState({
      textForSearch: value
    });
  }

  addNewuser = (name, phone, permission) => {
    var user = {};
    user.name = name;
    user.phone = phone;
    user.permission = permission;
    var listUser = JSON.parse(localStorage.getItem("data"));
    listUser.push(user);
    this.setState({
      data: listUser
    });

    localStorage.setItem("data", JSON.stringify(listUser));
  }

  editUser = (user) => {
    const userEditName = user.name;
    const userEditPhone = user.phone;
    const userEditEmail = user.email;
    const userEditPermission = user.permission;
    const id = user.id;

    this.setState({
      isDisplayEditUser: !this.state.isDisplayEditUser,
      userEditName: userEditName,
      userEditPhone: userEditPhone,
      userEditEmail: userEditEmail,
      userEditPermission: userEditPermission,
      id: id
    });

  }

  saveUserAfterEdit = (user) => {
    var data = JSON.parse(localStorage.getItem("data"));
    data.map((value, key) => {
      if (value.id === user.id) {
        data.splice(key, 1);
        data.splice(key, 0, user);
        data.push(user);
      }

      localStorage.setItem("data", JSON.stringify(data));
    })

    this.setState({
      isDisplayEditUser: !this.state.isDisplayEditUser,
      data: data
    });

    localStorage.setItem("data", JSON.stringify(data));
  }

  deleteUser = (id) => {
    var data = JSON.parse(localStorage.getItem("data"));
    data = data.filter(item => item.id !== id);
    this.setState({
      data: data
    });

    localStorage.setItem("data", JSON.stringify(data));
  }

  render() {
    var result = [];
    var listUser = JSON.parse(localStorage.getItem("data"));
    listUser.forEach((item) => {
      if (item.name.indexOf(this.state.textForSearch) !== -1) {
        result.push(item);
      }
    })

    return (

      <div>
        <Header />
        <div className="container">
          <SearchForm saveUserAfterEdit={(user) => this.saveUserAfterEdit(user)} userEditName={this.state.userEditName} userEditPhone={this.state.userEditPhone}
            id={this.state.id} userEditEmail={this.state.userEditEmail} userEditPermission={this.state.userEditPermission}
            isDisplayEditUser={this.state.isDisplayEditUser} changeStatus={() => { this.changeStatus() }} isDisplayButton={this.state.isDisplayButton}
            getTextSearchFromChild={(val) => this.getTextSearch(val)} />
          <div className="col-12">
            <hr />
          </div>
            <TableData deleteUser={(id) => this.deleteUser(id)} isDisplayEditUser={this.state.isDisplayEditUser} editUser={(user) => this.editUser(user)} dataUser={JSON.parse(localStorage.getItem("data"))} />
            <AddNewUser isDisplayEditUser={this.state.isDisplayEditUser} status={this.state.isDisplayForm} addNewuser={(name, phone, permission) => this.addNewuser(name, phone, permission)} />
        </div>
      </div>
    );
  }
}
export default App;
