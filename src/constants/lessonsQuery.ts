import { gql } from '@apollo/client'

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      availableAt
      lessonType
      slug
      title
    }
  }
`

export const GET_LESSON_BY_SLUG = gql`
  query ($slug: String) {
    lesson(where: { slug: $slug }) {
      slug
      title
      description
      videoId
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`
