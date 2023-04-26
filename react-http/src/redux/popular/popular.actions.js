export const setSelectedLanguageAction = (payload) => {
    return {
        type: 'SELECTED_LANGUAGE',
        payload
    }
}

export const getReposLoadingAction = () => {
    return {
        type: 'GET_REPOS_LOADING',
    }
}

export const getReposSuccessAction = (payload) => {
    return {
        type: 'GET_REPOS_SUCCESS',
        payload
    }
}

export const getReposFailureAction = (payload) => {
    return {
        type: 'GET_REPOS_FAILURE',
        payload
    }
}