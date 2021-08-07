import React, { Component } from 'react'
import data from './Component/getwork/getWorkOrderList.json'

class Example1 extends Component {
  render() {
    return (
      <div>
        {data.job.map((skill) => {
          return (
            <div>
              <table>
                <tr>
                  <th>{skill.jobname}</th>
                </tr>
                <td>
                  {skill.workorders.map((skillDetail) => {
                    return <td>{skillDetail.name}</td>
                  })}
                </td>
              </table>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Example1
