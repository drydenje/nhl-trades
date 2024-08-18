# Program Domain

## Thoughts

- Need birthDates on the NHL id's
- Work through the current active teams, original 6 first
- Then go through the remaining ones, largest/recent first
- Then start to query the remaining individual players

## Improve Time to Greenlight

[] Check stats recursively
[] Generate a report of possible leads
[] Track which videos have been made
[] have a huge tree graph (universe) that changes colour based on which trees have been examined. Zoom in to highlight a specific trade
[] Play an animation that examines each node, which can be edited and a voice over added
[] Quick links that will seach Google for articles or information about that trade
[] A fact-checking mode to verify all of the information in the early stages of the programs development
[]

## Make the content more interesting

- Reverse search, starting from specific impactful moments
  - eg: Pick a goal, and the program will rewind through the history and find out where it all started
- use scoresheets to automate finding moments
- follow a player throughout his career
- major trades that seemed minor at the time (Ken Dryden?): You wouldn't steal a Star? (Steal a car spoof)

## Reporting Feature

### Subcategories

- give a summation of each tree branch, sort by games played, goals, assists
- impact after the trade to their respective new teams, or lackthereof (think Owen Nolan)
- filter by specific teams (target a fan base)
- filter between a time period (target an age group?)
- important moments (goals, assists, bad penalties, more?)

## Planning Stuff

### Nodes

- Player

  - id
  - hdbId
  - hrId
  - Name
  - birthDate
  - verified (bool)
  - nhlAPIstats

- Team

  - hdbId
  - hrId
  - nhlId
  - Name
  - verified

- DraftPick

  - year
  - overallPick
  - teamId ? which site, or my own teamId?
  - playerId

- Trade
  -- tradeDate ?
  -- a

- TRADED_TO
  - fromTeam
  - toTeam
  - tradeNumber
  - tradeDate ?

### NHl API Points

