import React from 'react'

const Profile = ({character}) => {
  return (
    <div>
    <h2>{character.name}</h2>
    <h4>{character.age}</h4>
    <h4>{character.occupation}</h4>
    <h4>{character.catchPhrase}</h4>
    </div>
  )
}

export default Profile