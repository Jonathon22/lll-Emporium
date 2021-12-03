import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../components/Cards/UserCards/UserCards';
import { getUsers } from '../../helpers/data/userData';

const userCardView = () => {
  const [userGroup, setUserGroup] = useState([]);

  useEffect(() => {
    getUsers().then((userList) => {
      setUserGroup(userList);
    });
  }, []);

  return (
    <>
      {userGroup.map((userObj) => (
        <UserCard RoleTypeId={userObj.roleTypeId} FirstName={userObj.firstName} LastName={userObj.lastName} key={userObj.id} bio={userObj.bio} profilePicUrl={userObj.profilePicUrl} />
      ))}
    </>
  );
};

userCardView.propTypes = {
  userGroup: PropTypes.any
};

export default userCardView;
