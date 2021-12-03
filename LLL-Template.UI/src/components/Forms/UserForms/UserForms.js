import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { updateUser, getUsers } from '../../../helpers/data/userData';
import { getRoleTypes } from '../../../helpers/data/roleTypeData';

import {
  Label,
  Input,
  UserUpdateForm,
  UserUpdateSubmit,
  Option
} from './UserFormElements';

const userForm = ({
  id,
  firstName,
  lastName,
  roleTypeId,
  profilePicURL,
  bio,
}) => {
  const [user, setUser] = useState({
    id: id || '',
    firstName: firstName || ' ',
    lastName: lastName || ' ',
    RoleTypeId: roleTypeId || ' ',
    ProfilePicURL: profilePicURL || ' ',
    Bio: bio || ' ',
  });

  const [getRoles, setRoles] = useState([]);

  const handleInputChange = (e) => {
    setUser((prevState) => ({
    // taking all values from changes and resetting
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handleSubmit = () => {
    if (user.id) {
      updateUser(user, id).then(() => getUsers().then((response) => setUser(response)))
        .then(() => {
          <Popup trigger={handleInputChange} position="right center">
          <div>{firstName} {lastName} has been updated</div>
        </Popup>;
        });
    }
  };

  useEffect(() => {
    getRoleTypes().then((response) => setRoles(response));
  }, []);

  /* const handleDelete = () => {
    let canIDelete = false;
    if (admin.roleTypeName === "Administrator") {
    canIDelete = true;
    deleteUser(id).then(() => getUsers().then((response) => (response)))
    };
    return (
      <Popup trigger={handleDelete} position="right center">
      <div>{user.id} has been removed</div>
    </Popup>
    )
  }
*/
  return (
   <UserUpdateForm
   >
       <Label className="First Name">:First Name </Label>
    <Input
     className="firstName"
     id="firstName"
     name="firstName"
     type="text"
     Placeholder="Enter updated First Name"
     value={user.firstName}
     onChange={handleInputChange}
    ></Input>
    <Label ClassName="Last Name">: Last Name</Label>
    <Input
    className="lastName"
    name="lastName"
    type="text"
    placeholder="Enter updated last name"
    value={user.lastName}
    onChange={handleInputChange}
    ></Input>
    <Label className="Bio">:Bio</Label>
    <Input
    className="Bio"
    name="Bio"
    placeholder="Enter updated bio"
    value={user.Bio}
    onChange={handleInputChange}
    ></Input>
    <Label className="Image">:Image</Label>
    <Input
    className="ProfilePicURL"
    name="ProfilePicURL"
    type="text"
    value={user.ProfilePicURL}
    placeholder="enter photo url"
    onChange={handleInputChange}
    ></Input>
    <Label className="Roletypes">Roletypes</Label>
    <Input
    id='exampleSelect'
    className= "roleType"
    >
    {getRoles?.map((RoleType) => (
      <Option
      key={RoleType.id}
      value={RoleType.id}
      selected={RoleType.id === roleTypeId}
      >
        {RoleType.roleTypeName}
      </Option>
    ))}
   </Input>
    <UserUpdateSubmit
    type="submit"
    label="Submit"
    onClick={handleSubmit}
    />
   </UserUpdateForm>
  );
};

userForm.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  RoleTypeId: PropTypes.string,
  ProfilePicURL: PropTypes.string,
};

export default userForm;
