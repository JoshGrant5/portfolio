import me from '../img/me.png'

export default function ProfilePic(props) {
  return (
    <div id='bio-img-container'>
      <img src={me} alt='bio-profile-pic' id='bio-profile-pic' />
    </div>
  )
};