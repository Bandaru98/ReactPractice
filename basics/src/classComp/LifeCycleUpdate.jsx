import React, { Component } from 'react'

export class LifeCycleUpdate extends Component {
  state = {
    userinfo: [],
    pageno: 0,
  };

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const { pageno } = this.state;
    let data = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageno}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "6679408da878d808edb827c0",
        },
      }
    )
    let res = await data.json()
    this.setState({ userinfo: res.data })
  }

  handleOnchange=(num)=> {
    this.setState({ pageno: num })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageno !== this.state.pageno) {
      this.getdata()

    }
  }

  render() {
    console.log(this.state.pageno);
    return (
      <div className='container'>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row">
              {this.state.userinfo.map((user) => (
                <div className="row border m-2">
                  <div className="col-3 p-2"><img src={user.picture} alt={user.firstName} /></div>
                  <div className="col-9"><h5>{user.id}</h5><h5>{user.title} {user.firstName} {user.lastName}</h5></div>
                </div>
              ))}

            </div>
            <h3>Updating Phase</h3>
            {[1, 2, 3, 4, 5].map((num) => (
              <button className='btn btn-primary m-2' onClick={()=>this.handleOnchange(num)}>{num}</button>
            ))}


          </div>
          <div className="col-3"></div>
        </div>

      </div>
    )
  }
}

export default LifeCycleUpdate
