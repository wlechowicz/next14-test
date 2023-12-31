// episode page
export default function EpisodePage() {
  return <div>episode page</div>;
}

export async function generateStaticParams() {
  return [
    {
      showId: "1396",
      seasonNumber: "1",
      episodeNumber: "1",
    },
  ];
}
// tv/{series_id}/season/{season_number}/episode/{episode_number}
// season 1 episode 1
// {
//     "air_date": "2008-01-20",
//     "crew": [
//       {
//         "department": "Directing",
//         "job": "Director",
//         "credit_id": "52542275760ee313280006e8",
//         "adult": false,
//         "gender": 2,
//         "id": 66633,
//         "known_for_department": "Writing",
//         "name": "Vince Gilligan",
//         "original_name": "Vince Gilligan",
//         "popularity": 6.694,
//         "profile_path": "/z3E0DhBg1V1PZVEtS9vfFPzOWYB.jpg"
//       },
//       {
//         "department": "Writing",
//         "job": "Writer",
//         "credit_id": "52542275760ee313280006ce",
//         "adult": false,
//         "gender": 2,
//         "id": 66633,
//         "known_for_department": "Writing",
//         "name": "Vince Gilligan",
//         "original_name": "Vince Gilligan",
//         "popularity": 6.694,
//         "profile_path": "/z3E0DhBg1V1PZVEtS9vfFPzOWYB.jpg"
//       },
//       {
//         "job": "Director of Photography",
//         "department": "Camera",
//         "credit_id": "52b7029219c29533d00dd2c1",
//         "adult": false,
//         "gender": 2,
//         "id": 2483,
//         "known_for_department": "Camera",
//         "name": "John Toll",
//         "original_name": "John Toll",
//         "popularity": 3.056,
//         "profile_path": "/cfL9A6tC7L5Ps5fq1o3WpVKGMb1.jpg"
//       },
//       {
//         "job": "Editor",
//         "department": "Editing",
//         "credit_id": "52b702ea19c2955402183a66",
//         "adult": false,
//         "gender": 1,
//         "id": 1280071,
//         "known_for_department": "Editing",
//         "name": "Lynne Willingham",
//         "original_name": "Lynne Willingham",
//         "popularity": 2.086,
//         "profile_path": null
//       },
//       {
//         "job": "Art Direction",
//         "department": "Art",
//         "credit_id": "62feade5cf4a640080998241",
//         "adult": false,
//         "gender": 2,
//         "id": 1018092,
//         "known_for_department": "Art",
//         "name": "James F. Oberlander",
//         "original_name": "James F. Oberlander",
//         "popularity": 1.684,
//         "profile_path": null
//       },
//       {
//         "job": "Associate Producer",
//         "department": "Production",
//         "credit_id": "6418a04de7414600b96bf1bd",
//         "adult": false,
//         "gender": 1,
//         "id": 1808170,
//         "known_for_department": "Production",
//         "name": "Gina Scheerer",
//         "original_name": "Gina Scheerer",
//         "popularity": 3.199,
//         "profile_path": null
//       }
//     ],
//     "episode_number": 1,
//     "guest_stars": [
//       {
//         "character": "Steven Gomez",
//         "credit_id": "5271b489760ee35b3e0881a7",
//         "order": 7,
//         "adult": false,
//         "gender": 2,
//         "id": 61535,
//         "known_for_department": "Acting",
//         "name": "Steven Michael Quezada",
//         "original_name": "Steven Michael Quezada",
//         "popularity": 4.539,
//         "profile_path": "/4BRo6oc26kePVYxgNzYwUrDagVO.jpg"
//       },
//       {
//         "character": "Jock",
//         "credit_id": "52542275760ee313280006b4",
//         "order": 500,
//         "adult": false,
//         "gender": 2,
//         "id": 1216132,
//         "known_for_department": "Acting",
//         "name": "Aaron Hill",
//         "original_name": "Aaron Hill",
//         "popularity": 7.749,
//         "profile_path": "/rNp31SeoVqSQU6OZWxZUhGwAgyq.jpg"
//       },
//       {
//         "character": "Dr. Belknap",
//         "credit_id": "52725cb1760ee3044d0b9984",
//         "order": 502,
//         "adult": false,
//         "gender": 2,
//         "id": 161591,
//         "known_for_department": "Acting",
//         "name": "Gregory Chase",
//         "original_name": "Gregory Chase",
//         "popularity": 3.156,
//         "profile_path": "/gNdodev00CROpXuAh5EFmkWTVOo.jpg"
//       },
//       {
//         "character": "Krazy-8",
//         "credit_id": "52725845760ee3046b09426e",
//         "order": 504,
//         "adult": false,
//         "gender": 2,
//         "id": 1046460,
//         "known_for_department": "Acting",
//         "name": "Max Arciniega",
//         "original_name": "Max Arciniega",
//         "popularity": 6.633,
//         "profile_path": "/eqKAJKPpt41KpsLIkkBnAY4HMAL.jpg"
//       },
//       {
//         "character": "Bogdan Wolynetz",
//         "credit_id": "5272587a760ee3045009ddec",
//         "order": 575,
//         "adult": false,
//         "gender": 2,
//         "id": 1223197,
//         "known_for_department": "Acting",
//         "name": "Marius Stan",
//         "original_name": "Marius Stan",
//         "popularity": 1.553,
//         "profile_path": "/14Yc0bTgitXxV0XLPCi944UU1ry.jpg"
//       },
//       {
//         "character": "Carmen Molina",
//         "credit_id": "52542273760ee31328000676",
//         "order": 644,
//         "adult": false,
//         "gender": 1,
//         "id": 115688,
//         "known_for_department": "Acting",
//         "name": "Carmen Serano",
//         "original_name": "Carmen Serano",
//         "popularity": 7.174,
//         "profile_path": "/nzJEe2UqvvMIBJZP1aeFEj4EunN.jpg"
//       },
//       {
//         "character": "Chad's Girlfriend",
//         "credit_id": "56846abbc3a36836280008d4",
//         "order": 652,
//         "adult": false,
//         "gender": 1,
//         "id": 1223192,
//         "known_for_department": "Art",
//         "name": "Roberta Marquez Seret",
//         "original_name": "Roberta Marquez Seret",
//         "popularity": 1.792,
//         "profile_path": null
//       },
//       {
//         "character": "Chad",
//         "credit_id": "63012a1a33a376007a442d63",
//         "order": 677,
//         "adult": false,
//         "gender": 0,
//         "id": 3670896,
//         "known_for_department": "Acting",
//         "name": "Evan Bobrick",
//         "original_name": "Evan Bobrick",
//         "popularity": 0.728,
//         "profile_path": null
//       },
//       {
//         "character": "E.M.T",
//         "credit_id": "63012a3d97eab4007d00192b",
//         "order": 678,
//         "adult": false,
//         "gender": 2,
//         "id": 36135,
//         "known_for_department": "Acting",
//         "name": "Christopher Dempsey",
//         "original_name": "Christopher Dempsey",
//         "popularity": 2.76,
//         "profile_path": "/pTngvks30p74j40TaniMkg4tbhn.jpg"
//       },
//       {
//         "character": "Irving",
//         "credit_id": "63012a5c33a376007f87247b",
//         "order": 679,
//         "adult": false,
//         "gender": 0,
//         "id": 2969089,
//         "known_for_department": "Production",
//         "name": "Allan Pacheco",
//         "original_name": "Allan Pacheco",
//         "popularity": 0.728,
//         "profile_path": null
//       },
//       {
//         "character": "Chemistry Student",
//         "credit_id": "63012a655f4b73007faa4261",
//         "order": 680,
//         "adult": false,
//         "gender": 0,
//         "id": 3670897,
//         "known_for_department": "Acting",
//         "name": "Jason Byrd",
//         "original_name": "Jason Byrd",
//         "popularity": 0.677,
//         "profile_path": null
//       },
//       {
//         "character": "Sexy Neighbor",
//         "credit_id": "63012a7e33a376007f872481",
//         "order": 681,
//         "adult": false,
//         "gender": 0,
//         "id": 219124,
//         "known_for_department": "Acting",
//         "name": "Linda Speciale",
//         "original_name": "Linda Speciale",
//         "popularity": 2.503,
//         "profile_path": null
//       },
//       {
//         "character": "Jock's Friend #1",
//         "credit_id": "63012a8bfb5299007d660bc8",
//         "order": 682,
//         "adult": false,
//         "gender": 0,
//         "id": 3212534,
//         "known_for_department": "Acting",
//         "name": "Jesús Ramírez",
//         "original_name": "Jesús Ramírez",
//         "popularity": 0.6,
//         "profile_path": "/1EfPZxdFNNi3LFLR9laLcVROAko.jpg"
//       },
//       {
//         "character": "Jock's Friend #2",
//         "credit_id": "63012ac4c2f44b007d249b54",
//         "order": 683,
//         "adult": false,
//         "gender": 0,
//         "id": 3670906,
//         "known_for_department": "Acting",
//         "name": "Joshua S. Patton",
//         "original_name": "Joshua S. Patton",
//         "popularity": 0.6,
//         "profile_path": null
//       },
//       {
//         "character": "Emilio Koyama",
//         "credit_id": "631aff1f62f335007ed32cb3",
//         "order": 705,
//         "adult": false,
//         "gender": 2,
//         "id": 92495,
//         "known_for_department": "Acting",
//         "name": "John Koyama",
//         "original_name": "John Koyama",
//         "popularity": 6.725,
//         "profile_path": "/AwtHbt8qO7D3EFonG5lqml8xgwb.jpg"
//       }
//     ],
//     "name": "Pilot",
//     "overview": "When an unassuming high school chemistry teacher discovers he has a rare form of lung cancer, he decides to team up with a former student and create a top of the line crystal meth in a used RV, to provide for his family once he is gone.",
//     "id": 62085,
//     "production_code": "",
//     "runtime": 59,
//     "season_number": 1,
//     "still_path": "/ydlY3iPfeOAvu8gVqrxPoMvzNCn.jpg",
//     "vote_average": 8.292,
//     "vote_count": 327
//   }
