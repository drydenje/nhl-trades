type Player = {
  hockeyDBID: number,
  firstName: string,
  lastName: string,
  dob: string,
  city: string,
  state: string,
  country: string,
  stats: {
    season: string,
    team: string,
    league: string,
    regular: {
      gp: number,
      g: number,
      a: number,
      pts: number,
      pim: number,
      pm: number,
    }
    playoffs: {
      gp: number,
      g: number,
      a: number,
      pts: number,
      pim: number,
      pm: number,
    }
  }[]
}



type Trade = {
  date: string,
  teams: {
    ID: id,
    name: 
  }[]
}