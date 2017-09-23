
export default function userReducer(user = {}, action) {

    switch (action.type) {

        case 'CREATE_NEW_USER_ID':
            console.log('toli | reducer CREATE_NEW_USER_ID');

            return {
                username: user["username"],
                id: action.id
            };


        default:
            console.log('toli | default');
            return user;
    }
}