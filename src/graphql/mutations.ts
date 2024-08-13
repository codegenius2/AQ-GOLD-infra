/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createVideo = /* GraphQL */ `mutation CreateVideo(
  $input: CreateVideoInput!
  $condition: ModelVideoConditionInput
) {
  createVideo(input: $input, condition: $condition) {
    id
    title
    description
    tags
    category
    videoUrl
    thumbnailUrl
    isForKids
    isRestricted
    playlist
    scheduleTime
    timezone
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVideoMutationVariables,
  APITypes.CreateVideoMutation
>;
export const updateVideo = /* GraphQL */ `mutation UpdateVideo(
  $input: UpdateVideoInput!
  $condition: ModelVideoConditionInput
) {
  updateVideo(input: $input, condition: $condition) {
    id
    title
    description
    tags
    category
    videoUrl
    thumbnailUrl
    isForKids
    isRestricted
    playlist
    scheduleTime
    timezone
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVideoMutationVariables,
  APITypes.UpdateVideoMutation
>;
export const deleteVideo = /* GraphQL */ `mutation DeleteVideo(
  $input: DeleteVideoInput!
  $condition: ModelVideoConditionInput
) {
  deleteVideo(input: $input, condition: $condition) {
    id
    title
    description
    tags
    category
    videoUrl
    thumbnailUrl
    isForKids
    isRestricted
    playlist
    scheduleTime
    timezone
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVideoMutationVariables,
  APITypes.DeleteVideoMutation
>;
