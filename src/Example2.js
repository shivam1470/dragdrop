import React, { Component } from 'react'
import data from './Component/postwork/postWorkOrderList.json'

class Example2 extends Component {
  render() {
    return (
      <div>
        {data.job.map((skill) => {
          return (
            <div>
              <h4>{skill.jobname}</h4>
              <ul>
                {skill.workorders.map((skillDetail) => {
                  return <li>{skillDetail.name}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Example2
