import {connect} from 'react-redux';
import InitReminderListStepper from '../../components/Stepper/InitReminderList';
import {OPERATE_REMINDER_LIST} from '../../constants/CONST';

import {
	goOperatingStep,
	setOperatingType,
	getReminderListNameListFromFirebase,
	setOperateNameInputErrorText,
	setOperateReminderListName,
} from '../../actions';

const CREATE = OPERATE_REMINDER_LIST.getIn(['TYPE', 'CREATE']);
const FETCH = OPERATE_REMINDER_LIST.getIn(['TYPE', 'FETCH']);

export default connect(
	(state) => ({
		type: state.getIn(['data', 'operateReminderList', 'type']),
		step: state.getIn(['ui', 'operateReminderList', 'step']),
		name: state.getIn(['data', 'operateReminderList', 'name']),
		nameList: Array.from(state.getIn(['data', 'operateReminderList', 'nameList'])),
		errorText: state.getIn(['data', 'operateReminderList', 'errorText']),
	}),

	(dispatch) => ({
		goToStep: (step) => () => {
			dispatch(goOperatingStep({step}));
			// TODO: clean step2 data
		},

		// TODO: test
		setOperatingType: (type) => () => {
			dispatch(setOperatingType({type}));
			dispatch(goOperatingStep({step: 1}));
			dispatch(getReminderListNameListFromFirebase());
		},

		updateCreateInput: (event) => {
			//nameList do not includes inputText, if not, set errorText
			// if(nameList.includes(inputText)) {
			// 	//TODO: set errorText
			// 	dispatch(setOperateNameInputErrorText({
			// 		errorText: '明細表名稱重複',
			// 	}));
			// }
			// else {
			// 	dispatch(setOperateNameInputErrorText({
			// 		errorText: '',
			// 	}));
			// }
			//TODO: save inputText to state
			dispatch(setOperateReminderListName({name: event.target.value}));
		},
		updateFetchInput: (event) => {
			//nameList do includes inputText, if not, set errorText
			// if(!nameList.includes(inputText)) {
			// 	//TODO: set errorText
			// 	dispatch(setOperateNameInputErrorText({
			// 		errorText: '找不到明細表',
			// 	}));
			// }
			// else {
			// 	dispatch(setOperateNameInputErrorText({
			// 		errorText: '',
			// 	}));
			// }
			//TODO: save inputText to state
			dispatch(setOperateReminderListName({name: event.target.value}));
		},
		finish: (name, nameList, type) => {
			if(type === CREATE) {
				return () => {
					// TODO: 新開的明細表名字如果重複就要丟出errorText
					if(nameList.includes(name)) {
						dispatch(setOperateNameInputErrorText({errorText: '明細表名稱重複'}));
						return ;
					}

					dispatch(setOperateNameInputErrorText({errorText: ''}));


				};
			}
			if(type === FETCH) {
				return () => {
					// TODO: 搜尋的明細表名字如果不存在就要丟出errorText
					if(!nameList.includes(name)) {
						dispatch(setOperateNameInputErrorText({errorText: '找不到明細表'}));
						return ;
					}

					dispatch(setOperateNameInputErrorText({errorText: ''}));
				};
			}
		},
	}),
)(InitReminderListStepper);