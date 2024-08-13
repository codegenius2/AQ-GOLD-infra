/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVideoInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  tags?: Array< string | null > | null,
  category?: string | null,
  videoUrl: string,
  thumbnailUrl?: string | null,
  isForKids?: boolean | null,
  isRestricted?: boolean | null,
  playlist?: string | null,
  scheduleTime?: string | null,
  timezone?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelVideoConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  category?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  isForKids?: ModelBooleanInput | null,
  isRestricted?: ModelBooleanInput | null,
  playlist?: ModelStringInput | null,
  scheduleTime?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Video = {
  __typename: "Video",
  id: string,
  title: string,
  description?: string | null,
  tags?: Array< string | null > | null,
  category?: string | null,
  videoUrl: string,
  thumbnailUrl?: string | null,
  isForKids?: boolean | null,
  isRestricted?: boolean | null,
  playlist?: string | null,
  scheduleTime?: string | null,
  timezone?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateVideoInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  category?: string | null,
  videoUrl?: string | null,
  thumbnailUrl?: string | null,
  isForKids?: boolean | null,
  isRestricted?: boolean | null,
  playlist?: string | null,
  scheduleTime?: string | null,
  timezone?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteVideoInput = {
  id: string,
};

export type ModelVideoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  category?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  isForKids?: ModelBooleanInput | null,
  isRestricted?: ModelBooleanInput | null,
  playlist?: ModelStringInput | null,
  scheduleTime?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVideoConnection = {
  __typename: "ModelVideoConnection",
  items:  Array<Video | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionVideoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  videoUrl?: ModelSubscriptionStringInput | null,
  thumbnailUrl?: ModelSubscriptionStringInput | null,
  isForKids?: ModelSubscriptionBooleanInput | null,
  isRestricted?: ModelSubscriptionBooleanInput | null,
  playlist?: ModelSubscriptionStringInput | null,
  scheduleTime?: ModelSubscriptionStringInput | null,
  timezone?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVideoFilterInput | null > | null,
  or?: Array< ModelSubscriptionVideoFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos?:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      category?: string | null,
      videoUrl: string,
      thumbnailUrl?: string | null,
      isForKids?: boolean | null,
      isRestricted?: boolean | null,
      playlist?: string | null,
      scheduleTime?: string | null,
      timezone?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
  owner?: string | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    category?: string | null,
    videoUrl: string,
    thumbnailUrl?: string | null,
    isForKids?: boolean | null,
    isRestricted?: boolean | null,
    playlist?: string | null,
    scheduleTime?: string | null,
    timezone?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};
