import {
  FILTERS_ACTION_FETCH,
  FILTERS_MUTATION_PROVIDERS,
  FILTERS_MUTATION_GENRES
} from "./types";
import * as justWatchApi from "@/api/just-watch";

const mapFilter = (data, keyId, keyNameShort, keyNameClear) =>
  data.map(e => {
    return {
      id: e[keyId],
      name: {
        short: e[keyNameShort],
        clear: e[keyNameClear]
      }
    };
  });

export default {
  [FILTERS_ACTION_FETCH]({ commit }) {
    Promise.all([justWatchApi.getProviders(), justWatchApi.getGenres()]).then(
      res => {
        commit(
          FILTERS_MUTATION_PROVIDERS,
          mapFilter(res[0].data, "id", "short_name", "clear_name")
        );
        commit(
          FILTERS_MUTATION_GENRES,
          mapFilter(res[0].data, "id", "short_name", "translation")
        );
      }
    );
  }
};
