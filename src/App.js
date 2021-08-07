import React from 'react';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return <div className="App">
    <main className="flexbox">
      
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>WorkOrder#1</p>
        </Card>
        <Card id="card-3" className="card" draggable="true">
          <p>WorkOrder#2</p>
        </Card>
        <Card id="card-4" className="card" draggable="true">
          <p>WorkOrder#3</p>
        </Card>
        <Card id="card-5" className="card" draggable="true">
          <p>WorkOrder#4</p>
        </Card>
        <Card id="card-6" className="card" draggable="true">
          <p>WorkOrder#5</p>
        </Card>
        <Card id="card-7" className="card" draggable="true">
          <p>WorkOrder#6</p>
        </Card>
      </Board>
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
      <tr>
        <td>Alice </td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
        
      </Board></td>
      </tr>
      <tr>  
        <td>Bob </td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
      </tr>
      <tr>
        <td>Carol </td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        </tr>
      <tr>
        <td>Dave</td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
        
      </Board></td>
        </tr>
      <tr>
        <td>Eve </td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
        <td><Board id="board-2" className="board">
        
      </Board></td>
      <td><Board id="board-2" className="board">
       
      </Board></td>
      </tr>
      
      </table>
    </main>

  </div>
}

export default App
