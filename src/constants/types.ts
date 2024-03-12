export interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}

export interface Group {
  "id": number,
  "name": string,
  "closed": boolean,
  "avatar_color"?: string,
  "members_count": number,
  "friends"?: User[]
}

export interface User {
  "first_name": string,
  "last_name": string
}

export interface GetColorsResponse {
  result: 1 | 0,
  data: string[]
}

export interface FiltersContextInterface {
  color: string,
  privacyType: string,
  friends: string,
  setColor: React.Dispatch<React.SetStateAction<string>>,
  setPrivacyType: React.Dispatch<React.SetStateAction<string>>,
  setFriends: React.Dispatch<React.SetStateAction<string>>,
}