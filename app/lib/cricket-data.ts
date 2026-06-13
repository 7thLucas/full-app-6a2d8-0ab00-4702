// CricStream Mock Data — Realistic cricket match simulation

export interface Team {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  color: string;
  secondaryColor: string;
}

export interface Batsman {
  id: string;
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isOnStrike: boolean;
  isOut: boolean;
  dismissal?: string;
}

export interface Bowler {
  id: string;
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  isBowling: boolean;
}

export interface Partnership {
  batsman1: string;
  batsman2: string;
  runs: number;
  balls: number;
}

export interface FallOfWicket {
  wicket: number;
  batsman: string;
  score: number;
  over: string;
}

export interface CommentaryBall {
  id: string;
  over: string;
  ballInOver: number;
  type: "SIX" | "FOUR" | "WICKET" | "DOT" | "RUNS" | "WIDE" | "NO_BALL" | "BYE";
  runs: number;
  commentary: string;
  bowler: string;
  batsman: string;
  timestamp: string;
}

export interface WagonWheelShot {
  angle: number;
  distance: number;
  type: "FOUR" | "SIX" | "RUNS" | "DOT";
  runs: number;
}

export interface OverData {
  over: number;
  runs: number;
  cumulative: number;
  wickets: number;
}

export interface Match {
  id: string;
  status: "LIVE" | "STUMPS" | "COMPLETED" | "UPCOMING";
  format: "ODI" | "T20I" | "TEST" | "IPL" | "T20";
  series: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  team1: Team;
  team2: Team;
  toss?: string;
  currentInnings: 1 | 2;
  innings1Score: string;
  innings2Score?: string;
  innings1Overs: string;
  innings2Overs?: string;
  target?: number;
  currentScore: string;
  currentOvers: string;
  crr: number;
  rrr?: number;
  lastBall: string;
  toWin?: string;
  winProbTeam1: number;
  winProbTeam2: number;
  matchSummary?: string;
}

export interface Fixture {
  id: string;
  status: "LIVE" | "STUMPS" | "COMPLETED" | "UPCOMING";
  format: "ODI" | "T20I" | "TEST" | "IPL" | "T20";
  series: string;
  team1: Team;
  team2: Team;
  date: string;
  time: string;
  venue: string;
  score1?: string;
  score2?: string;
  result?: string;
}

export interface PointsTableEntry {
  position: number;
  team: Team;
  played: number;
  won: number;
  lost: number;
  noResult: number;
  netRunRate: number;
  points: number;
}

// Teams
export const TEAMS: Record<string, Team> = {
  IND: { id: "IND", name: "India", shortName: "IND", flag: "🇮🇳", color: "#003087", secondaryColor: "#FF9933" },
  AUS: { id: "AUS", name: "Australia", shortName: "AUS", flag: "🇦🇺", color: "#FFD700", secondaryColor: "#00843D" },
  ENG: { id: "ENG", name: "England", shortName: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "#003087", secondaryColor: "#CF142B" },
  PAK: { id: "PAK", name: "Pakistan", shortName: "PAK", flag: "🇵🇰", color: "#01411C", secondaryColor: "#FFFFFF" },
  SA: { id: "SA", name: "South Africa", shortName: "SA", flag: "🇿🇦", color: "#007A4D", secondaryColor: "#FFB81C" },
  NZ: { id: "NZ", name: "New Zealand", shortName: "NZ", flag: "🇳🇿", color: "#000000", secondaryColor: "#FFFFFF" },
  WI: { id: "WI", name: "West Indies", shortName: "WI", flag: "🏏", color: "#7B1C2E", secondaryColor: "#FFD700" },
  SL: { id: "SL", name: "Sri Lanka", shortName: "SL", flag: "🇱🇰", color: "#003087", secondaryColor: "#FFD700" },
  // IPL Teams
  MI: { id: "MI", name: "Mumbai Indians", shortName: "MI", flag: "🔵", color: "#004BA0", secondaryColor: "#D1AB3E" },
  CSK: { id: "CSK", name: "Chennai Super Kings", shortName: "CSK", flag: "🟡", color: "#F9CD05", secondaryColor: "#0081E9" },
  RCB: { id: "RCB", name: "Royal Challengers Bengaluru", shortName: "RCB", flag: "🔴", color: "#EC1C24", secondaryColor: "#000000" },
  KKR: { id: "KKR", name: "Kolkata Knight Riders", shortName: "KKR", flag: "🟣", color: "#3A225D", secondaryColor: "#B3A123" },
  DC: { id: "DC", name: "Delhi Capitals", shortName: "DC", flag: "🔵", color: "#0078BC", secondaryColor: "#EF1C25" },
  PBKS: { id: "PBKS", name: "Punjab Kings", shortName: "PBKS", flag: "🔴", color: "#AA4545", secondaryColor: "#DCDDDF" },
  SRH: { id: "SRH", name: "Sunrisers Hyderabad", shortName: "SRH", flag: "🟠", color: "#F7A721", secondaryColor: "#E05D21" },
  RR: { id: "RR", name: "Rajasthan Royals", shortName: "RR", flag: "🩷", color: "#E8347E", secondaryColor: "#254AA5" },
  LSG: { id: "LSG", name: "Lucknow Super Giants", shortName: "LSG", flag: "🔵", color: "#A0E6FF", secondaryColor: "#004BA0" },
  GT: { id: "GT", name: "Gujarat Titans", shortName: "GT", flag: "⚫", color: "#1C1C1E", secondaryColor: "#1DA462" },
};

