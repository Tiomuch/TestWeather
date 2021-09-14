import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreator from '../../store/actionCreators'

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actionCreator, dispatch)
}