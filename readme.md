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
