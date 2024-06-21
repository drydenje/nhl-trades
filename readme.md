# Program Domain

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
  -- id
  -- hdbId
  -- hrId
  -- Name
  -- birthDate
  -- verified (bool)
  -- nhlAPIstats

- Team
  -- hdbId
  -- hrId
  -- nhlId
  -- Name
  -- verified

- DraftPick
  -- year
  -- overallPick
  -- teamId ?which site, or my own teamId?
  -- playerId

- Trade
  -- tradeDate ?
  -- a

- TRADED_TO
  -- fromTeam
  -- toTeam
  -- tradeNumber
  -- tradeDate ?

-
