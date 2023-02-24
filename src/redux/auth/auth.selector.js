export const selectAuthToken = state=> state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectIsRefreshing = state=> state.auth.isRefreshing
export const selectIsLoading = state=>state.auth.isLoading;