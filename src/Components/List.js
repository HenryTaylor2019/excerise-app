import React from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';


class List extends React.Component {
    static contextType = ExerciseContext;



    render() {
        const { handleInput, exerciseName, exerciseList, handleSubmit, handleNumber, noOfExercises } = this.context;

        return (
            <>
                <div>
                    <div className="form-group">
                        <label>Exercise:</label>
                        <input className="form-control" type="number" value={noOfExercises} onChange={handleNumber} min="0" />
                        <input className="form-control" type="text" value={exerciseName} onChange={handleInput} />
                        <button onClick={handleSubmit}>Add Exercise</button>
                    </div>
                </div>

                <div className="center main-form">
                <table className="ui celled table ">
                    <tbody className="center"> 
                        {    
                            exerciseList.map((name, index) => (
                                <tr key={index <= noOfExercises - 1 ? index + 1 : index}>
                                    <td >{index + 1}</td>
                                    <td>{name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
              
             {/* <button className="ui secondary button" onClick={handleTeams}>Generate Game</button> */}
     
            </div>

            </>
        )
    }

}



export default List;