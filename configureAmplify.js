import { Amplify } from 'aws-amplify'
import config from './src/aws-exports';
// Refs: https://github.com/aws-amplify/amplify-cli/issues/1880
config.oauth.domain = process.env.GATSBY_APP_OAUTH_DOMAIN
Amplify.configure(config);

export default Amplify;