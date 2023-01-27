/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('member').del()
    await knex('member').insert([
      { id: 1, first_name: 'Teena', last_name: 'Ortega', username: "teenaortega", password_hash: "$2b$12$hig73jSR/ccryE0pNivX7.SqN4DeovW1jXK7Drnq9QxxIKQgiTnA6", admin: false},
      { id: 2, first_name: 'Casey', last_name: 'Carpenter', username: "QueSei", password_hash: "$2b$12$/PdDxfNcLeGf6Cgg09EkcOG2bfv3rhAGOjkfwSLyGvhN9eZGsRvOu", admin: true},
      { id: 3, first_name: 'Thorin', last_name: 'Oakenshield', username: "Orcrist4Eva", password_hash: "$2b$12$/PdDxfNcLeGf6Cgg09EkcOG2bfv3rhAGOjkfwSLyGvhN9eZGsRvOu", admin: true},
      { id: 4, first_name: 'Egypt', last_name: 'Ortega', username: "PuppyPrinec355", password_hash: "$2b$12$/PdDxfNcLeGf6Cgg09EkcOG2bfv3rhAGOjkfwSLyGvhN9eZGsRvOu", admin: true},
      { id: 5, first_name: 'Test', last_name: 'Testington', username: "test", password_hash: "$2b$12$YobH2WZ8idc6UdCtUHcJ3u70a9Dt.TS5edX/FVa.91hkyIIJ6IMVq", admin: true},
      {
        id: 6,
        first_name: "Joy",
        last_name: "Walter",
        username: "tortor",
        password_hash: "XNZ73JHC1IL",
        admin: false
      },
      {
        id: 7,
        first_name: "Mia",
        last_name: "Aaron",
        username: "orci.",
        password_hash: "VQS08PKX7WV",
        admin: false
      },
      {
        id: 8,
        first_name: "Gretchen",
        last_name: "Medge",
        username: "commodo",
        password_hash: "DFT34ISL5PP",
        admin: true
      },
      {
        id: 9,
        first_name: "Norman",
        last_name: "Violet",
        username: "taciti",
        password_hash: "SMH83LXE2QG",
        admin: true
      },
      {
        id: 10,
        first_name: "Brynn",
        last_name: "Blossom",
        username: "lacinia",
        password_hash: "GSM47YSS7JC",
        admin: true
      },
      {
        id: 11,
        first_name: "Victor",
        last_name: "Juliet",
        username: "ultrices,",
        password_hash: "YHV21QPE4RT",
        admin: false
      },
      {
        id: 12,
        first_name: "Marny",
        last_name: "Michael",
        username: "libero.",
        password_hash: "EKL22MIJ6JT",
        admin: false
      },
      {
        id: 13,
        first_name: "Remedios",
        last_name: "Perry",
        username: "mollis",
        password_hash: "POV82NWM3MU",
        admin: true
      },
      {
        id: 14,
        first_name: "Steven",
        last_name: "Shay",
        username: "facilisis",
        password_hash: "SIM56SYJ0FU",
        admin: false
      },
      {
        id: 15,
        first_name: "Baxter",
        last_name: "Malcolm",
        username: "Phasellus",
        password_hash: "PCE34JJH8UH",
        admin: true
      },
      {
        id: 16,
        first_name: "Omar",
        last_name: "Benjamin",
        username: "In",
        password_hash: "VYG84UHW9FR",
        admin: false
      },
      {
        id: 17,
        first_name: "Erin",
        last_name: "Yetta",
        username: "turpis",
        password_hash: "QMF72IJR7LP",
        admin: false
      },
      {
        id: 18,
        first_name: "Sandra",
        last_name: "Dalton",
        username: "odio",
        password_hash: "QKJ55GPK5DK",
        admin: false
      },
      {
        id: 19,
        first_name: "Gemma",
        last_name: "Walker",
        username: "consectetuer,",
        password_hash: "QET13NKN3HB",
        admin: false
      },
      {
        id: 20,
        first_name: "Dora",
        last_name: "Herrod",
        username: "Monec",
        password_hash: "ERK96KRV5BI",
        admin: false
      },
      {
        id: 21,
        first_name: "Dora",
        last_name: "Medge",
        username: "erat",
        password_hash: "OUY82LHW8QX",
        admin: true
      },
      {
        id: 22,
        first_name: "Genevieve",
        last_name: "Jarrod",
        username: "Donec",
        password_hash: "JXS83WOD0NF",
        admin: false
      },
      {
        id: 23,
        first_name: "Timon",
        last_name: "Olga",
        username: "Bectus",
        password_hash: "BCV21TAN5TY",
        admin: true
      },
      {
        id: 24,
        first_name: "Daniel",
        last_name: "Erich",
        username: "volutpat.",
        password_hash: "RUC93KUR2NS",
        admin: false
      },
      {
        id: 25,
        first_name: "Shad",
        last_name: "Yuri",
        username: "tincidunt",
        password_hash: "GUD14UTF8TC",
        admin: false
      },
      {
        id: 26,
        first_name: "Rahim",
        last_name: "Henry",
        username: "mi",
        password_hash: "CSK23SUQ8XV",
        admin: true
      },
      {
        id: 27,
        first_name: "Imogene",
        last_name: "Colorado",
        username: "Tras",
        password_hash: "XXS34EWE6QF",
        admin: false
      },
      {
        id: 28,
        first_name: "Justina",
        last_name: "Garth",
        username: "purus.",
        password_hash: "KOW75CRI1NW",
        admin: true
      },
      {
        id: 29,
        first_name: "Sybil",
        last_name: "Finn",
        username: "sem,",
        password_hash: "WCC24LEM5PY",
        admin: true
      },
      {
        id: 30,
        first_name: "Kermit",
        last_name: "Keith",
        username: "urna.",
        password_hash: "CCH86OVD3QU",
        admin: false
      },
      {
        id: 31,
        first_name: "Leo",
        last_name: "Tatiana",
        username: "neque",
        password_hash: "GBZ02SGR8OY",
        admin: true
      },
      {
        id: 32,
        first_name: "Montana",
        last_name: "Zahir",
        username: "non,",
        password_hash: "JFS40TGP3MB",
        admin: true
      },
      {
        id: 33,
        first_name: "Plato",
        last_name: "Harrison",
        username: "mauris",
        password_hash: "JPL43IKP7PY",
        admin: false
      },
      {
        id: 34,
        first_name: "Irene",
        last_name: "Kristen",
        username: "ligula.",
        password_hash: "EQK42PBA6DK",
        admin: false
      },
      {
        id: 35,
        first_name: "Chadwick",
        last_name: "Oprah",
        username: "amet",
        password_hash: "LUL40IKC5MB",
        admin: true
      },
      {
        id: 36,
        first_name: "Aidan",
        last_name: "Kevin",
        username: "tristique",
        password_hash: "JWD72BOD8JN",
        admin: true
      },
      {
        id: 37,
        first_name: "Yvette",
        last_name: "Thor",
        username: "morbi",
        password_hash: "WTR57YVU2EQ",
        admin: true
      },
      {
        id: 38,
        first_name: "Armand",
        last_name: "Zachery",
        username: "ornare,",
        password_hash: "WOS22NRP7WU",
        admin: true
      },
      {
        id: 39,
        first_name: "Xanthus",
        last_name: "Mark",
        username: "arcu.",
        password_hash: "WCB13CPQ3IW",
        admin: true
      },
      {
        id: 40,
        first_name: "Fulton",
        last_name: "Cynthia",
        username: "interdum",
        password_hash: "CHP11GLK8EK",
        admin: false
      },
      {
        id: 41,
        first_name: "Dillon",
        last_name: "Michelle",
        username: "netus",
        password_hash: "SDM54KKN6GS",
        admin: false
      },
      {
        id: 42,
        first_name: "Lars",
        last_name: "Charles",
        username: "Tectus",
        password_hash: "RYY14VJT5II",
        admin: false
      },
      {
        id: 43,
        first_name: "Armand",
        last_name: "Stephanie",
        username: "Nulla",
        password_hash: "VGZ47XYP7SM",
        admin: true
      },
      {
        id: 44,
        first_name: "Fleur",
        last_name: "Harriet",
        username: "Cras",
        password_hash: "DFM49YDB5FL",
        admin: true
      },
      {
        id: 45,
        first_name: "Kylynn",
        last_name: "Martha",
        username: "Cum",
        password_hash: "ELU84HGH3EN",
        admin: true
      },
      {
        id: 46,
        first_name: "Octavius",
        last_name: "Michael",
        username: "vitae",
        password_hash: "OOP28VSO1SV",
        admin: false
      },
      {
        id: 47,
        first_name: "Kevyn",
        last_name: "Alan",
        username: "BIn",
        password_hash: "WMZ57QTX1FD",
        admin: true
      },
      {
        id: 48,
        first_name: "Shaine",
        last_name: "Kaseem",
        username: "a,",
        password_hash: "UJQ05UKB5ZR",
        admin: false
      },
      {
        id: 49,
        first_name: "Freya",
        last_name: "Vincent",
        username: "Duis",
        password_hash: "LQH43OKU9ZS",
        admin: true
      },
      {
        id: 50,
        first_name: "Anika",
        last_name: "Gretchen",
        username: "Vivamus",
        password_hash: "JZW31RTB8DP",
        admin: true
      },
      {
        id: 51,
        first_name: "Malachi",
        last_name: "Burton",
        username: "senectus",
        password_hash: "LEI13DND4IN",
        admin: true
      },
      {
        id: 52,
        first_name: "Zachery",
        last_name: "Zeus",
        username: "Aenean",
        password_hash: "KQB35ADU8QY",
        admin: true
      },
      {
        id: 53,
        first_name: "Isadora",
        last_name: "Kevin",
        username: "cubilia",
        password_hash: "QJD41OXX6JI",
        admin: false
      },
      {
        id: 54,
        first_name: "Clio",
        last_name: "Paki",
        username: "Sollis",
        password_hash: "YFJ35VYV2XM",
        admin: true
      },
      {
        id: 55,
        first_name: "Wynter",
        last_name: "Sacha",
        username: "lobortis",
        password_hash: "PPK07BEV8LX",
        admin: true
      },
      {
        id: 56,
        first_name: "Maya",
        last_name: "Armando",
        username: "Mauris",
        password_hash: "IKM51HBF1EW",
        admin: true
      },
      {
        id: 57,
        first_name: "Kasper",
        last_name: "Yuli",
        username: "rhoncus",
        password_hash: "BSP35CRB6HN",
        admin: false
      },
      {
        id: 58,
        first_name: "Lael",
        last_name: "Ciaran",
        username: "adipiscing",
        password_hash: "VRW34QKS4IM",
        admin: true
      },
      {
        id: 59,
        first_name: "Francesca",
        last_name: "Joy",
        username: "sit",
        password_hash: "GOG16EPV5HM",
        admin: true
      },
      {
        id: 60,
        first_name: "Chandler",
        last_name: "Daryl",
        username: "nunc",
        password_hash: "WLH75OCX3YY",
        admin: false
      },
      {
        id: 61,
        first_name: "Rowan",
        last_name: "Cassandra",
        username: "Suspendisse",
        password_hash: "AKQ08MND0BL",
        admin: true
      },
      {
        id: 62,
        first_name: "Tanek",
        last_name: "Fredericka",
        username: "arcu",
        password_hash: "DBK26LTB1JN",
        admin: true
      },
      {
        id: 63,
        first_name: "Judith",
        last_name: "Jack",
        username: "imperdiet",
        password_hash: "GPD01OGJ0JM",
        admin: false
      },
      {
        id: 64,
        first_name: "Colt",
        last_name: "Julian",
        username: "dictum",
        password_hash: "WCY31FFD8HH",
        admin: true
      },
      {
        id: 65,
        first_name: "Kimberley",
        last_name: "Eve",
        username: "ipsum.",
        password_hash: "UGT62EHY2GI",
        admin: true
      },
      {
        id: 66,
        first_name: "Yoshio",
        last_name: "Tamara",
        username: "Rommodo",
        password_hash: "BFJ84ZGE5VJ",
        admin: true
      },
      {
        id: 67,
        first_name: "Amity",
        last_name: "Simone",
        username: "nec,",
        password_hash: "JLL77OUW2UU",
        admin: true
      },
      {
        id: 68,
        first_name: "Nichole",
        last_name: "Ronan",
        username: "amet",
        password_hash: "QRX96ZMZ4KT",
        admin: true
      },
      {
        id: 69,
        first_name: "Georgia",
        last_name: "Carla",
        username: "ullamcorper",
        password_hash: "VXA23VMI8UD",
        admin: false
      },
      {
        id: 70,
        first_name: "Steven",
        last_name: "Adara",
        username: "elementum",
        password_hash: "HRX19YNR5KN",
        admin: true
      },
      {
        id: 71,
        first_name: "Illana",
        last_name: "Dante",
        username: "tempor",
        password_hash: "EXT12DLV8CY",
        admin: true
      },
      {
        id: 72,
        first_name: "Rhiannon",
        last_name: "Thomas",
        username: "ipsum",
        password_hash: "ZFR12NYY6UE",
        admin: false
      },
      {
        id: 73,
        first_name: "Tatyana",
        last_name: "Guy",
        username: "a",
        password_hash: "QDK87PCI1BM",
        admin: true
      },
      {
        id: 74,
        first_name: "Susan",
        last_name: "Brendan",
        username: "leo.",
        password_hash: "UWG42CEF5WC",
        admin: false
      },
      {
        id: 75,
        first_name: "Margaret",
        last_name: "Cameron",
        username: "lacinia",
        password_hash: "KFS49ESW4NJ",
        admin: false
      },
      {
        id: 76,
        first_name: "Rhona",
        last_name: "Kylee",
        username: "ornare",
        password_hash: "TPV32WMY6EF",
        admin: false
      },
      {
        id: 77,
        first_name: "Orla",
        last_name: "Emerald",
        username: "molestie",
        password_hash: "SMQ22NEM1PY",
        admin: false
      },
      {
        id: 78,
        first_name: "Joseph",
        last_name: "Joseph",
        username: "Maecenas",
        password_hash: "WFX43AGP4OC",
        admin: false
      },
      {
        id: 79,
        first_name: "Vielka",
        last_name: "Lyle",
        username: "eget",
        password_hash: "ZQT48LIW1YD",
        admin: false
      },
      {
        id: 80,
        first_name: "Eaton",
        last_name: "Oliver",
        username: "augue",
        password_hash: "TSO62KLS7UR",
        admin: false
      },
      {
        id: 81,
        first_name: "Rebecca",
        last_name: "Hedley",
        username: "mi,",
        password_hash: "OCW46EZU5OA",
        admin: true
      },
      {
        id: 82,
        first_name: "Abraham",
        last_name: "Deacon",
        username: "a,",
        password_hash: "GUB37JBN5GJ",
        admin: false
      },
      {
        id: 83,
        first_name: "Jermaine",
        last_name: "Anjolie",
        username: "lectus",
        password_hash: "OHI08KUK9TS",
        admin: true
      },
      {
        id: 84,
        first_name: "Debra",
        last_name: "Brent",
        username: "mi,",
        password_hash: "GQO33JQL3CI",
        admin: true
      },
      {
        id: 85,
        first_name: "Leigh",
        last_name: "Lev",
        username: "vitae",
        password_hash: "CXG46KKT1CC",
        admin: false
      },
      {
        id: 86,
        first_name: "Amanda",
        last_name: "Fulton",
        username: "Lommodo",
        password_hash: "WGQ17IYP8WI",
        admin: false
      },
      {
        id: 87,
        first_name: "Drake",
        last_name: "Lydia",
        username: "elit.",
        password_hash: "LQF60FOH5SF",
        admin: false
      },
      {
        id: 88,
        first_name: "Hu",
        last_name: "Kareem",
        username: "at",
        password_hash: "IKG14ULM8WK",
        admin: false
      },
      {
        id: 89,
        first_name: "Bernard",
        last_name: "Kyra",
        username: "a",
        password_hash: "VWM17BSC8YD",
        admin: false
      },
      {
        id: 90,
        first_name: "Linus",
        last_name: "Veronica",
        username: "Nunc",
        password_hash: "OZF11VSF1QC",
        admin: false
      },
      {
        id: 91,
        first_name: "Merrill",
        last_name: "Hamilton",
        username: "Sed",
        password_hash: "DXU66NFG1PY",
        admin: true
      },
      {
        id: 92,
        first_name: "Hadley",
        last_name: "Clio",
        username: "metus",
        password_hash: "JKN52GOD2TB",
        admin: false
      },
      {
        id: 93,
        first_name: "Imani",
        last_name: "Megan",
        username: "turpis",
        password_hash: "BOW00YTE2HI",
        admin: false
      },
      {
        id: 94,
        first_name: "Emma",
        last_name: "Frances",
        username: "vel",
        password_hash: "RQB46UKQ4HO",
        admin: false
      },
      {
        id: 95,
        first_name: "Declan",
        last_name: "Vivien",
        username: "ante",
        password_hash: "KTT06PDY4UA",
        admin: true
      },
      {
        id: 96,
        first_name: "Kasper",
        last_name: "Teegan",
        username: "Aliquam",
        password_hash: "ZJC01FBW8RI",
        admin: true
      },
      {
        id: 97,
        first_name: "Thaddeus",
        last_name: "Uriah",
        username: "enim.",
        password_hash: "KYF91BQF1IT",
        admin: true
      },
      {
        id: 98,
        first_name: "Grady",
        last_name: "Megan",
        username: "eget",
        password_hash: "GJP56HQU2AZ",
        admin: false
      },
      {
        id: 99,
        first_name: "Pamela",
        last_name: "Randall",
        username: "Duis",
        password_hash: "QLR52CEH8YH",
        admin: false
      },
      {
        id: 100,
        first_name: "Ima",
        last_name: "Nina",
        username: "in,",
        password_hash: "HUG58KXD1OB",
        admin: false
      },
      {
        id: 101,
        first_name: "Amal",
        last_name: "Lev",
        username: "bibendum.",
        password_hash: "XVF64FDT1UM",
        admin: true
      },
      {
        id: 102,
        first_name: "Ursa",
        last_name: "Lucy",
        username: "molestie",
        password_hash: "GVW54UND8DW",
        admin: true
      },
      {
        id: 103,
        first_name: "Keegan",
        last_name: "Reed",
        username: "eu",
        password_hash: "QXH38WXG5KE",
        admin: true
      },
      {
        id: 104,
        first_name: "Flavia",
        last_name: "Montana",
        username: "volutpat",
        password_hash: "VCQ80JXD0XR",
        admin: false
      },
      {
        id: 105,
        first_name: "Elvis",
        last_name: "Lucy",
        username: "elit",
        password_hash: "PIC64CHP5AJ",
        admin: false
      }
    ]);
  };