export const config = {
  domainSource: "https://1bc7117f-d3a1-43c5-93f7-efde5d324d63.weweb-preview.io", // Your WeWeb app preview link 
  patterns: [
      {
          pattern: "^/scpi/[^/]+/[^/]+",
          metaDataEndpoint: "https://xiv8-vcht-fd0u.p7.xano.io/api:jUfSuCAW/dynamic_metadata/{nom_scpi}"
      }
  ]
};
