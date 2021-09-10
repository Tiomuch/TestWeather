import { TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../store/reducers/weather'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector