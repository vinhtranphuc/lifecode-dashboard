const accessTokenDefaultSate = {};
const currentUserDefaultSate = {};
const accountAvailabilityDefaultSate = {};

export const AccessToken = (state = accessTokenDefaultSate, action) => {
    switch (action.type) {
        case 'ACCESS_TOKEN':
            return action.data;
        default:
            return state;
    }
};

export const CurrentUser = (state = currentUserDefaultSate, action) => {
    switch (action.type) {
        case 'GET_CURRENT_USER':
            return action.data;
        case 'CLEAR_CURRENT_USER':
            return action.data;
        default:
            return state;
    }
};

export const SignUp = (state = currentUserDefaultSate, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return action.data;
        default:
            return state;
    }
};

export const AccountAvailability = (state = accountAvailabilityDefaultSate, action) => {
    switch (action.type) {
        case 'CHECK_USERNAME_AVAILABILITY':
            return action.data;
        case 'CHECK_EMAIL_AVAILABILITY':
            return action.data;
        default:
            return state;
    }
};





        
