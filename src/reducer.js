const initialState={
    loading: false,
    alluserss: [],
    id: [],
    currUser:{}
}
const alluserss = (state = [], action) => {
    switch (action.type) {
      
      case 'START_LOADING':
        return {...state,
            loading: true,
        }
      case 'ADD_USERS':
        return {...state,
            id: action.id,
            loading: false,  
          } 
        case 'FETCH_USER':
            return {...state,
                currUser: action.currUser,
                loading: false,
            }

      default: 
        return state
    }
  }
  export default alluserss

 