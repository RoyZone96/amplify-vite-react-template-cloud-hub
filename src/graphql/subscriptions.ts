/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
    id
    username
    password
    name
    email
    bio
    avatar
    projects {
      nextToken
      __typename
    }
    jobs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
    id
    username
    password
    name
    email
    bio
    avatar
    projects {
      nextToken
      __typename
    }
    jobs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
    id
    username
    password
    name
    email
    bio
    avatar
    projects {
      nextToken
      __typename
    }
    jobs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject(
  $filter: ModelSubscriptionProjectFilterInput
  $owner: String
) {
  onCreateProject(filter: $filter, owner: $owner) {
    id
    name
    description
    imageUrl
    userID
    user {
      id
      username
      password
      name
      email
      bio
      avatar
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject(
  $filter: ModelSubscriptionProjectFilterInput
  $owner: String
) {
  onUpdateProject(filter: $filter, owner: $owner) {
    id
    name
    description
    imageUrl
    userID
    user {
      id
      username
      password
      name
      email
      bio
      avatar
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject(
  $filter: ModelSubscriptionProjectFilterInput
  $owner: String
) {
  onDeleteProject(filter: $filter, owner: $owner) {
    id
    name
    description
    imageUrl
    userID
    user {
      id
      username
      password
      name
      email
      bio
      avatar
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateJob = /* GraphQL */ `subscription OnCreateJob(
  $filter: ModelSubscriptionJobFilterInput
  $owner: String
) {
  onCreateJob(filter: $filter, owner: $owner) {
    id
    title
    company
    status
    userID
    user {
      id
      username
      password
      name
      email
      bio
      avatar
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateJobSubscriptionVariables,
  APITypes.OnCreateJobSubscription
>;
export const onUpdateJob = /* GraphQL */ `subscription OnUpdateJob(
  $filter: ModelSubscriptionJobFilterInput
  $owner: String
) {
  onUpdateJob(filter: $filter, owner: $owner) {
    id
    title
    company
    status
    userID
    user {
      id
      username
      password
      name
      email
      bio
      avatar
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateJobSubscriptionVariables,
  APITypes.OnUpdateJobSubscription
>;
export const onDeleteJob = /* GraphQL */ `subscription OnDeleteJob(
  $filter: ModelSubscriptionJobFilterInput
  $owner: String
) {
  onDeleteJob(filter: $filter, owner: $owner) {
    id
    title
    company
    status
    userID
    user {
      id
      username
      password
      name
      email
      bio
      avatar
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteJobSubscriptionVariables,
  APITypes.OnDeleteJobSubscription
>;
