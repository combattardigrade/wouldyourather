import { saveQuestion, saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, cb) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })
            .then((question) => {
                dispatch(addQuestion(question)) 
                cb()
            })
    }
}