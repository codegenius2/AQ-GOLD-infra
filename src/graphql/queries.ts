/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getVideo = /* GraphQL */ `query GetVideo($id: ID!) {
  getVideo(id: $id) {
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
` as GeneratedQuery<APITypes.GetVideoQueryVariables, APITypes.GetVideoQuery>;
export const listVideos = /* GraphQL */ `query ListVideos(
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVideosQueryVariables,
  APITypes.ListVideosQuery
>;
