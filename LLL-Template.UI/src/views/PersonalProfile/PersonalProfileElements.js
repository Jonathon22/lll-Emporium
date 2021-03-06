import styled from 'styled-components';

const ProfileOuterDiv = styled.div`
  width: 90%;
  margin 120px 3em;
`;

const ProfileTitle = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 1.2em;
`;

const ProfilePicDiv = styled.div`
  flex-basis: 18%;
  margin: 10px 5px 0;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  max-width: 150px;
  height: auto:
`;

const ProfileInnerDiv = styled.div`
  margin: 4em 0 2em;
  display: flex;
  flex-flow: wrap;
`;

const ProfileInfoDiv = styled.div`
  flex-basis: 78%;
  margin: 10px 0 0 5px;;
`;

const ProfileInfoLineDiv = styled.div`
  display: flex;
  margin: 3px 0 3px 0;
`;

const ProfileInfoLineHeading = styled.div`
  flex-basis: 20%;
  min-width: 8em;
`;

const ProfileInfoLineData = styled.div`
  flex-basis: 80%;
`;

const ProfileBioSection = styled.div`
  display: flex;
  margin: 1em 0;
`;

const ProfileBioHeading = styled.div`
  flex-basis: 20%;
  min-width: 8em
`;

const ProfileBioText = styled.div`
  flex-basis: 80%;
`;

const ProfileImageInfoLineDiv = styled.div`
  max-width: 20em;
  margin: 3px 0 3px 5px;
  overflow-x: scroll;
  white-space: nowrap;
`;

const ButtonDiv = styled.div`
  margin: 1em 0 0 0
`;

const ProfileEditButton = styled.button`
  border-radius: 5px;
  background-color: blue;
  color: white;
  margin: 5px 5px 5px 0;
  width: 5em;
`;

const Modal = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index:  ${({ isOpen }) => (isOpen ? 999 : -1)};
  transition: 0.2s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  min-width: 300px;
  max-width: 450px;
`;

export {
  ProfileOuterDiv,
  ProfileTitle,
  ProfileInnerDiv,
  ProfilePicDiv,
  ProfileImg,
  ProfileInfoDiv,
  ProfileInfoLineDiv,
  ProfileInfoLineHeading,
  ProfileBioSection,
  ProfileBioHeading,
  ProfileBioText,
  ProfileInfoLineData,
  ProfileImageInfoLineDiv,
  ButtonDiv,
  ProfileEditButton,
  Modal,
  ModalContent
};
