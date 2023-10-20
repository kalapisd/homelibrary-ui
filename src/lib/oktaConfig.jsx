export const oktaConfig = {
    clientId: '0oacq2ib7jhqdf8HV5d7',
    issuer: 'https://dev-26021779.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
