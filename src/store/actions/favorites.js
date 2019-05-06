export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

// REQUEST -> SAGA -> API CALL -> SUCCESS

// SUCCESS
export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});

// ERROR
export const addFavoriteFailure = error => ({
  type: 'ADD_FAVORITE_FAILURE',
  payload: { error },
});