// Main Live Match (IND vs AUS ODI)
export const liveMatch: Match = {
  id: "ind-aus-odi-2026",
  status: "LIVE",
  format: "ODI",
  series: "India vs Australia ODI Series 2026",
  venue: "Narendra Modi Stadium",
  city: "Ahmedabad",
  date: "13 Jun 2026",
  time: "14:00 IST",
  team1: TEAMS.IND,
  team2: TEAMS.AUS,
  toss: "India won the toss and elected to bat",
  currentInnings: 2,
  innings1Score: "287/6",
  innings2Score: "198/4",
  innings1Overs: "50",
  innings2Overs: "35.2",
  target: 288,
  currentScore: "198/4",
  currentOvers: "35.2",
  crr: 5.61,
  rrr: 6.12,
  lastBall: "4",
  toWin: "90 runs off 88 balls",
  winProbTeam1: 58,
  winProbTeam2: 42,
};

export const currentBatsmen: Batsman[] = [
  {
    id: "shreyas",
    name: "Shreyas Iyer",
    runs: 67,
    balls: 71,
    fours: 6,
    sixes: 2,
    strikeRate: 94.37,
    isOnStrike: false,
    isOut: false,
  },
  {
    id: "hardik",
    name: "Hardik Pandya",
    runs: 34,
    balls: 28,
    fours: 3,
    sixes: 1,
    strikeRate: 121.43,
    isOnStrike: true,
    isOut: false,
  },
];

export const allBatsmen: Batsman[] = [
  {
    id: "rohit",
    name: "Rohit Sharma",
    runs: 45,
    balls: 52,
    fours: 5,
    sixes: 1,
    strikeRate: 86.54,
    isOnStrike: false,
    isOut: true,
    dismissal: "c Warner b Hazlewood 45(52)",
  },
  {
    id: "shubman",
    name: "Shubman Gill",
    runs: 23,
    balls: 31,
    fours: 2,
    sixes: 0,
    strikeRate: 74.19,
    isOnStrike: false,
    isOut: true,
    dismissal: "lbw b Starc 23(31)",
  },
  {
    id: "virat",
    name: "Virat Kohli",
    runs: 18,
    balls: 22,
    fours: 2,
    sixes: 0,
    strikeRate: 81.82,
    isOnStrike: false,
    isOut: true,
    dismissal: "c Smith b Cummins 18(22)",
  },
  {
    id: "kl",
    name: "KL Rahul",
    runs: 11,
    balls: 14,
    fours: 1,
    sixes: 0,
    strikeRate: 78.57,
    isOnStrike: false,
    isOut: true,
    dismissal: "run out (Maxwell) 11(14)",
  },
  ...currentBatsmen,
  {
    id: "jadeja",
    name: "Ravindra Jadeja",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    isOnStrike: false,
    isOut: false,
  },
  {
    id: "bumrah",
    name: "Jasprit Bumrah",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    isOnStrike: false,
    isOut: false,
  },
];

