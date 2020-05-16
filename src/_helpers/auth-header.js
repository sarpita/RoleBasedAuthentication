import { authenticationService } from '@/_services';

function authHeader() {
    const currentUser = authenticationService.currentUserValue;
    return  (currentUser && currentUser.token) ?
        { Authorization: `Bearer ${currentUser.token}` }:  {};
}

export {authHeader};