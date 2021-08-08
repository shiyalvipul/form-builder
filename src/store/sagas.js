
import { takeEvery, put } from "redux-saga/effects";
import * as actionTypes from '../components/redux/actionTypes';

function* formTitleAdd( payloadData ) {
  yield put({ type: actionTypes.ADD_FORM_TITLE, payload: payloadData });
}
function* formQuestion( payloadData ) {
  yield put({ type: actionTypes.ADD_FORM_QUESTION, payload: payloadData });
}

export function* watchForm() {
  yield takeEvery('ADD_FORM_TITLE_ASYNC', formTitleAdd);
  yield takeEvery('ADD_FORM_QUESTION_ASYNC', formQuestion);

}