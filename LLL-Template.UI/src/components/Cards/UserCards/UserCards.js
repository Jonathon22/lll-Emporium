import PropTypes from 'prop-types';
import React from 'react';
import UserForms from '../../Forms/UserForms/UserForms';

import {
  Card,
  CardBio,
  CardImg,
  CardBody,
  UserCardButtons,
  EditButton,
  Modal,
  ButtonModal
} from './UserCardElements';

export const UserCard = ({
  id,
  profilePicUrl,
  bio,
  FirstName,
  LastName,
  RoleTypeId,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
  <>
      <Card key={id}>
        <CardImg src={profilePicUrl} />
        <CardBody>
          <CardBio>{bio}</CardBio>
        </CardBody>
        <UserCardButtons>
          <EditButton className="EditUser" onClick={openModal} />
        <Modal
              isOpen={modalIsOpen}
              className="Modal"
            >
              <ButtonModal className="modalClose" onClick={closeModal}>
              </ButtonModal>
              <UserForms
                editUserForm="Edit User"
                FirstName={FirstName}
                LastName={LastName}
                RoleTypeId={RoleTypeId}
              />
            </Modal>
          </UserCardButtons>
      </Card>
  </>
  );
};

UserCard.propTypes = {
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
  RoleTypeId: PropTypes.string,
  id: PropTypes.string,
  profilePicUrl: PropTypes.string,
  bio: PropTypes.string,
};

export default UserCard;
