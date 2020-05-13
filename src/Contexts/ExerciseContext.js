import React, { createContext, Component } from 'react';

export const ExerciseContext = createContext();

class ExerciseContextProvider extends Component {
    state = {
        exerciseName: '',
        exerciseList: [],
        noOfExercises: null,

    }

    handleInput = (e) => {
        this.setState({
            exerciseName: e.target.value
        })
        e.preventDefault();
    }

    handleSubmit = (e) => {
        this.setState({
            exerciseName: '',
            exerciseList: [
                ...this.state.exerciseList,
                this.state.exerciseName
            ]
        });
        e.preventDefault();
    }

    handleNumber = (e) => {
        this.setState({ noOfExercises: e.target.value });
        e.preventDefault();
    }

    render() {

        return (
            <ExerciseContext.Provider value={{
                ...this.state,
                handleSubmit: this.handleSubmit,
                handleInput: this.handleInput,
                handleNumber: this.handleNumber,
            }}>

                {this.props.children}
            </ExerciseContext.Provider>
        );
    }
}

export default ExerciseContextProvider;