import * as jwt from 'express-jwt';

// tslint:disable-next-line:no-var-requires
import * as jwksRsa from 'jwks-rsa';

const options = {
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 1,
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  secret: '2O5ou72z0LQFzfmuc-NTrM5Lq8h85wZzwTYR8azXaId-UB8DW24VsDtVdsMCX4U7',
};

// Authentication middleware. When used, the
// if the access token exists, it be verified against
// the Auth0 JSON Web Key Set
export default jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret(options),

  // Validate the audience and the issuer.
  credentialsRequired: false,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256'],
});