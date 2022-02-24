import shopReducer from "../shop.reducer";
import ShopActionTypes from "../shop.types";


describe('shop reducer-test', () => {
    it('should return initial state ', () => {
        const INITIAL_STATE = {
            collections: null,
            isFetching: false,
            errorMessage: undefined
        }
        expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE)
    });


    it('should handle request shop_start action ', () => {
        const INITIAL_STATE = {
            collections: null,
            isFetching: false,
            errorMessage: undefined
        }
        expect(shopReducer(INITIAL_STATE, {
            type: ShopActionTypes.FETCH_COLLECTIONS_START,
        })).toEqual({
            collections: null,
            isFetching: true
        })
    });

    it('should handle request shop_success action ', () => {
        const INITIAL_STATE = {
            collections: null,
            isFetching: false,
            errorMessage: undefined
        }
        expect(shopReducer(INITIAL_STATE, {
            type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            payload: [{
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            }]
        })).toEqual({
            collections: [{
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            }],

            isFetching: false
        })
    });


    it('should handle request shop_failed action ', () => {
        expect(shopReducer(undefined, {
            type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payload: "Network error"
        })).toEqual({
            collections: null,
            errorMessage: "Network error",
            isFetching: false
        })
    })
});


