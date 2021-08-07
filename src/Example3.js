import React, { Component } from 'react'
import data from './Component/getemp/getEmployeeList.json'

class Example3 extends Component {
  render() {
    return (
      <div>
        {data.Employess.map((skill) => {
          return (
            <div>
              <table>
                <tr>
                  <th></th>
                  <th> 20 Apr 2021</th>
                  <th> 21 Apr 2021</th>
                  <th> 22 Apr 2021</th>
                  <th> 23 Apr 2021</th>
                  <th> 24 Apr 2021</th>
                  <th> 25 Apr 2021</th>
                </tr>

                <tr className="fill" draggable="true">
                  <td>{skill.Name}</td>
                  <td className="empty"> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </table>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Example3
