const addBirthdayToPlayer = async (playerArray, playerID) => {
  const NHL_PLAYER_DETAILS_ENDPOINT = `https://api-web.nhle.com/v1/player/${playerID}/landing`;
  const test = await fetch(NHL_PLAYER_DETAILS_ENDPOINT);
  console.log(test);
  return false;
};

export { addBirthdayToPlayer };
