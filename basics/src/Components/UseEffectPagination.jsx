import React, { useEffect, useState } from 'react'


const UseEffectPagination = () => {
    const [userdata, setUserdata] = useState([])
    const [pagenum, setPagenum] = useState(0)

    useEffect(() => {
        getUserdata()
    }, [pagenum])

    const getUserdata = async () => {
        let data = await fetch(`https://dummyapi.io/data/v1/user?page=${pagenum}&limit=10`,
            {
                method: 'get',
                headers: {
                    "app-id": "6679408da878d808edb827c0",
                },
            })
        let res = await data.json()
        setUserdata(res.data)
    }
    const handleClick = (num) => {
        setPagenum(num)
    }
    return (
        <>
            <div className='container text-center'>
                <h2>page</h2>
                <div className="row">
                    {userdata.length ?
                        (<div>
                            <div className="table-responsive">
                                <table className='table table-border'>
                                    <thead>
                                        <tr>
                                            <th scope='col' className='border'>Picture</th>
                                            <th scope='col' className='border'>ID</th>
                                            <th scope='col' className='border'>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userdata.map((user) => (
                                            <tr>
                                                <td className='border'><img src={user.picture} alt="" /></td>
                                                <td className='border'>{user.id}</td>
                                                <td className='border'> {user.title} {user.firstName} {user.lastName}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        )
                        : 
                        (<h2>loading</h2>)
                    }
                </div>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button className='btn btn-primary m-2' onClick={() => handleClick(num)}>{num}</button>
                ))}
            </div>
        </>
    )
}

export default UseEffectPagination



