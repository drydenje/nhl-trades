// Select the first player without a birthdate
// Fetch the birthday from nhle.com
// Return playerArray with the new data

const addBirthdayToPlayer = async (playerArray) => {
  const playerToScrape = playerArray.filter(
    (player) => player.birthDate === undefined
  );

  const NHL_PLAYER_DETAILS_ENDPOINT = `https://api-web.nhle.com/v1/player/${playerToScrape[0].id}/landing`;

  const playerDetails = await fetch(NHL_PLAYER_DETAILS_ENDPOINT).then(
    (response) => response.json()
  );

  const newArray = playerArray.map((player) => {
    let bd = undefined;
    if (playerToScrape[0].id === player.id)
      bd = { birthDate: playerDetails.birthDate };

    return {
      ...player,
      ...bd,
    };
  });

  return newArray;
};

export { addBirthdayToPlayer };
