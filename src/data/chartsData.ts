/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TableInfo } from "../types";

export const tablesData: TableInfo[] = [
  {
    tableNo: "4.1",
    title: "Elements that led to invest with India Bulls",
    source: "Author's Compilation",
    columns: ["Factors", "Percentage (%)", "Respondents"],
    data: [
      { Factors: "Safety", "Percentage (%)": 42, Respondents: 42 },
      { Factors: "Bank Services", "Percentage (%)": 20, Respondents: 20 },
      { Factors: "Past Experience", "Percentage (%)": 18, Respondents: 18 },
      { Factors: "Word Of Mouth", "Percentage (%)": 14, Respondents: 14 },
      { Factors: "Advertisement", "Percentage (%)": 6, Respondents: 6 },
    ],
    interpretation: "Safety is cited as the factor that has the most impact on investing in mutual funds through India Bulls. 42% of investors select safety, followed by Bank Services (20%), Historical/Past Experience (18%), Word of Mouth (14%), and Advertisements (6%)."
  },
  {
    tableNo: "4.2",
    title: "Degree of satisfaction with India Bulls services",
    source: "Author's Compilation",
    columns: ["Degree of Satisfaction", "Percentage (%)", "Respondents"],
    data: [
      { "Degree of Satisfaction": "Extremely Satisfied", "Percentage (%)": 80, Respondents: 80 },
      { "Degree of Satisfaction": "Satisfied To Lesser Extent", "Percentage (%)": 10, Respondents: 10 },
      { "Degree of Satisfaction": "Dissatisfied To Lesser Extent", "Percentage (%)": 5, Respondents: 5 },
      { "Degree of Satisfaction": "Extremely Dissatisfied", "Percentage (%)": 5, Respondents: 5 },
    ],
    interpretation: "A resounding majority (80%) of surveyed investors were extremely satisfied with India Bulls' services, 10% were satisfied to a lesser extent, and 10% experienced dissatisfaction (5% to a lesser extent and 5% extremely dissatisfied)."
  },
  {
    tableNo: "4.3",
    title: "Employment Status of the Respondents",
    source: "Author's Compilation",
    columns: ["Occupation", "Respondents", "Percentage (%)"],
    data: [
      { Occupation: "Business", Respondents: 43, "Percentage (%)": 43 },
      { Occupation: "Students", Respondents: 19, "Percentage (%)": 19 },
      { Occupation: "Retired", Respondents: 14, "Percentage (%)": 14 },
      { Occupation: "Professional", Respondents: 13, "Percentage (%)": 13 },
      { Occupation: "Service", Respondents: 11, "Percentage (%)": 11 },
    ],
    interpretation: "The survey represents a diverse group of professions. Since the study was largely conducted around banking clients, the business class constituted the largest single demographic at 43%, followed by students (19%), retired individuals (14%), professionals (13%), and service employees (11%)."
  },
  {
    tableNo: "4.4",
    title: "The Respondents' Annual Income",
    source: "Author's Compilation",
    columns: ["Annual Income Range", "Percentage (%)", "Respondents"],
    data: [
      { "Annual Income Range": "Less than ₹1 Lakh", "Percentage (%)": 10, Respondents: 10 },
      { "Annual Income Range": "₹1 Lakh - ₹2 Lakhs", "Percentage (%)": 35, Respondents: 35 },
      { "Annual Income Range": "₹2 Lakhs - ₹3 Lakhs", "Percentage (%)": 38, Respondents: 38 },
      { "Annual Income Range": "Above ₹3 Lakhs", "Percentage (%)": 17, Respondents: 17 },
    ],
    interpretation: "In terms of income distribution, 38% of respondents belong to the ₹2 - ₹3 Lakhs income group, and 35% earn between ₹1 - ₹2 Lakhs. High earners (above ₹3 Lakhs) constitute 17%, while 10% earn less than ₹1 Lakh."
  },
  {
    tableNo: "4.5",
    title: "The Respondents' Annual Savings",
    source: "Author's Compilation",
    columns: ["Annual Savings Range", "Percentage (%)", "Respondents"],
    data: [
      { "Annual Savings Range": "Less than ₹25,000", "Percentage (%)": 12, Respondents: 12 },
      { "Annual Savings Range": "₹25,000 - ₹50,000", "Percentage (%)": 33, Respondents: 33 },
      { "Annual Savings Range": "₹50,000 - ₹1,00,000", "Percentage (%)": 30, Respondents: 30 },
      { "Annual Savings Range": "Above ₹1,00,000", "Percentage (%)": 25, Respondents: 25 },
    ],
    interpretation: "Savings behavior shows that a significant portion of respondents save consistently. The largest bracket is ₹25,000 - ₹50,000 (33%), closely followed by ₹50,000 - ₹1,00,000 (30%). A high tier of savers (above ₹1 Lakh) makes up 25%, while 12% save less than ₹25,000 annually."
  },
  {
    tableNo: "4.6",
    title: "Is Mutual Funds a Reputable Option for Investing?",
    source: "Author's Compilation",
    columns: ["Response", "Percentage (%)", "Respondents"],
    data: [
      { Response: "Yes (Less Risky)", "Percentage (%)": 80, Respondents: 80 },
      { Response: "No (Stock Market is Better/Speculative)", "Percentage (%)": 20, Respondents: 20 },
    ],
    interpretation: "Eighty percent (80%) of respondents view mutual funds as a reputable and relatively stable choice of investment. The remaining 20% preferred active stock markets or had reservations about mutual fund efficiency."
  },
  {
    tableNo: "4.7",
    title: "Preferred Mutual Fund Firms by Investors",
    source: "Author's Compilation",
    columns: ["Companies", "1st Choice", "2nd Choice", "3rd Choice", "4th Choice", "5th Choice", "6th Choice", "Weighted Avg", "Rank"],
    data: [
      { Companies: "Franklin Templeton", "1st Choice": 39, "2nd Choice": 21, "3rd Choice": 16, "4th Choice": 10, "5th Choice": 8, "6th Choice": 6, "Weighted Avg": 21.67, Rank: 1 },
      { Companies: "SBI (Magnum/Blue-chip)", "1st Choice": 15, "2nd Choice": 19, "3rd Choice": 30, "4th Choice": 20, "5th Choice": 10, "6th Choice": 6, "Weighted Avg": 18.62, Rank: 2 },
      { Companies: "HDFC (Top 200/Equity)", "1st Choice": 20, "2nd Choice": 21, "3rd Choice": 18, "4th Choice": 17, "5th Choice": 14, "6th Choice": 10, "Weighted Avg": 18.38, Rank: 3 },
      { Companies: "Birla (Infra/Top 100)", "1st Choice": 10, "2nd Choice": 15, "3rd Choice": 20, "4th Choice": 30, "5th Choice": 12, "6th Choice": 13, "Weighted Avg": 16.29, Rank: 4 },
      { Companies: "Reliance (Growth/Equity)", "1st Choice": 9, "2nd Choice": 13, "3rd Choice": 10, "4th Choice": 12, "5th Choice": 30, "6th Choice": 26, "Weighted Avg": 13.38, Rank: 5 },
      { Companies: "UTI (Contra/Leadership)", "1st Choice": 7, "2nd Choice": 11, "3rd Choice": 6, "4th Choice": 11, "5th Choice": 26, "6th Choice": 39, "Weighted Avg": 11.67, Rank: 6 },
    ],
    interpretation: "Franklin Templeton ranks as the top choice for mutual fund investors with a weighted average of 21.67, with 39% selecting it as their first choice. SBI and HDFC are closely matched in second (18.62) and third (18.38) places, while Birla, Reliance, and UTI follow behind in preference."
  },
  {
    tableNo: "4.8",
    title: "Investors Preferred Investment Avenues, if given choice of Rs. 1 Lakh",
    source: "Author's Compilation",
    columns: ["Investment Avenues", "Percentage (%)", "Respondents"],
    data: [
      { "Investment Avenues": "Insurance", "Percentage (%)": 45, Respondents: 45 },
      { "Investment Avenues": "Real Estate", "Percentage (%)": 20, Respondents: 20 },
      { "Investment Avenues": "Stock Market", "Percentage (%)": 15, Respondents: 15 },
      { "Investment Avenues": "Fixed Deposit", "Percentage (%)": 12, Respondents: 12 },
      { "Investment Avenues": "Mutual Funds", "Percentage (%)": 8, Respondents: 8 },
    ],
    interpretation: "When given a hypothetical Rs. 1 Lakh budget, the highest percentage of investors prefer Insurance (45%) due to tax saving perks and safety. Real estate is second (20%), followed by the stock market (15%), Fixed Deposits (12%), and Mutual Funds (8%)."
  },
  {
    tableNo: "4.9",
    title: "Contribution / Typical Investment in Mutual Funds",
    source: "Author's Compilation",
    columns: ["Amount of Funds", "Percentage (%)", "Respondents"],
    data: [
      { "Amount of Funds": "Below ₹10,000", "Percentage (%)": 20, Respondents: 20 },
      { "Amount of Funds": "₹10,000 - ₹50,000", "Percentage (%)": 70, Respondents: 70 },
      { "Amount of Funds": "₹50,000 - ₹1,00,000", "Percentage (%)": 10, Respondents: 10 },
    ],
    interpretation: "A vast majority of mutual fund investors (70%) choose to allocate between ₹10,000 and ₹50,000 in schemes, pointing to a healthy middle-range retail base. 20% invest smaller amounts (below ₹10,000), while only 10% commit larger sums between ₹50,000 and ₹1,00,000."
  },
  {
    tableNo: "4.10",
    title: "Investors' Goals in Investing in Mutual Fund Schemes",
    source: "Author's Compilation",
    columns: ["Investment Objective", "Percentage (%)", "Respondents"],
    data: [
      { "Investment Objective": "Safety of Schemes", "Percentage (%)": 30, Respondents: 30 },
      { "Investment Objective": "Capital Appreciation", "Percentage (%)": 27, Respondents: 27 },
      { "Investment Objective": "Tax Benefit", "Percentage (%)": 26, Respondents: 26 },
      { "Investment Objective": "Liquidity", "Percentage (%)": 17, Respondents: 17 },
    ],
    interpretation: "Safety remains the paramount objective, driving 30% of investors. Capital appreciation (27%) and Tax Benefits (26%) are almost tied as strong secondary objectives, while Liquidity counts for 17% of investors."
  },
  {
    tableNo: "4.11",
    title: "Investment Time Horizon Preferred by Investors",
    source: "Author's Compilation",
    columns: ["Investment Horizon Period", "Percentage (%)", "Respondents"],
    data: [
      { "Investment Horizon Period": "Short Term (<1 Year)", "Percentage (%)": 25, Respondents: 25 },
      { "Investment Horizon Period": "Medium Term (1-3 Years)", "Percentage (%)": 63, Respondents: 63 },
      { "Investment Horizon Period": "Long Term (>3 Years)", "Percentage (%)": 12, Respondents: 12 },
    ],
    interpretation: "Most respondents are medium-term investors, with 63% choosing a 1-3 year horizon. Short-term horizons are preferred by 25%, and long-term targets are favored by only 12%, suggesting a focus on intermediate liquidity and growth."
  },
  {
    tableNo: "4.12",
    title: "Consultation Habits Before Making an Investment Choice",
    source: "Author's Compilation",
    columns: ["Persons Consulted", "Percentage (%)", "Respondents"],
    data: [
      { "Persons Consulted": "Financial Advisors", "Percentage (%)": 35, Respondents: 35 },
      { "Persons Consulted": "Family", "Percentage (%)": 30, Respondents: 30 },
      { "Persons Consulted": "Individually", "Percentage (%)": 25, Respondents: 25 },
      { "Persons Consulted": "Friends", "Percentage (%)": 8, Respondents: 8 },
      { "Persons Consulted": "Relatives", "Percentage (%)": 2, Respondents: 2 },
    ],
    interpretation: "Professional guidance is highly valued, with 35% consulting financial advisors. Family is another critical influence at 30%, while 25% make investment decisions independently. Friends (8%) and relatives (2%) have minor influence."
  },
  {
    tableNo: "4.13",
    title: "Investors Preferred Parameters for Different Investment Vehicles",
    source: "Author's Compilation",
    columns: ["Investment Type", "Rate of Return", "Liquidity", "Safety", "Capital Appreciation", "Tax Benefit"],
    data: [
      { "Investment Type": "Real Estate", "Rate of Return": 1, Liquidity: 3, Safety: 2, "Capital Appreciation": 1, "Tax Benefit": 0 },
      { "Investment Type": "Stock Market", "Rate of Return": 3, Liquidity: 4, Safety: 0, "Capital Appreciation": 2, "Tax Benefit": 0 },
      { "Investment Type": "Mutual Fund", "Rate of Return": 2, Liquidity: 2, Safety: 4, "Capital Appreciation": 3, "Tax Benefit": 2 },
      { "Investment Type": "Fixed Deposit", "Rate of Return": 4, Liquidity: 1, Safety: 1, "Capital Appreciation": 0, "Tax Benefit": 0 },
      { "Investment Type": "Insurance", "Rate of Return": 5, Liquidity: 5, Safety: 3, "Capital Appreciation": 4, "Tax Benefit": 1 },
    ],
    interpretation: "Note: Ranks range from 1 to 5 (or 0 for minimal relevance), where lower numbers represent superior scores. Real Estate excels in Rate of Return and Capital Appreciation. Fixed Deposits are top-rated for Liquidity and Safety. Mutual Funds are a solid all-rounder, ranking second in Returns, Liquidity, and Tax benefits, making it an excellent balanced solution."
  }
];