export const bowlers: Bowler[] = [
  {
    id: "hazlewood",
    name: "Josh Hazlewood",
    overs: 7,
    maidens: 0,
    runs: 42,
    wickets: 1,
    economy: 6.0,
    isBowling: false,
  },
  {
    id: "starc",
    name: "Mitchell Starc",
    overs: 7,
    maidens: 1,
    runs: 38,
    wickets: 1,
    economy: 5.43,
    isBowling: false,
  },
  {
    id: "cummins",
    name: "Pat Cummins",
    overs: 8,
    maidens: 0,
    runs: 51,
    wickets: 1,
    economy: 6.38,
    isBowling: false,
  },
  {
    id: "zampa",
    name: "Adam Zampa",
    overs: 7,
    maidens: 0,
    runs: 39,
    wickets: 1,
    economy: 5.57,
    isBowling: false,
  },
  {
    id: "maxwell",
    name: "Glenn Maxwell",
    overs: 5.2,
    maidens: 0,
    runs: 26,
    wickets: 0,
    economy: 4.88,
    isBowling: true,
  },
];

export const innings1Batsmen: Batsman[] = [
  {
    id: "warner",
    name: "David Warner",
    runs: 71,
    balls: 78,
    fours: 8,
    sixes: 2,
    strikeRate: 91.03,
    isOnStrike: false,
    isOut: true,
    dismissal: "c Gill b Bumrah 71(78)",
  },
  {
    id: "head",
    name: "Travis Head",
    runs: 88,
    balls: 82,
    fours: 10,
    sixes: 3,
    strikeRate: 107.32,
    isOnStrike: false,
    isOut: true,
    dismissal: "c Kohli b Jadeja 88(82)",
  },
  {
    id: "smith",
    name: "Steve Smith",
    runs: 43,
    balls: 56,
    fours: 4,
    sixes: 0,
    strikeRate: 76.79,
    isOnStrike: false,
    isOut: true,
    dismissal: "lbw b Siraj 43(56)",
  },
  {
    id: "inglis",
    name: "Josh Inglis",
    runs: 34,
    balls: 28,
    fours: 3,
    sixes: 2,
    strikeRate: 121.43,
    isOnStrike: false,
    isOut: true,
    dismissal: "c sub b Hardik 34(28)",
  },
  {
    id: "labuschagne",
    name: "Marnus Labuschagne",
    runs: 22,
    balls: 31,
    fours: 2,
    sixes: 0,
    strikeRate: 70.97,
    isOnStrike: false,
    isOut: true,
    dismissal: "c Rohit b Bumrah 22(31)",
  },
  {
    id: "maxwell2",
    name: "Glenn Maxwell",
    runs: 17,
    balls: 11,
    fours: 1,
    sixes: 1,
    strikeRate: 154.55,
    isOnStrike: false,
    isOut: true,
    dismissal: "b Kuldeep 17(11)",
  },
  {
    id: "cummins2",
    name: "Pat Cummins",
    runs: 12,
    balls: 14,
    fours: 1,
    sixes: 0,
    strikeRate: 85.71,
    isOnStrike: false,
    isOut: false,
    dismissal: "not out",
  },
];

export const innings1Bowlers: Bowler[] = [
  {
    id: "bumrah2",
    name: "Jasprit Bumrah",
    overs: 10,
    maidens: 1,
    runs: 48,
    wickets: 2,
    economy: 4.8,
    isBowling: false,
  },
  {
    id: "siraj2",
    name: "Mohammed Siraj",
    overs: 10,
    maidens: 0,
    runs: 63,
    wickets: 1,
    economy: 6.3,
    isBowling: false,
  },
  {
    id: "hardik2",
    name: "Hardik Pandya",
    overs: 8,
    maidens: 0,
    runs: 52,
    wickets: 1,
    economy: 6.5,
    isBowling: false,
  },
  {
    id: "jadeja2",
    name: "Ravindra Jadeja",
    overs: 10,
    maidens: 0,
    runs: 55,
    wickets: 1,
    economy: 5.5,
    isBowling: false,
  },
  {
    id: "kuldeep2",
    name: "Kuldeep Yadav",
    overs: 10,
    maidens: 1,
    runs: 58,
    wickets: 1,
    economy: 5.8,
    isBowling: false,
  },
  {
    id: "axar",
    name: "Axar Patel",
    overs: 2,
    maidens: 0,
    runs: 11,
    wickets: 0,
    economy: 5.5,
    isBowling: false,
  },
];

