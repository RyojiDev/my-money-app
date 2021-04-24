import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import PessoaReducer from '../dashboard/pessoaReducer';
import TabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
})

export default rootReducer;