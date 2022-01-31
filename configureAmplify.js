import Amplify from "aws-amplify";
import config from './src/aws-exports';
// Refs: https://github.com/aws-amplify/amplify-cli/issues/1880
config.oauth.domain = "auth.maila.ai";
Amplify.configure(config);