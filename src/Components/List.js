import React from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';


class List extends React.Component {
    static contextType = ExerciseContext;

    

    render() {
        const { handleinput, exerciseName } = this.context;

        return (
            <>
            <div>
                <form>
                    <label>Exercise</label>
                    <input value={exerciseName} type="text" onInput={handleinput}/>
                </form>
            </div>

            </>
        )
    }


}



export default List;