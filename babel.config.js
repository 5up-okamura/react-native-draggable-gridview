module.exports = function(api) {
  if(api && api.cache) api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
