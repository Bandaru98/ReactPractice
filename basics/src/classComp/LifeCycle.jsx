import React, { Component } from 'react'
class LifeCycle extends Component {
    constructor() {
        super()
        console.log('In lifecycle methods executes orderwise first method constructor executes');
    }
    state = {
        name: 'Keerna',
        userinfo: []
    }
    static getDerivedStateFromProps() {
        console.log('second method static getDerivedStateFromProps executes');
        return null
    }
    componentDidMount() {
        console.log('Fourth method componentDidMount executes');
        this.data()
    }
    data = async () => {
        let getdata = await fetch('https://jsonplaceholder.typicode.com/users')
        let result = await getdata.json()
        console.log(result);
        this.setState({ userinfo: result })
    }
    render() {
        console.log('Third render method executes');
        console.log(this.state.userinfo);
        return (
            <div className='container mt-6'>
                <table className='table table-striped table-hover'>
                    <thead className='table table-info text-white'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phonenumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userinfo.map((curElement) => (
                            <tr key={curElement.id}>
                                <td>{curElement.id}</td>
                                <td>{curElement.name}</td>
                                <td>{curElement.username}</td>
                                <td>{curElement.email}</td>
                                <td>{curElement.address.city}</td>
                                <td>{curElement.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LifeCycle;
