import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, addUserAnswer, addUserQuestion  } from '../actions/users'
import { receiveQuestions, addAnswerVote, addQuestion } from '../actions/questions'
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())

        return getInitialData()
            .then(({users,questions}) => { 
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleAddAnswer (qid, answer) {
    
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestionAnswer({ 
            authedUser, 
            qid, 
            answer 
        })
            .then(() => {
                
                dispatch(addUserAnswer({ 
                    authedUser, 
                    qid, 
                    answer 
                }))
                dispatch(addAnswerVote({ 
                    authedUser, 
                    qid, 
                    answer 
                }))
            })
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
                dispatch(addUserQuestion({
                    authedUser,
                    qid: question.id
                })) 
                dispatch(addQuestion(question))
                cb()
            })
    }
}

export function showLoading() {
    return {
        type: SHOW_LOADING,
        loading: true
    }
}

export function hideLoading() {
    return {
        type: HIDE_LOADING,
        loading: false
    }
}