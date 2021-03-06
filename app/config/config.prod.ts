export const config = {
  name: "app",
  title: "My App",
  debug: false,
  uri: {
    base: "/",
    host: "/",
    api: "api/"
  },

  "default": {
    displayCount: 20
  },

  piwik: {
    enabled: false,
    app: 'appName',
    prod: 'prodName',
    url: '',
    siteId: 0
  },

  intro: {
    enabled: false
  },

  PFSSO: {
    enabled: true
  },

  urlHtml5Mode: true,
  version: "0.0.1"
};