- [https://github.com/Zmalski/NHL-API-Reference?tab=readme-ov-file](https://github.com/Zmalski/NHL-API-Reference?tab=readme-ov-file)

- Players:

  - Only returns 5 players (out of 22537). At 5 players per call every 5 seconds, it would take over 6 hours to scrape
  - &limit=5 (can only reduce below 5)
  - This would fix the 'roster only' problem if I can find a better example
  - [https://api.nhle.com/stats/rest/en/players](https://api.nhle.com/stats/rest/en/players)
  - [https://api.nhle.com/stats/rest/en/players?start=1&sort=lastName](https://api.nhle.com/stats/rest/en/players?start=1&sort=lastName)
  - [https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=200&q=\*](https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=200&q=*)

  ```json
  [
    {
      "id": 8455414,
      "currentTeamId": null,
      "firstName": "Cliff",
      "fullName": "Cliff Abrecht",
      "lastName": "Abrecht",
      "positionCode": "D",
      "sweaterNumber": null
    }
  ]
  ```

- Draft

  - Returns a an array of all rounds (without players) of the NHL draft
  - [https://api.nhle.com/stats/rest/en/draft](https://api.nhle.com/stats/rest/en/draft)

  ```json
  [
    {
      "id": 1,
      "draftYear": 1989,
      "rounds": 12
    }
  ]
  ```

  - Returns the entire array of all draft picks of the given year. (set the limit high)
  - [https://records.nhl.com/site/api/draft?](https://records.nhl.com/site/api/draft?include=draftProspect.id&include=player.birthStateProvince&include=player.birthCountry&include=player.position&include=player.onRoster&include=player.yearsPro&include=player.firstName&include=player.lastName&include=player.id&include=team.id&include=team.placeName&include=team.commonName&include=team.fullName&include=team.triCode&include=team.logos&include=franchiseTeam.franchise.mostRecentTeamId&include=franchiseTeam.franchise.teamCommonName&include=franchiseTeam.franchise.teamPlaceName&sort=[{%22property%22:%22overallPickNumber%22,%22direction%22:%22ASC%22}]&cayenneExp=%20draftYear%20=%202023&start=0&limit=300)

  ```json
  [
    {
      "id": 19119,
      "ageInDays": 6555,
      "ageInDaysForYear": 346,
      "ageInYears": 17,
      "amateurClubName": "Regina",
      "amateurLeague": "WHL",
      "birthDate": "2005-07-17",
      "birthPlace": "North Vancouver, BC",
      "countryCode": "CAN",
      "csPlayerId": 91671,
      "draftDate": "2023-06-28",
      "draftMasterId": 70,
      "draftProspect": {
        "id": 157648
      },
      "draftYear": 2023,
      "draftedByTeamId": 16,
      "firstName": "Connor",
      "franchiseTeam": {
        "franchise": {
          "mostRecentTeamId": 16,
          "teamCommonName": "Blackhawks",
          "teamPlaceName": "Chicago"
        }
      },
      "height": 70,
      "lastName": "Bedard",
      "notes": null,
      "overallPickNumber": 1,
      "pickInRound": 1,
      "player": {
        "id": 8484144,
        "birthCountry": "CAN",
        "birthStateProvince": "BC",
        "firstName": "Connor",
        "lastName": "Bedard",
        "onRoster": "Y",
        "position": "C",
        "yearsPro": 1
      },
      "playerId": 8484144,
      "playerName": "Connor Bedard",
      "position": "C",
      "removedOutright": "N",
      "removedOutrightWhy": null,
      "roundNumber": 1,
      "shootsCatches": "R",
      "supplementalDraft": "N",
      "team": {
        "id": 16,
        "commonName": "Blackhawks",
        "fullName": "Chicago Blackhawks",
        "logos": [
          {
            "id": 61,
            "background": "light",
            "endSeason": 19561957,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19261927-19561957_light.svg",
            "startSeason": 19261927,
            "teamId": 16,
            "url": "http://3.cdn.nhle.com/logos/nhl/svg/CHI_19261927-19561957_light.svg"
          },
          {
            "id": 404,
            "background": "dark",
            "endSeason": 19561957,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19261927-19561957_dark.svg",
            "startSeason": 19261927,
            "teamId": 16,
            "url": "http://1.cdn.nhle.com/logos/nhl/svg/CHI_19261927-19561957_dark.svg"
          },
          {
            "id": 240,
            "background": "dark",
            "endSeason": 19611962,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19571958-19611962_dark.svg",
            "startSeason": 19571958,
            "teamId": 16,
            "url": "http://1.cdn.nhle.com/logos/nhl/svg/CHI_19571958-19611962_dark.svg"
          },
          {
            "id": 250,
            "background": "light",
            "endSeason": 19611962,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19571958-19611962_light.svg",
            "startSeason": 19571958,
            "teamId": 16,
            "url": "http://3.cdn.nhle.com/logos/nhl/svg/CHI_19571958-19611962_light.svg"
          },
          {
            "id": 88,
            "background": "dark",
            "endSeason": 19641965,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19621963-19641965_dark.svg",
            "startSeason": 19621963,
            "teamId": 16,
            "url": "http://3.cdn.nhle.com/logos/nhl/svg/CHI_19621963-19641965_dark.svg"
          },
          {
            "id": 224,
            "background": "light",
            "endSeason": 19641965,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19621963-19641965_light.svg",
            "startSeason": 19621963,
            "teamId": 16,
            "url": "http://1.cdn.nhle.com/logos/nhl/svg/CHI_19621963-19641965_light.svg"
          },
          {
            "id": 9,
            "background": "dark",
            "endSeason": 19881989,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19651966-19881989_dark.svg",
            "startSeason": 19651966,
            "teamId": 16,
            "url": "http://1.cdn.nhle.com/logos/nhl/svg/CHI_19651966-19881989_dark.svg"
          },
          {
            "id": 70,
            "background": "light",
            "endSeason": 19881989,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19651966-19881989_light.svg",
            "startSeason": 19651966,
            "teamId": 16,
            "url": "http://3.cdn.nhle.com/logos/nhl/svg/CHI_19651966-19881989_light.svg"
          },
          {
            "id": 44,
            "background": "dark",
            "endSeason": 19951996,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19891990-19951996_dark.svg",
            "startSeason": 19891990,
            "teamId": 16,
            "url": "http://2.cdn.nhle.com/logos/nhl/svg/CHI_19891990-19951996_dark.svg"
          },
          {
            "id": 269,
            "background": "light",
            "endSeason": 19951996,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19891990-19951996_light.svg",
            "startSeason": 19891990,
            "teamId": 16,
            "url": "http://2.cdn.nhle.com/logos/nhl/svg/CHI_19891990-19951996_light.svg"
          },
          {
            "id": 52,
            "background": "dark",
            "endSeason": 19981999,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19961997-19981999_dark.svg",
            "startSeason": 19961997,
            "teamId": 16,
            "url": "http://3.cdn.nhle.com/logos/nhl/svg/CHI_19961997-19981999_dark.svg"
          },
          {
            "id": 247,
            "background": "light",
            "endSeason": 19981999,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_19961997-19981999_light.svg",
            "startSeason": 19961997,
            "teamId": 16,
            "url": "http://1.cdn.nhle.com/logos/nhl/svg/CHI_19961997-19981999_light.svg"
          },
          {
            "id": 22,
            "background": "light",
            "endSeason": 20242025,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_light.svg",
            "startSeason": 19992000,
            "teamId": 16,
            "url": "http://3.cdn.nhle.com/logos/nhl/svg/CHI_light.svg"
          },
          {
            "id": 228,
            "background": "dark",
            "endSeason": 20242025,
            "secureUrl": "https://assets.nhle.com/logos/nhl/svg/CHI_dark.svg",
            "startSeason": 19992000,
            "teamId": 16,
            "url": "http://1.cdn.nhle.com/logos/nhl/svg/CHI_dark.svg"
          }
        ],
        "placeName": "Chicago",
        "triCode": "CHI"
      },
      "teamPickHistory": "CHI",
      "triCode": "CHI",
      "weight": 185
    }
  ]
  ```

- Team ✅

  - Returns an array of all current and past NHL teams

  ```json
  [
    {
      "id": 11,
      "franchiseId": 35,
      "fullName": "Atlanta Thrashers",
      "leagueId": 133,
      "rawTricode": "ATL",
      "triCode": "ATL"
    }
  ]
  ```