export const currentPartnership: Partnership = {
  batsman1: "Shreyas Iyer",
  batsman2: "Hardik Pandya",
  runs: 67,
  balls: 58,
};

export const fallOfWickets: FallOfWicket[] = [
  { wicket: 1, batsman: "Rohit Sharma", score: 45, over: "10.3" },
  { wicket: 2, batsman: "Shubman Gill", score: 68, over: "16.1" },
  { wicket: 3, batsman: "Virat Kohli", score: 86, over: "20.4" },
  { wicket: 4, batsman: "KL Rahul", score: 131, over: "27.5" },
];

export const commentary: CommentaryBall[] = [
  {
    id: "1",
    over: "35.2",
    ballInOver: 2,
    type: "FOUR",
    runs: 4,
    commentary: "Hardik Pandya drives through the covers — beautiful timing! The ball races to the boundary. Maxwell looked helpless as Pandya met the half-volley with a textbook cover drive.",
    bowler: "G. Maxwell",
    batsman: "H. Pandya",
    timestamp: "3:42 PM",
  },
  {
    id: "2",
    over: "35.1",
    ballInOver: 1,
    type: "DOT",
    runs: 0,
    commentary: "Maxwell floats one outside off, Pandya pushes it to mid-off but can't beat the fielder. Dot ball. The pressure is mounting with India needing 90 off 88.",
    bowler: "G. Maxwell",
    batsman: "H. Pandya",
    timestamp: "3:41 PM",
  },
  {
    id: "3",
    over: "35.0",
    ballInOver: 0,
    type: "RUNS",
    runs: 1,
    commentary: "End of over 35. Zampa gives it some air. Shreyas Iyer works it behind square for a single. India need 91 runs off 90 balls. Can they do it?",
    bowler: "A. Zampa",
    batsman: "S. Iyer",
    timestamp: "3:40 PM",
  },
  {
    id: "4",
    over: "34.5",
    ballInOver: 5,
    type: "SIX",
    runs: 6,
    commentary: "MASSIVE SIX! Hardik Pandya goes downtown! Zampa tossed it up on leg stump and Pandya hoisted it over deep midwicket into the upper tier. The crowd goes absolutely berserk!",
    bowler: "A. Zampa",
    batsman: "H. Pandya",
    timestamp: "3:39 PM",
  },
  {
    id: "5",
    over: "34.4",
    ballInOver: 4,
    type: "RUNS",
    runs: 2,
    commentary: "Shreyas Iyer tucks Zampa towards mid-on and sets off for two. Good running between the wickets. India inching closer to a potentially famous victory.",
    bowler: "A. Zampa",
    batsman: "S. Iyer",
    timestamp: "3:38 PM",
  },
  {
    id: "6",
    over: "34.3",
    ballInOver: 3,
    type: "DOT",
    runs: 0,
    commentary: "Zampa spins one sharply from outside off. Iyer plays and misses! The ball doesn't hit the off-stump but it's a big appeal. Not out says the umpire. Big moment!",
    bowler: "A. Zampa",
    batsman: "S. Iyer",
    timestamp: "3:37 PM",
  },
  {
    id: "7",
    over: "34.2",
    ballInOver: 2,
    type: "FOUR",
    runs: 4,
    commentary: "Magnificent shot from Shreyas Iyer! He waits for Zampa's wrong'un and cuts it hard through point. The ball hits the rope before third-man can get there. Fifty up for Iyer!",
    bowler: "A. Zampa",
    batsman: "S. Iyer",
    timestamp: "3:36 PM",
  },
  {
    id: "8",
    over: "34.1",
    ballInOver: 1,
    type: "RUNS",
    runs: 1,
    commentary: "Zampa with a googly from around the wicket. Pandya reads it well and pushes it to cover for a single. Good cricket thinking here.",
    bowler: "A. Zampa",
    batsman: "H. Pandya",
    timestamp: "3:35 PM",
  },
  {
    id: "9",
    over: "33.6",
    ballInOver: 6,
    type: "WICKET",
    runs: 0,
    commentary: "WICKET! KL Rahul is RUN OUT! Brilliant work from Glenn Maxwell in the covers. Rahul pushed it and set off for a risky single — Maxwell's throw hits the stumps directly at the striker's end. Australia strike!",
    bowler: "G. Maxwell",
    batsman: "KL Rahul",
    timestamp: "3:34 PM",
  },
  {
    id: "10",
    over: "33.5",
    ballInOver: 5,
    type: "FOUR",
    runs: 4,
    commentary: "KL Rahul flicks Maxwell through mid-wicket! That's a gorgeous shot. Rahul showing his class here. He's creamed that through the on-side.",
    bowler: "G. Maxwell",
    batsman: "KL Rahul",
    timestamp: "3:33 PM",
  },
  {
    id: "11",
    over: "33.4",
    ballInOver: 4,
    type: "DOT",
    runs: 0,
    commentary: "Maxwell slows one up, flighted nicely. Rahul goes for the drive but finds cover. Dot ball. Maxwell is keeping it tight here.",
    bowler: "G. Maxwell",
    batsman: "KL Rahul",
    timestamp: "3:32 PM",
  },
];

