import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

class UsersList extends React.Component {
    constructor(props){
        super(props);
    this.state = {
            users: {
                login: '',
                id: null,

            },
    }

    this.handleClick = (event) => {
            event.preventDefault();
            axios.get(`https://api.github.com/users?since=0&per_page=100`)
                .then((res) => {
                    console.log(res);
                    // const login = res.data.login;

                })
        };
    }
    render(){
        return <div>
            <Button onClick={this.handleClick}>Submit</Button>
            <div>
                <ul>
                    {/*{this.state.users.map((user) => (<li>{user.login}</li>))}*/}
                </ul>
            </div>
        </div>
    }
}
export default UsersList;
