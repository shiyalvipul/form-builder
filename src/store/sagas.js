
import { takeEvery, put } from "redux-saga/effects";
import * as actionTypes from '../components/redux/actionTypes';

function* formTitleAdd( payloadData ) {
  yield put({ type: 'ADD_FORM_TITLE_ASYNC', payload: payloadData });
}
function* formQuestion( payloadData ) {
  yield put({ type: 'ADD_FORM_QUESTION_ASYNC', payload: payloadData });
}
function* clearState() {
  yield put({ type: 'CLEAR_STATE_ASYNC', payload: '' });
}
 
export function* watchForm() {
  yield takeEvery(actionTypes.ADD_FORM_TITLE, formTitleAdd);
  yield takeEvery(actionTypes.ADD_FORM_QUESTION, formQuestion);
  yield takeEvery(actionTypes.CLEAR_STATE, clearState);
}