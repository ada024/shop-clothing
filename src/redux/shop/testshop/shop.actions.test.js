import ShopActionTypes from '../shop.types';
import { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFailure, fetchCollectionsStartAsync } from '../shop.actions';


describe('shop actions-test', () => {

    it('should generate fetchCollectionsStart action', () => {
        expect(fetchCollectionsStart().type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
    });
    it('should generate fetchCollectionsSuccess action', () => {
        const mockCollectionsMap = {
            hats: {
                id: 1
            }
        };

        const action = fetchCollectionsSuccess(mockCollectionsMap);

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
        expect(action.payload).toEqual(mockCollectionsMap);
    });



    it('should generate fetchCollectionsFailure action', () => {
        const action = fetchCollectionsFailure('Fetch failed');

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
        expect(action.payload).toEqual('Fetch failed');
    });


});

