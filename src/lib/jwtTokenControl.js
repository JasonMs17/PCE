import * as jose from 'jose'

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.JWT_SECRET),
//   secret: new TextEncoder().encode("TEST"),
}

export const isAuthenticated = async (token) => {
  if (token) {
    try {
      const decoded = await jose.jwtVerify(token, jwtConfig.secret)

      if (decoded.payload?.username) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.error('isAuthenticated error: ', err)

      return false
    }
  } else {
    console.log('token not found')
    return false
  }
}