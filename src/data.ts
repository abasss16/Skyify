import { Track, Playlist } from "./types";

export const SEED_TRACKS: Track[] = [
  {
    id: "track-1",
    title: "Lantas",
    artist: "Juicy Luicy",
    album: "Sentimental",
    duration: "3:45",
    durationSec: 225,
    coverUrl: "https://tse1.mm.bing.net/th/id/OIP.j6RaYII2ZtK_Bus9NX2TJAHaHa?pid=Api&h=220&P=0",
    audioUrl: "/audio/Lantas.mp3"
  },
  {
    id: "track-2",
    title: "Tampar",
    artist: "Juicy Luicy",
    album: "Sentimental",
    duration: "3:20",
    durationSec: 200,
    coverUrl: "https://tse4.mm.bing.net/th/id/OIP.Ih9AvyIzC0tLdYovhh1sJgAAAA?pid=Api&h=220&P=0",
    audioUrl: "/audio/tampar.mp3"
  },
  {
    id: "track-3",
    title: "Jiwa Yang Bersedih",
    artist: "Ghea Indrawari",
    album: "Berdamai",
    duration: "4:32",
    durationSec: 272,
    coverUrl: "https://tse3.mm.bing.net/th/id/OIP.tDuy22-P9n600VpJKAk6jAHaHa?pid=Api&h=220&P=0",
    audioUrl: "/audio/jiwayangbersedih.mp3"
  },
  {
    id: "track-4",
    title: "Teramini",
    artist: "Ghea Indrawari",
    album: "Berdamai",
    duration: "3:58",
    durationSec: 238,
    coverUrl: "https://tse3.mm.bing.net/th/id/OIP.tDuy22-P9n600VpJKAk6jAHaHa?pid=Api&h=220&P=0",
    audioUrl: "/audio/teramini.mp3"
  },
  {
    id: "track-5",
    title: "Evaluasi",
    artist: "Hindia",
    album: "Menari Dengan Bayangan",
    duration: "3:24",
    durationSec: 204,
    coverUrl: "https://tse3.mm.bing.net/th/id/OIP.1s0rdk8Nqq7zz5FSuiaA2QHaEK?pid=Api&h=220&P=0",
    audioUrl: "/audio/evaluasi.mp3"
  },
  {
    id: "track-6",
    title: "Secukupnya",
    artist: "Hindia",
    album: "Menari Dengan Bayangan",
    duration: "3:26",
    durationSec: 206,
    coverUrl: "https://tse4.mm.bing.net/th/id/OIP.JFYv2EjNfz5kVOruLRktVgHaEK?pid=Api&h=220&P=0",
    audioUrl: "/audio/secukupnya.mp3"
  },
  {
    id: "track-7",
    title: "Gala Bunga Matahari",
    artist: "Sal Priadi",
    album: "Markers and Such",
    duration: "4:15",
    durationSec: 255,
    coverUrl: "https://tse4.mm.bing.net/th/id/OIP.JTT4aV72oYN4ZLWng3JnSQHaHa?pid=Api&h=220&P=0",
    audioUrl: "/audio/galabungamatahari.mp3"
  },
  {
    id: "track-8",
    title: "kita usahakan rumah itu",
    artist: "Sal Priadi",
    album: "Markers and Such",
    duration: "3:40",
    durationSec: 220,
    coverUrl: "https://tse2.mm.bing.net/th/id/OIP.10I3paBwI-3jGJ3Kx0iv_gHaLH?pid=Api&h=220&P=0",
    audioUrl: "/audio/rumah.mp3"
  },
  {
    id: "track-9",
    title: "mejikuhibiniu",
    artist: "Tenxi",
    album: "Mimpi Terindah",
    duration: "3:50",
    durationSec: 230,
    coverUrl: "https://tse1.mm.bing.net/th/id/OIP.6ElmPRRs-pMYKUKJ26x7_AAAAA?pid=Api&h=220&P=0",
    audioUrl: "/audio/mejikuhibiniu.mp3"
  },
  {
    id: "track-10",
    title: "garam & madu",
    artist: "Tenxi",
    album: "Mimpi Terindah",
    duration: "4:02",
    durationSec: 242,
    coverUrl: "https://tse1.mm.bing.net/th/id/OIP.6ElmPRRs-pMYKUKJ26x7_AAAAA?pid=Api&h=220&P=0",
    audioUrl: "/audio/garammadu.mp3"
  },
  {
    id: "track-11",
    title: "berubah",
    artist: "tenxi",
    album: "Skeptical Ep",
    duration: "3:10",
    durationSec: 190,
    coverUrl: "https://tse1.mm.bing.net/th/id/OIP.2r4f87sg7u84W4wVhtZP4gHaHa?pid=Api&h=220&P=0",
    audioUrl: "/audio/berubah.mp3"
  },
  {
    id: "track-12",
    title: "sency",
    artist: "naykilla",
    album: "Skeptical Ep",
    duration: "3:44",
    durationSec: 224,
    coverUrl: "https://tse4.mm.bing.net/th/id/OIP.O1x9BHa2NnVp5avMtUBqkwAAAA?pid=Api&h=220&P=0",
    audioUrl: "/audio/sency.mp3"
  }
];

export const DEFAULT_PLAYLISTS: Playlist[] = [
  {
    id: "playlist-1",
    name: "Lagu Indonesia Terpopuler",
    description: "Nikmati hits terbaik dari Juicy Luicy, Hindia, Sal Priadi, Ghea Indrawari, dan lainnya dalam satu aliran musik atmosferik.",
    coverUrl: "/audio/bg1.png",
    trackIds: ["track-1", "track-3", "track-5", "track-7", "track-9", "track-11"],
    isFavorite: true,
    isCustom: false,
    createdBy: "system"
  }
];

export const DEFAULT_BG_IMAGE = "/src/assets/images/cosmic_tree_bg_1781599588800a.jpg";
