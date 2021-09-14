import { TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../../store/weather/reducers'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector