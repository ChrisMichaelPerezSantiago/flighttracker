const {
  cheerio: { load },
} = require("./common");
const config = require("./config");
const request = require("./request");

const status = async ({ date, flightNumber }) => {
  if (!date) throw new Error("Provide flight date");
  if (!flightNumber) throw new Error("Provide flight number");

  const airlineInitials = flightNumber.slice(0, 2).toUpperCase();
  const flightN = flightNumber.slice(2);

  const d = new Date(date).getDate();
  const m = new Date(date).getMonth() + 1;
  const y = new Date(date).getFullYear();

  const options = {
    url: `${config.URL}/v2/flight-tracker/${airlineInitials}/${flightN}?year=${y}&month=${m}&date=${d}`,
    method: "get",
  };

  const response = await request(options);
  const $ = load(response);

  const flightId = parseInt(
    $.html()
      .match(/href="(.*?)"/g)
      .find((text) => text.includes("flightId"))
      .split("flightId=")[1]
      .match(/\d+/g)[0],
    10
  );

  const details = await getFlightDetails({
    airlineInitials,
    flightN,
    flightId,
    y,
    m,
    d,
  });

  return details;
};

const getFlightDetails = async ({
  airlineInitials,
  flightN,
  flightId,
  y,
  m,
  d,
}) => {
  const options = {
    url: `${config.URL}/v2/api/extendedDetails/${airlineInitials}/${flightN}/${y}/${m}/${d}/${flightId}?rqid=3ydg9jnn2yd`,
    method: "get",
  };

  const response = await request(options);

  return response;
};

const airportConditions = async ({ airport }) => {
  if (!airport) throw new Error("Provide an airport");

  const options = {
    url: `${
      config.URL
    }/v2/api/airport/${airport.toUpperCase()}?rqid=d8y9c5wbjsk`,
    method: "get",
  };

  const response = await request(options);

  return response;
};

module.exports = {
  status,
  airportConditions,
};
