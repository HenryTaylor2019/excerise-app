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
                        <div className="form-group">
                            <label>Exercise:</label>
                            <input value={exerciseName} className="form-control" type="text" onInput={handleinput} />
                        </div>
                    </form>
                </div>

            </>
        )
    }


}



export default List;