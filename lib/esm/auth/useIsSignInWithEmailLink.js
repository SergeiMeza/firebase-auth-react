import { useCallback } from 'react';
import { isSignInWithEmailLink } from 'firebase/auth';
export default function useIsSignInWithEmailLink(auth) {
    var _isSignInWithEmailLink = useCallback(function (email) {
        var isEmailLink = isSignInWithEmailLink(auth, email);
        return isEmailLink;
    }, [auth]);
    return [_isSignInWithEmailLink];
}
