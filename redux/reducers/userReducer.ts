
export default function userReducer(user = {}, action) {
    console.log('toli | reducer user',user);
    
        switch (action.type) {
    
            case 'CREATE_NEW_USER_ID':
                return {
                    username: user["username"],
                    id: action.id
                };
    
    
    
            default:
            console.log('toli | default');
                return user;
        }
    }