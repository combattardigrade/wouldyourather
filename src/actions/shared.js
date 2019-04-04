import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'guest'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())

        return getInitialData()
            .then(({users,questions}) => {
                console.log(users)
                console.log(questions)
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}