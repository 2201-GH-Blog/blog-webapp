import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/users'

/**
 * COMPONENT
 */
export const Home = props => {
  const { username } = props

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  return (
    <div>
      <h3>Welcome, {username}</h3>
      {/* <p>{users}</p> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    users: state.users
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

export default connect(mapState)(Home)
