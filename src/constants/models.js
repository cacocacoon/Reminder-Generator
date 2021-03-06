import Immutable from 'immutable';
import {
	INIT_CREATE_ENTITY,
	INIT_REMINDER,
} from '../constants/CONST';

export const UIState = Immutable.fromJS({
	logIn: {
		modalIsOpen: false,
		enableLogInButton: true
	},
	operateReminderList: {
		open: false,
		step: 0,
	},
	reminderEditor: {
		open: false,
	},
	previewReminder: {
		companyNameInputErrorText: '',
	},
});
// const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
export const dataState = Immutable.fromJS({
	logIn: {
		email: 'test@ptt.cc',
		password: '123456'
	},
	operateReminderList: {
		type: '',
		name: '',
		nameList: [],
		errorText: '',
	},
	previewReminder: INIT_REMINDER,
	createEntity: INIT_CREATE_ENTITY,


});
