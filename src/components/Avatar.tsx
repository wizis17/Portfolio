// Avatar component using the user's profile picture
import profilePic from '../../Public/image/profile.PNG';

export function Avatar({ className = '' }: { className?: string }) {
  return (
    <img src={profilePic} alt="Profile Picture" className={className} />
  );
}
