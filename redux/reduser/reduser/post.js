const initialState = {
  Post: []
}

export default function Post (state = initialState, action ){
  switch(action.type){
    case 'ADD_LIST_BOOKED' :
      const Posts = [ ...state.Post ]
      const List = []
      Posts.forEach(val => {
        if( val.id === action.id && val.booked === false ) {
          val.booked = true
          List.push(val)
        } else {
          List.push(val)
        }
      })
      console.log('добавлено', List)
      return {
        ...state ,
        Post: List
      }
    case 'DELETE_LIST_BOOKED' :
      const DelPosts = [ ...state.Post ]
      const DelList = []
      DelPosts.forEach(val => {
        if( val.id === action.id && val.booked === true ) {
          val.booked = false
          DelList.push(val)
        } else {
          DelList.push(val)
        }
      })
      console.log('удалено', DelList)
      return {
        ...state ,
        Post: DelList
      }
    case 'CREATE_LIST' :
      const CrPosts = [ ...state.Post ]
      CrPosts.unshift(action.list)
      console.log('создано', CrPosts)
      return {
        ...state ,
        Post: CrPosts
      }
    case 'DELETE_LIST' :
      return {
        ...state ,
        Post: state.Post.filter( val => val.id !== action.id)
      }
    default:
      return state
  }
}