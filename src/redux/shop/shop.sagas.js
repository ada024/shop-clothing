import {takeLatest, call, put} from 'redux-saga/effects';
import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";


export function* fetchCollections() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }

}

export function* onFetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
