import React from 'react'

const Props2 = (prop) => {
  console.log(prop.inistate);
  //destructure
  let {abc,state}=prop.objdata
  let {food,sys} = prop.objdata.special//obin methodject method 
  //
  return (
    <div>
      {/* object destructure */}
<h2>{abc}</h2>
<h2>{state}</h2>
<h2>{food}</h2>
<h2>{sys}</h2>
{/*  */}
      <h3>{prop.course}</h3>
      {/* <h2>{prop.objdata.abc}</h2> */}
      <h2>{prop.objdata.special.food}</h2>
      {/* state ex */}
      <h3>State :{prop.statevariable}</h3>


      {/* fetch */}
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Company</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {prop.inistate.map((list) => (
            <tr>
              <td>{list.address.city}</td>
              <th>{list.company.name}</th>
              <td>{list.website}</td>

            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default Props2
