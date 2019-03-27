import withAppLoader from './appLoader';

const elementId = 'channel-root';
const url = 'http://localhost:3000/'; // 'https://overreacted.io/'; // global.ENVIRONMENT_CONFIG.endpoints.UI_CHANNEL;
const AppLoader = withAppLoader(elementId, url);

export default AppLoader;
