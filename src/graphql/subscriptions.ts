/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateVideo = /* GraphQL */ `subscription OnCreateVideo(
  $filter: ModelSubscriptionVideoFilterInput
  $owner: String
) {
  onCreateVideo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVideoSubscriptionVariables,
  APITypes.OnCreateVideoSubscription
>;
export const onUpdateVideo = /* GraphQL */ `subscription OnUpdateVideo(
  $filter: ModelSubscriptionVideoFilterInput
  $owner: String
) {
  onUpdateVideo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVideoSubscriptionVariables,
  APITypes.OnUpdateVideoSubscription
>;
export const onDeleteVideo = /* GraphQL */ `subscription OnDeleteVideo(
  $filter: ModelSubscriptionVideoFilterInput
  $owner: String
) {
  onDeleteVideo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVideoSubscriptionVariables,
  APITypes.OnDeleteVideoSubscription
>;
