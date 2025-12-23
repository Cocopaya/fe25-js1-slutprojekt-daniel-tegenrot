function getApi() {
  const BAERER_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTY1MDQ4NzI5NDkyNzY0NTBmMWQzZDY2NmE1MmRlMiIsIm5iZiI6MTc2NTc5NTY5OS40NDk5OTk4LCJzdWIiOiI2OTNmZTc3MzI2NDUzOTRiOWU3ODEzZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Mjhc2KOOWZ2_oD98DV-d-QR1uJkpLyhA8RptTZ5oKhM";

  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BAERER_KEY}`,
    },
  };
}

export default getApi;