export const wagonWheelData: WagonWheelShot[] = [
  { angle: 15, distance: 0.85, type: "FOUR", runs: 4 },
  { angle: 340, distance: 0.9, type: "FOUR", runs: 4 },
  { angle: 60, distance: 0.95, type: "SIX", runs: 6 },
  { angle: 270, distance: 0.95, type: "SIX", runs: 6 },
  { angle: 30, distance: 0.6, type: "RUNS", runs: 2 },
  { angle: 100, distance: 0.5, type: "RUNS", runs: 1 },
  { angle: 200, distance: 0.55, type: "RUNS", runs: 3 },
  { angle: 150, distance: 0.4, type: "DOT", runs: 0 },
  { angle: 320, distance: 0.45, type: "DOT", runs: 0 },
  { angle: 80, distance: 0.7, type: "FOUR", runs: 4 },
  { angle: 190, distance: 0.88, type: "FOUR", runs: 4 },
  { angle: 240, distance: 0.6, type: "RUNS", runs: 2 },
  { angle: 45, distance: 0.5, type: "RUNS", runs: 1 },
  { angle: 355, distance: 0.35, type: "DOT", runs: 0 },
  { angle: 130, distance: 0.92, type: "SIX", runs: 6 },
];

export const overByOverData: OverData[] = [
  { over: 1, runs: 6, cumulative: 6, wickets: 0 },
  { over: 2, runs: 8, cumulative: 14, wickets: 0 },
  { over: 3, runs: 4, cumulative: 18, wickets: 0 },
  { over: 4, runs: 11, cumulative: 29, wickets: 0 },
  { over: 5, runs: 5, cumulative: 34, wickets: 0 },
  { over: 6, runs: 9, cumulative: 43, wickets: 0 },
  { over: 7, runs: 7, cumulative: 50, wickets: 0 },
  { over: 8, runs: 3, cumulative: 53, wickets: 0 },
  { over: 9, runs: 6, cumulative: 59, wickets: 0 },
  { over: 10, runs: 4, cumulative: 63, wickets: 0 },
  { over: 11, runs: 12, cumulative: 75, wickets: 1 },
  { over: 12, runs: 5, cumulative: 80, wickets: 0 },
  { over: 13, runs: 7, cumulative: 87, wickets: 0 },
  { over: 14, runs: 6, cumulative: 93, wickets: 0 },
  { over: 15, runs: 4, cumulative: 97, wickets: 0 },
  { over: 16, runs: 5, cumulative: 102, wickets: 1 },
  { over: 17, runs: 8, cumulative: 110, wickets: 0 },
  { over: 18, runs: 9, cumulative: 119, wickets: 0 },
  { over: 19, runs: 7, cumulative: 126, wickets: 0 },
  { over: 20, runs: 10, cumulative: 136, wickets: 1 },
  { over: 21, runs: 5, cumulative: 141, wickets: 0 },
  { over: 22, runs: 8, cumulative: 149, wickets: 0 },
  { over: 23, runs: 11, cumulative: 160, wickets: 0 },
  { over: 24, runs: 6, cumulative: 166, wickets: 0 },
  { over: 25, runs: 5, cumulative: 171, wickets: 0 },
  { over: 26, runs: 8, cumulative: 179, wickets: 0 },
  { over: 27, runs: 4, cumulative: 183, wickets: 0 },
  { over: 28, runs: 7, cumulative: 190, wickets: 1 },
  { over: 29, runs: 16, cumulative: 206, wickets: 0 },
  { over: 30, runs: 5, cumulative: 211, wickets: 0 },
  { over: 31, runs: 8, cumulative: 219, wickets: 0 },
  { over: 32, runs: 9, cumulative: 228, wickets: 0 },
  { over: 33, runs: 11, cumulative: 239, wickets: 1 },
  { over: 34, runs: 17, cumulative: 256, wickets: 0 },
  { over: 35, runs: 14, cumulative: 270, wickets: 0 },
];

