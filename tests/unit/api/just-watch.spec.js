import * as justWatchApi from "@/api/just-watch";

describe("getProviders", () => {
  it("Successfully call providers API", () => {
    return justWatchApi
      .getProviders()
      .then(response => expect(response.status).toBe(200));
  });
});

describe("getGenres", () => {
  it("Successfully call genres API", () => {
    return justWatchApi
      .getGenres()
      .then(response => expect(response.status).toBe(200));
  });
});
