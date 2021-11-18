import './profile.scss';

const Profile = () => {
    return(
        <div className="profile-container">
            Profile Module
        </div>
    )
}

export default {
    routeProps: {
        path: '/dashboard/profile',
        component: Profile,
    },
    name: 'Profile',
}