export const iplPointsTable: PointsTableEntry[] = [
  { position: 1, team: TEAMS.MI, played: 14, won: 10, lost: 4, noResult: 0, netRunRate: 0.892, points: 20 },
  { position: 2, team: TEAMS.CSK, played: 14, won: 9, lost: 5, noResult: 0, netRunRate: 0.641, points: 18 },
  { position: 3, team: TEAMS.RCB, played: 14, won: 8, lost: 5, noResult: 1, netRunRate: 0.514, points: 17 },
  { position: 4, team: TEAMS.KKR, played: 14, won: 8, lost: 6, noResult: 0, netRunRate: 0.421, points: 16 },
  { position: 5, team: TEAMS.SRH, played: 14, won: 7, lost: 7, noResult: 0, netRunRate: 0.133, points: 14 },
  { position: 6, team: TEAMS.RR, played: 14, won: 7, lost: 7, noResult: 0, netRunRate: -0.124, points: 14 },
  { position: 7, team: TEAMS.DC, played: 14, won: 5, lost: 9, noResult: 0, netRunRate: -0.388, points: 10 },
  { position: 8, team: TEAMS.PBKS, played: 14, won: 5, lost: 9, noResult: 0, netRunRate: -0.512, points: 10 },
  { position: 9, team: TEAMS.GT, played: 14, won: 4, lost: 10, noResult: 0, netRunRate: -0.631, points: 8 },
  { position: 10, team: TEAMS.LSG, played: 14, won: 3, lost: 11, noResult: 0, netRunRate: -0.941, points: 6 },
];

export const fixtures: Fixture[] = [
  {
    id: "ind-aus-live",
    status: "LIVE",
    format: "ODI",
    series: "India vs Australia ODI Series 2026",
    team1: TEAMS.IND,
    team2: TEAMS.AUS,
    date: "13 Jun 2026",
    time: "14:00 IST",
    venue: "Narendra Modi Stadium, Ahmedabad",
    score1: "287/6 (50 Ov)",
    score2: "198/4 (35.2 Ov)",
  },
  {
    id: "mi-csk-ipl",
    status: "UPCOMING",
    format: "IPL",
    series: "IPL 2026 — Qualifier 1",
    team1: TEAMS.MI,
    team2: TEAMS.CSK,
    date: "14 Jun 2026",
    time: "19:30 IST",
    venue: "Wankhede Stadium, Mumbai",
  },
  {
    id: "eng-pak-t20",
    status: "UPCOMING",
    format: "T20I",
    series: "England vs Pakistan T20I Series 2026",
    team1: TEAMS.ENG,
    team2: TEAMS.PAK,
    date: "15 Jun 2026",
    time: "18:00 BST",
    venue: "Lord's Cricket Ground, London",
  },
  {
    id: "sa-nz-test",
    status: "UPCOMING",
    format: "TEST",
    series: "South Africa vs New Zealand Test Series 2026",
    team1: TEAMS.SA,
    team2: TEAMS.NZ,
    date: "16 Jun 2026",
    time: "10:00 SAST",
    venue: "Newlands Cricket Ground, Cape Town",
  },
  {
    id: "rcb-kkr-ipl",
    status: "COMPLETED",
    format: "IPL",
    series: "IPL 2026 — Match 70",
    team1: TEAMS.RCB,
    team2: TEAMS.KKR,
    date: "12 Jun 2026",
    time: "19:30 IST",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    score1: "193/7 (20 Ov)",
    score2: "186/9 (20 Ov)",
    result: "RCB won by 7 runs",
  },
  {
    id: "ind-aus-odi2",
    status: "UPCOMING",
    format: "ODI",
    series: "India vs Australia ODI Series 2026",
    team1: TEAMS.IND,
    team2: TEAMS.AUS,
    date: "17 Jun 2026",
    time: "14:00 IST",
    venue: "Eden Gardens, Kolkata",
  },
  {
    id: "wi-sl-t20",
    status: "STUMPS",
    format: "TEST",
    series: "West Indies vs Sri Lanka Test Series 2026",
    team1: TEAMS.WI,
    team2: TEAMS.SL,
    date: "13 Jun 2026",
    time: "10:00 AST",
    venue: "Kensington Oval, Bridgetown",
    score1: "324/6",
    score2: "Day 2 — Stumps",
  },
];

