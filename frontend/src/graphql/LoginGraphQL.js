export const login = `
mutation Login($email: String!, $password: String!) {
  login(options: { email: $email, password: $password }) {
    user {
      id
      email
      name
      username
    }
    errors {
      message
      field
    }
  }
}
`;
