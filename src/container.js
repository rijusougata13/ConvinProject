import { connect } from 'react-redux'
import { addUsers,fetchUser } from './action'
import App from './App'
const mapStateToProps = state => ({
  alluserss: state.id,
    currUser: state.currUser,
    loading: state.loading
})
const mapDispatchToProps = dispatch => ({
  addUsers: () => dispatch(addUsers()),
  fetchUser: (props) => dispatch(fetchUser(props)),
  setLoading: () => dispatch({ type: 'START_LOADING' })
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)