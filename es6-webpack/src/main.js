import queryString from 'query-string';

const BWKZ_CONTAINER = '#bwkz-integration';

// filling in parameters those are required by Brandworkz API
const BWKZ_API = {
  URL: '',
  VERSION: '',
  CLIENT_ID: '',
  AUTH_TOKEN: '',
};

// filling in Brandworkz credentials those are required by "Authorization" part of the Widget
const BWKZ_AUTH = {
  CLIENT_DB: '',
  USERNAME: '',
  PASSWORD: '',
};

const parameters = {
  assetType: 'Image,Document,Video,Audio',
  usage: 'WORDPRESS',
  size: 50,
  allowedTransformSystemrefs: '',
  collapse: true,
  enableDetailView: true,
  enableMultiSelect: true,
  createdByUserId: '',
};

fetch(`${BWKZ_API.URL}/v${BWKZ_API.VERSION}/${BWKZ_API.CLIENT_ID}/assetInsert?${queryString.stringify(parameters)}`, { 
  headers: {
    Accept: 'text/html',
    Authorization: `Bearer ${BWKZ_API.AUTH_TOKEN}`,
  },
}).then((widgetHtml) => {
  window.initBwkzAssetInsert = () => ({
    auth: {
      clientDb: BWKZ_AUTH.CLIENT_DB,
      username: BWKZ_AUTH.USERNAME,
      password: BWKZ_AUTH.PASSWORD,
    },
  });
  document.querySelector(BWKZ_CONTAINER).innerHTML = widgetHtml;
});