export const highlights = [
  {
    id: "h1",
    title: "Hardik Pandya's Blazing 34* — India vs Australia ODI 2026",
    thumbnail: "🏏",
    duration: "4:32",
    views: "1.2M",
    match: "IND vs AUS",
    type: "BATTING",
  },
  {
    id: "h2",
    title: "Maxwell's Match-Winning 95 — Australia Innings",
    thumbnail: "⚡",
    duration: "6:15",
    views: "987K",
    match: "IND vs AUS",
    type: "BATTING",
  },
  {
    id: "h3",
    title: "Bumrah's Lethal Spell — 2/48 in 10 Overs",
    thumbnail: "🔥",
    duration: "3:48",
    views: "2.1M",
    match: "IND vs AUS",
    type: "BOWLING",
  },
  {
    id: "h4",
    title: "Travis Head Century — 88 off 82 Balls",
    thumbnail: "💯",
    duration: "7:22",
    views: "1.8M",
    match: "IND vs AUS",
    type: "BATTING",
  },
  {
    id: "h5",
    title: "RCB vs KKR — Super Over Thriller Full Match",
    thumbnail: "🎯",
    duration: "22:11",
    views: "4.5M",
    match: "RCB vs KKR",
    type: "MATCH",
  },
  {
    id: "h6",
    title: "Jadeja's 55 Vs Australia — Game-Changing Innings",
    thumbnail: "🌟",
    duration: "5:01",
    views: "756K",
    match: "IND vs AUS",
    type: "BATTING",
  },
];

export const weatherData = {
  temperature: 32,
  humidity: 68,
  cloudCover: 20,
  windSpeed: 14,
  dewFactor: "Moderate",
  pitch: "Good for batting, some turn expected in the second half",
  condition: "Partly Cloudy",
  icon: "⛅",
};

export const playerStats = [
  {
    category: "Top Run Scorers",
    players: [
      { rank: 1, name: "Virat Kohli", team: "IND", flag: "🇮🇳", stat: "812 runs", avg: "67.67" },
      { rank: 2, name: "Travis Head", team: "AUS", flag: "🇦🇺", stat: "756 runs", avg: "58.15" },
      { rank: 3, name: "Joe Root", team: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", stat: "698 runs", avg: "53.69" },
      { rank: 4, name: "Babar Azam", team: "PAK", flag: "🇵🇰", stat: "641 runs", avg: "49.31" },
      { rank: 5, name: "Rohit Sharma", team: "IND", flag: "🇮🇳", stat: "612 runs", avg: "47.08" },
    ],
  },
  {
    category: "Top Wicket Takers",
    players: [
      { rank: 1, name: "Jasprit Bumrah", team: "IND", flag: "🇮🇳", stat: "28 wkts", avg: "14.32" },
      { rank: 2, name: "Pat Cummins", team: "AUS", flag: "🇦🇺", stat: "24 wkts", avg: "17.54" },
      { rank: 3, name: "Shaheen Afridi", team: "PAK", flag: "🇵🇰", stat: "22 wkts", avg: "18.91" },
      { rank: 4, name: "Mark Wood", team: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", stat: "21 wkts", avg: "20.14" },
      { rank: 5, name: "Kagiso Rabada", team: "SA", flag: "🇿🇦", stat: "19 wkts", avg: "21.68" },
    ],
  },
];
