import React, { createContext, Component } from 'react';

export const ExerciseContext = createContext();

class ExerciseContextProvider extends Component {
    state = {
        exerciseName: '',
        exerciseList: []
    }

    handleInput = (e) => {
        this.setState({
            exerciseName: e.target.value
        })
        e.preventDefault();

    }

    render() {

        return (
            <ExerciseContext.Provider value={{
                ...this.state,
                handleInput: this.handleInput,
            }}>

                {this.props.children}
            </ExerciseContext.Provider>
        );
    }
}

export default ExerciseContextProvider;