// CricLive — Static Demo Data
// All data is realistic simulated match data for India vs Australia 3rd ODI

export type MatchStatus = "LIVE" | "STUMPS" | "COMPLETED" | "UPCOMING";
export type MatchFormat = "ODI" | "T20I" | "TEST" | "IPL" | "T20";

export interface BatterStats {
  name: string;
  isCaptain?: boolean;
  isKeeper?: boolean;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  dismissal?: string;
  isNotOut?: boolean;
  isBatting?: boolean;
}

export interface BowlerStats {
  name: string;
  isCaptain?: boolean;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  isCurrentBowler?: boolean;
}

export interface CommentaryEntry {
  id: string;
  over: number;
  ball: number;
  overBall: string;
  runs: number;
  type: "dot" | "single" | "double" | "triple" | "four" | "six" | "wicket" | "wide" | "noball";
  description: string;
  batter: string;
  bowler: string;
}

export interface Fixture {
  id: string;
  series: string;
  format: MatchFormat;
  teamA: { name: string; shortName: string; flag: string };
  teamB: { name: string; shortName: string; flag: string };
  date: string;
  time: string;
  venue: string;
  status: MatchStatus;
  scoreA?: string;
  scoreB?: string;
  result?: string;
}

export interface PointsTableEntry {
  rank: number;
  team: string;
  shortName: string;
  flag: string;
  played: number;
  won: number;
  lost: number;
  noResult: number;
  nrr: number;
  points: number;
  isQualified?: boolean;
}

export interface Partnership {
  wicket: number;
  batter1: string;
  batter2: string;
  runs: number;
  balls: number;
}

export interface FallOfWicket {
  wicket: number;
  score: number;
  batter: string;
  over: string;
}

export interface RunRateDataPoint {
  over: number;
  crr: number;
  rrr: number;
}

export interface WagonWheelShot {
  angle: number;
  distance: number;
  runs: number;
  batter: string;
}

// ─── LIVE MATCH DATA ─────────────────────────────────────────────────────────

export const liveMatch = {
  id: "ind-aus-odi-3",
  series: "India vs Australia ODI Series 2026",
  format: "ODI" as MatchFormat,
  matchNumber: "3rd ODI",
  status: "LIVE" as MatchStatus,
  venue: "Wankhede Stadium, Mumbai",
  date: "June 14, 2026",
  toss: "Australia won the toss and elected to bat first",

  teamA: {
    name: "India",
    shortName: "IND",
    flag: "🇮🇳",
    primaryColor: "#FF6B35",
    secondaryColor: "#138808",
  },
  teamB: {
    name: "Australia",
    shortName: "AUS",
    flag: "🇦🇺",
    primaryColor: "#FFD700",
    secondaryColor: "#006400",
  },

  // India batting (2nd innings — chasing 289)
  innings: {
    current: 2,
    target: 289,
    currentScore: 187,
    currentWickets: 3,
    currentOvers: 32.4,
    totalOvers: 50,
    crr: 5.72,
    rrr: 6.41,
    runsRequired: 102,
    ballsRemaining: 104,
  },

  winProbability: {
    teamA: 48,
    teamB: 52,
  },

  weather: {
    condition: "Partly Cloudy",
    temperature: 29,
    humidity: 68,
    windSpeed: 12,
    dlsRisk: false,
  },
};

