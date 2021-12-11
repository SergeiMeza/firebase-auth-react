"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var auth_1 = require("firebase/auth");
function useIsSignInWithEmailLink(auth) {
    var _isSignInWithEmailLink = (0, react_1.useCallback)(function (email) {
        var isEmailLink = (0, auth_1.isSignInWithEmailLink)(auth, email);
        return isEmailLink;
    }, [auth]);
    return [_isSignInWithEmailLink];
}
exports.default = useIsSignInWithEmailLink;
