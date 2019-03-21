import axios from "axios";

const API = axios.create({
  baseURL: "https://apis.justwatch.com/content"
});
const LOCALE = (
  navigator.language ||
  navigator.browserLanguage ||
  (navigator.languages || ["en"])[0]
).replace("-", "_");

/**
{
   "age_certifications":null,
   "content_types":null, // show, movie
   "genres":null,
   "languages":null,
   "max_price":null,
   "min_price":null,
   "monetization_types":[
      "flatrate",
      "rent",
      "buy",
      "ads",
      "free"
   ],
   "page":1,
   "page_size":30,
   "presentation_types":null,
   "providers":[
      "nfx"
   ],
   "release_year_from":null,
   "release_year_until":null,
   "scoring_filter_types":null,
   "timeline_type":null
}


search=post









 */

/**
 *
 */
export const getProviders = () => API.get(`/providers/locale/${LOCALE}`);

/**
 *
 */
export const getGenres = () => API.get(`/genres/locale/${LOCALE}`);

/**
 *
 */
export const getSeason = seasonId =>
  API.get(`/titles/show_season/${seasonId}/locale/${LOCALE}`);

/**
 *
 */
export const getEpisodes = showId =>
  API.get(`/titles/show/${showId}/locale/${LOCALE}/newest_episodes`);

/**
 *
 */
export const getTitle = (contentType, titleId) =>
  API.get(`/titles/${contentType}/${titleId}/locale/${LOCALE}`);

/**
 *
 */
export const getPerson = personId =>
  API.get(`/titles/person/${personId}/locale/${LOCALE}`);

/**
 *
 */
export const getRegions = () => API.get(`/regions/${LOCALE}`);

/**
 *
 */
export const getAgeCertifications = ({
  movie = null,
  country = LOCALE.substring(0, 2)
}) =>
  API.get(`/age_certifications/`, {
    params: {
      movie: movie,
      country: country
    }
  });

/**
 *
 */
export const getCinemas = ({
  latitude = null,
  longitude = null,
  radius = 20000
}) =>
  API.get(`/cinemas/${LOCALE}`, {
    params: {
      latitude: latitude,
      longitude: longitude,
      radius: radius
    }
  });