export const battingLineup: BatterStats[] = [
  {
    name: "Rohit Sharma",
    isCaptain: true,
    runs: 78,
    balls: 62,
    fours: 9,
    sixes: 3,
    strikeRate: 125.8,
    dismissal: "c Maxwell b Starc",
  },
  {
    name: "Shubman Gill",
    runs: 45,
    balls: 51,
    fours: 5,
    sixes: 1,
    strikeRate: 88.2,
    dismissal: "lbw b Cummins",
  },
  {
    name: "Virat Kohli",
    runs: 38,
    balls: 42,
    fours: 4,
    sixes: 0,
    strikeRate: 90.5,
    isBatting: true,
    isNotOut: true,
  },
  {
    name: "Shreyas Iyer",
    runs: 26,
    balls: 29,
    fours: 2,
    sixes: 1,
    strikeRate: 89.7,
    isBatting: true,
    isNotOut: true,
  },
  {
    name: "KL Rahul",
    isKeeper: true,
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
  {
    name: "Hardik Pandya",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
  {
    name: "Ravindra Jadeja",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
  {
    name: "Kuldeep Yadav",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
  {
    name: "Jasprit Bumrah",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
  {
    name: "Mohammed Shami",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
  {
    name: "Arshdeep Singh",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    dismissal: "yet to bat",
  },
];

export const extras = { byes: 2, legByes: 3, wides: 5, noBalls: 0, penalty: 0, total: 10 };

export const bowlingFigures: BowlerStats[] = [
  {
    name: "Mitchell Starc",
    overs: 8,
    maidens: 0,
    runs: 54,
    wickets: 2,
    economy: 6.75,
  },
  {
    name: "Pat Cummins",
    isCaptain: true,
    overs: 7,
    maidens: 1,
    runs: 38,
    wickets: 1,
    economy: 5.43,
  },
  {
    name: "Josh Hazlewood",
    overs: 6,
    maidens: 0,
    runs: 35,
    wickets: 0,
    economy: 5.83,
  },
  {
    name: "Adam Zampa",
    overs: 7,
    maidens: 0,
    runs: 42,
    wickets: 0,
    economy: 6.0,
    isCurrentBowler: true,
  },
  {
    name: "Glenn Maxwell",
    overs: 4,
    maidens: 0,
    runs: 28,
    wickets: 0,
    economy: 7.0,
  },
  {
    name: "Cameron Green",
    overs: 0.4,
    maidens: 0,
    runs: 9,
    wickets: 0,
    economy: 13.5,
  },
];

// ─── COMMENTARY ──────────────────────────────────────────────────────────────

export const commentary: CommentaryEntry[] = [
  {
    id: "c1",
    over: 32,
    ball: 4,
    overBall: "32.4",
    runs: 1,
    type: "single",
    description: "Zampa to Kohli, flighted on middle stump, Kohli drives firmly to mid-on, quick single taken. India need 102 from 104 balls.",
    batter: "Virat Kohli",
    bowler: "Adam Zampa",
  },
  {
    id: "c2",
    over: 32,
    ball: 3,
    overBall: "32.3",
    runs: 4,
    type: "four",
    description: "FOUR! Zampa to Iyer, full toss on the pads, Iyer flicks it through mid-wicket for a cracking boundary!",
    batter: "Shreyas Iyer",
    bowler: "Adam Zampa",
  },
  {
    id: "c3",
    over: 32,
    ball: 2,
    overBall: "32.2",
    runs: 0,
    type: "dot",
    description: "Zampa to Kohli, spinning sharply outside off, Kohli plays and misses. Good bowling!",
    batter: "Virat Kohli",
    bowler: "Adam Zampa",
  },
  {
    id: "c4",
    over: 32,
    ball: 1,
    overBall: "32.1",
    runs: 6,
    type: "six",
    description: "SIX! Zampa to Iyer, drops it short, Iyer rocks back and pulls it over deep mid-wicket. Massive hit! The crowd goes wild at Wankhede!",
    batter: "Shreyas Iyer",
    bowler: "Adam Zampa",
  },
  {
    id: "c5",
    over: 31,
    ball: 6,
    overBall: "31.6",
    runs: 1,
    type: "single",
    description: "Hazlewood to Iyer, back of a length on off stump, punched to cover, easy single.",
    batter: "Shreyas Iyer",
    bowler: "Josh Hazlewood",
  },
  {
    id: "c6",
    over: 31,
    ball: 5,
    overBall: "31.5",
    runs: 4,
    type: "four",
    description: "FOUR! Hazlewood to Kohli, pitched up on off stump, Kohli absolutely creams it through the covers. Textbook cover drive!",
    batter: "Virat Kohli",
    bowler: "Josh Hazlewood",
  },
  {
    id: "c7",
    over: 31,
    ball: 4,
    overBall: "31.4",
    runs: 0,
    type: "dot",
    description: "Hazlewood to Kohli, short and tight on off stump, Kohli defends solidly.",
    batter: "Virat Kohli",
    bowler: "Josh Hazlewood",
  },
  {
    id: "c8",
    over: 31,
    ball: 3,
    overBall: "31.3",
    runs: 0,
    type: "wicket",
    description: "WICKET! Gill is out LBW! Cummins pitches it on a perfect length, Gill is struck on the back pad in line with middle stump. India 140/2. Cummins pumps his fist!",
    batter: "Shubman Gill",
    bowler: "Pat Cummins",
  },
  {
    id: "c9",
    over: 30,
    ball: 6,
    overBall: "30.6",
    runs: 4,
    type: "four",
    description: "FOUR! Starc to Rohit, full length on middle, Rohit whips it through mid-wicket for his 9th boundary. 50-run partnership!",
    batter: "Rohit Sharma",
    bowler: "Mitchell Starc",
  },
  {
    id: "c10",
    over: 30,
    ball: 5,
    overBall: "30.5",
    runs: 2,
    type: "double",
    description: "Starc to Gill, driven into the gap at cover, two runs. Running between the wickets is good.",
    batter: "Shubman Gill",
    bowler: "Mitchell Starc",
  },
  {
    id: "c11",
    over: 29,
    ball: 6,
    overBall: "29.6",
    runs: 0,
    type: "dot",
    description: "Cummins ends the over with a short delivery. Rohit ducks under it. Pressure from both ends.",
    batter: "Rohit Sharma",
    bowler: "Pat Cummins",
  },
  {
    id: "c12",
    over: 29,
    ball: 5,
    overBall: "29.5",
    runs: 1,
    type: "single",
    description: "Cummins to Gill, nudged away to fine leg for a single. India running well.",
    batter: "Shubman Gill",
    bowler: "Pat Cummins",
  },
];

// ─── PARTNERSHIPS & FALL OF WICKETS ─────────────────────────────────────────

export const partnerships: Partnership[] = [
  { wicket: 1, batter1: "Rohit Sharma", batter2: "Shubman Gill", runs: 102, balls: 99 },
  { wicket: 2, batter1: "Shubman Gill", batter2: "Virat Kohli", runs: 37, balls: 44 },
  { wicket: 3, batter1: "Virat Kohli", batter2: "Shreyas Iyer", runs: 48, balls: 52 },
];

export const currentPartnership = {
  batter1: "Virat Kohli",
  batter2: "Shreyas Iyer",
  runs: 48,
  balls: 52,
};

export const fallOfWickets: FallOfWicket[] = [
  { wicket: 1, score: 102, batter: "Rohit Sharma (78)", over: "20.3" },
  { wicket: 2, score: 140, batter: "Shubman Gill (45)", over: "31.3" },
];

// ─── RUN RATE DATA ───────────────────────────────────────────────────────────

export const runRateData: RunRateDataPoint[] = [
  { over: 1, crr: 4.0, rrr: 5.78 },
  { over: 3, crr: 5.33, rrr: 5.67 },
  { over: 5, crr: 5.6, rrr: 5.71 },
  { over: 8, crr: 5.5, rrr: 5.73 },
  { over: 10, crr: 5.4, rrr: 5.72 },
  { over: 12, crr: 5.75, rrr: 5.76 },
  { over: 15, crr: 5.8, rrr: 5.84 },
  { over: 18, crr: 5.61, rrr: 5.86 },
  { over: 20, crr: 5.55, rrr: 5.90 },
  { over: 23, crr: 5.65, rrr: 6.02 },
  { over: 25, crr: 5.72, rrr: 6.10 },
  { over: 28, crr: 5.68, rrr: 6.21 },
  { over: 30, crr: 5.67, rrr: 6.28 },
  { over: 32, crr: 5.72, rrr: 6.38 },
  { over: 32.4, crr: 5.72, rrr: 6.41 },
];

// ─── RUNS PER OVER (MANHATTAN CHART) ─────────────────────────────────────────

export const runsPerOver = [
  { over: 1, runs: 4 },
  { over: 2, runs: 7 },
  { over: 3, runs: 9 },
  { over: 4, runs: 6 },
  { over: 5, runs: 5 },
  { over: 6, runs: 8 },
  { over: 7, runs: 6 },
  { over: 8, runs: 10 },
  { over: 9, runs: 4 },
  { over: 10, runs: 7 },
  { over: 11, runs: 8 },
  { over: 12, runs: 12 },
  { over: 13, runs: 6 },
  { over: 14, runs: 9 },
  { over: 15, runs: 7 },
  { over: 16, runs: 5 },
  { over: 17, runs: 6 },
  { over: 18, runs: 8 },
  { over: 19, runs: 5 },
  { over: 20, runs: 9 },
  { over: 21, runs: 7 },
  { over: 22, runs: 6 },
  { over: 23, runs: 10 },
  { over: 24, runs: 8 },
  { over: 25, runs: 7 },
  { over: 26, runs: 6 },
  { over: 27, runs: 9 },
  { over: 28, runs: 5 },
  { over: 29, runs: 8 },
  { over: 30, runs: 11 },
  { over: 31, runs: 8 },
  { over: 32, runs: 11 },
];

// ─── WAGON WHEEL ─────────────────────────────────────────────────────────────

export const wagonWheelShots: WagonWheelShot[] = [
  { angle: 315, distance: 85, runs: 4, batter: "Virat Kohli" },
  { angle: 270, distance: 90, runs: 4, batter: "Virat Kohli" },
  { angle: 300, distance: 80, runs: 4, batter: "Virat Kohli" },
  { angle: 250, distance: 92, runs: 6, batter: "Shreyas Iyer" },
  { angle: 160, distance: 88, runs: 6, batter: "Shreyas Iyer" },
  { angle: 190, distance: 75, runs: 4, batter: "Shreyas Iyer" },
  { angle: 340, distance: 55, runs: 2, batter: "Virat Kohli" },
  { angle: 280, distance: 45, runs: 1, batter: "Virat Kohli" },
  { angle: 200, distance: 50, runs: 1, batter: "Shreyas Iyer" },
  { angle: 220, distance: 40, runs: 1, batter: "Shreyas Iyer" },
  { angle: 310, distance: 35, runs: 1, batter: "Virat Kohli" },
  { angle: 330, distance: 30, runs: 0, batter: "Virat Kohli" },
  { angle: 270, distance: 25, runs: 0, batter: "Shreyas Iyer" },
  { angle: 290, distance: 28, runs: 0, batter: "Virat Kohli" },
];

// ─── AUSTRALIA FIRST INNINGS ─────────────────────────────────────────────────

export const australiaInnings = {
  score: 288,
  wickets: 7,
  overs: 50,
  extras: { byes: 4, legByes: 6, wides: 8, noBalls: 2, total: 20 },
};

export const australiaBatters: BatterStats[] = [
  { name: "David Warner", runs: 67, balls: 72, fours: 8, sixes: 2, strikeRate: 93.1, dismissal: "c Kohli b Bumrah" },
  { name: "Travis Head", runs: 45, balls: 38, fours: 6, sixes: 1, strikeRate: 118.4, dismissal: "c Rohit b Shami" },
  { name: "Steve Smith", runs: 89, balls: 102, fours: 9, sixes: 1, strikeRate: 87.3, dismissal: "c Jadeja b Kuldeep" },
  { name: "Marnus Labuschagne", runs: 34, balls: 44, fours: 3, sixes: 0, strikeRate: 77.3, dismissal: "run out" },
  { name: "Glenn Maxwell", runs: 28, balls: 22, fours: 2, sixes: 2, strikeRate: 127.3, dismissal: "c KL Rahul b Pandya" },
  { name: "Matthew Wade", isKeeper: true, runs: 12, balls: 18, fours: 1, sixes: 0, strikeRate: 66.7, dismissal: "c KL Rahul b Shami" },
  { name: "Pat Cummins", isCaptain: true, runs: 8, balls: 10, fours: 1, sixes: 0, strikeRate: 80.0, dismissal: "not out", isNotOut: true },
  { name: "Mitchell Starc", runs: 5, balls: 6, fours: 0, sixes: 1, strikeRate: 83.3, dismissal: "not out", isNotOut: true },
];

export const indiaFieldingBowling: BowlerStats[] = [
  { name: "Jasprit Bumrah", overs: 10, maidens: 1, runs: 42, wickets: 1, economy: 4.2 },
  { name: "Mohammed Shami", overs: 10, maidens: 0, runs: 62, wickets: 2, economy: 6.2 },
  { name: "Arshdeep Singh", overs: 8, maidens: 0, runs: 54, wickets: 0, economy: 6.75 },
  { name: "Hardik Pandya", overs: 7, maidens: 0, runs: 52, wickets: 1, economy: 7.43 },
  { name: "Kuldeep Yadav", overs: 10, maidens: 0, runs: 58, wickets: 1, economy: 5.8 },
  { name: "Ravindra Jadeja", overs: 5, maidens: 0, runs: 40, wickets: 0, economy: 8.0 },
];

// ─── UPCOMING FIXTURES ────────────────────────────────────────────────────────

export const upcomingFixtures: Fixture[] = [
  {
    id: "f1",
    series: "India vs England T20I Series 2026",
    format: "T20I",
    teamA: { name: "India", shortName: "IND", flag: "🇮🇳" },
    teamB: { name: "England", shortName: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    date: "June 18, 2026",
    time: "7:00 PM IST",
    venue: "Eden Gardens, Kolkata",
    status: "UPCOMING",
  },
  {
    id: "f2",
    series: "IPL 2026 Final",
    format: "IPL",
    teamA: { name: "Mumbai Indians", shortName: "MI", flag: "💙" },
    teamB: { name: "Chennai Super Kings", shortName: "CSK", flag: "💛" },
    date: "June 22, 2026",
    time: "7:30 PM IST",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "UPCOMING",
  },
  {
    id: "f3",
    series: "Australia vs New Zealand Test Series",
    format: "TEST",
    teamA: { name: "Australia", shortName: "AUS", flag: "🇦🇺" },
    teamB: { name: "New Zealand", shortName: "NZ", flag: "🇳🇿" },
    date: "June 25, 2026",
    time: "9:30 AM IST",
    venue: "MCG, Melbourne",
    status: "UPCOMING",
  },
  {
    id: "f4",
    series: "India vs Australia ODI Series 2026",
    format: "ODI",
    teamA: { name: "India", shortName: "IND", flag: "🇮🇳" },
    teamB: { name: "Australia", shortName: "AUS", flag: "🇦🇺" },
    date: "June 10, 2026",
    time: "1:30 PM IST",
    venue: "Punjab Cricket Association IS Bindra Stadium",
    status: "COMPLETED",
    scoreA: "IND 312/4 (50 ov)",
    scoreB: "AUS 289/8 (50 ov)",
    result: "India won by 23 runs",
  },
  {
    id: "f5",
    series: "India vs Australia ODI Series 2026",
    format: "ODI",
    teamA: { name: "India", shortName: "IND", flag: "🇮🇳" },
    teamB: { name: "Australia", shortName: "AUS", flag: "🇦🇺" },
    date: "June 12, 2026",
    time: "1:30 PM IST",
    venue: "M Chinnaswamy Stadium, Bengaluru",
    status: "COMPLETED",
    scoreA: "IND 256/9 (50 ov)",
    scoreB: "AUS 258/4 (46.2 ov)",
    result: "Australia won by 6 wickets",
  },
  {
    id: "f6",
    series: "Pakistan vs South Africa T20I Series",
    format: "T20I",
    teamA: { name: "Pakistan", shortName: "PAK", flag: "🇵🇰" },
    teamB: { name: "South Africa", shortName: "SA", flag: "🇿🇦" },
    date: "June 20, 2026",
    time: "8:00 PM PST",
    venue: "Gaddafi Stadium, Lahore",
    status: "UPCOMING",
  },
];

// ─── POINTS TABLE (IPL 2026) ──────────────────────────────────────────────────

export const iplPointsTable: PointsTableEntry[] = [
  { rank: 1, team: "Royal Challengers Bengaluru", shortName: "RCB", flag: "🔴", played: 14, won: 9, lost: 4, noResult: 1, nrr: 0.732, points: 19, isQualified: true },
  { rank: 2, team: "Punjab Kings", shortName: "PBKS", flag: "🔴", played: 14, won: 9, lost: 5, noResult: 0, nrr: 0.617, points: 18, isQualified: true },
  { rank: 3, team: "Mumbai Indians", shortName: "MI", flag: "💙", played: 14, won: 8, lost: 5, noResult: 1, nrr: 0.418, points: 17, isQualified: true },
  { rank: 4, team: "Chennai Super Kings", shortName: "CSK", flag: "💛", played: 14, won: 8, lost: 6, noResult: 0, nrr: 0.394, points: 16, isQualified: true },
  { rank: 5, team: "Kolkata Knight Riders", shortName: "KKR", flag: "💜", played: 14, won: 7, lost: 7, noResult: 0, nrr: 0.082, points: 14 },
  { rank: 6, team: "Sunrisers Hyderabad", shortName: "SRH", flag: "🟠", played: 14, won: 6, lost: 7, noResult: 1, nrr: -0.127, points: 13 },
  { rank: 7, team: "Rajasthan Royals", shortName: "RR", flag: "🩷", played: 14, won: 5, lost: 8, noResult: 1, nrr: -0.315, points: 11 },
  { rank: 8, team: "Delhi Capitals", shortName: "DC", flag: "🔵", played: 14, won: 4, lost: 9, noResult: 1, nrr: -0.512, points: 9 },
  { rank: 9, team: "Gujarat Titans", shortName: "GT", flag: "🔵", played: 14, won: 4, lost: 10, noResult: 0, nrr: -0.568, points: 8 },
  { rank: 10, team: "Lucknow Super Giants", shortName: "LSG", flag: "🩵", played: 14, won: 3, lost: 10, noResult: 1, nrr: -0.724, points: 7 },
];

// ─── LIVE TICKER ─────────────────────────────────────────────────────────────

export const liveTicker = [
  "LIVE: IND 187/3 (32.4 ov) vs AUS 288/7 (50 ov) • Need 102 from 104 balls",
  "IPL FINAL: MI vs CSK • June 22 @ Ahmedabad",
  "ENG tour of IND: 1st T20I • June 18 @ Kolkata",
  "AUS vs NZ Test: June 25 @ Melbourne",
  "PAK vs SA T20I Series: June 20 @ Lahore",
];
