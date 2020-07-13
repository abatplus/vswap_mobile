import IProfile from '../../interfaces/IProfile';

export enum ActionTypes {
  SET_LOADING = 'SET_LOADING',
  GET_PROFILE = 'GET_PROFILE',
  GET_PROFILES = 'GET_PROFILES',
  ADD_PROFILE = 'ADD_PROFILE',
  REMOVE_PROFILE = 'REMOVE_PROFILE',
  CHANGE_PROFILE = 'CHANGE_PROFILE',
}

export const setProfileLoading = (isLoading: boolean) => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: isLoading,
  };
};

export const getProfiles = () => {
  return {
    type: ActionTypes.GET_PROFILES,
    payload: {},
  };
};

export const getProfile = (id: string) => {
  return {
    type: ActionTypes.GET_PROFILE,
    payload: id,
  };
};

export const addNewProfile = (newProfile: IProfile) => {
  return {
    type: ActionTypes.ADD_PROFILE,
    payload: newProfile,
  };
};

export const changeProfile = (profile: IProfile) => {
  return {
    type: ActionTypes.CHANGE_PROFILE,
    payload: profile,
  };
};

export const removeProfile = (profileId: string) => {
  return {
    type: ActionTypes.REMOVE_PROFILE,
    payload: profileId,
  };
};
