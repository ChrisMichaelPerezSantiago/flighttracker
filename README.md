# 🛫 FlightTracker

> Flight status around the world, data provided by [flightstats](https://www.flightstats.com/v2)

<a href="https://nodei.co/npm/flighttracker/"><img src="https://nodei.co/npm/flighttracker.png"></a>

# 📚 API Documentation

## `fn status({date: '', flightNumber: ''})`

```js
(async () => {
  const data = await status({ date: "22-Mar-2022", flightNumber: "B61904" });
})();
```

```json
{
  "sortTime": "2022-03-22T08:55:00.000Z",
  "flightId": 1086982430,
  "carrier": {
    "flightNumber": "1904",
    "fs": "B6",
    "name": "JetBlue Airways",
    "active": true,
    "category": "A",
    "iata": "B6",
    "icao": "JBU"
  },
  "codeshares": {
    "flights": [["Object"], ["Object"], ["Object"]],
    "displayString": "(EK) Emirates 6816, (HA) Hawaiian Airlines 2296, (QR) Qatar Airways 4148"
  },
  "departureAirport": {
    "fs": "SJU",
    "iata": "SJU",
    "icao": "TJSJ",
    "name": "Luis Munoz Marin International Airport",
    "city": "San Juan",
    "state": "",
    "country": "PR",
    "active": true,
    "classification": 2,
    "timeZoneRegionName": "America/Puerto_Rico",
    "gate": "3",
    "terminal": "A",
    "times": {
      "scheduledGate": ["Object"],
      "actualGate": ["Object"],
      "scheduledRunway": ["Object"],
      "actualRunway": ["Object"]
    },
    "date": "2022-03-22T04:55:00.000",
    "timezoneCode": "AST"
  },
  "arrivalAirport": {
    "fs": "JFK",
    "iata": "JFK",
    "icao": "KJFK",
    "name": "John F. Kennedy International Airport",
    "city": "New York",
    "state": "NY",
    "country": "US",
    "active": true,
    "classification": 1,
    "timeZoneRegionName": "America/New_York",
    "gate": "18",
    "terminal": "5",
    "baggage": "4",
    "times": {
      "scheduledGate": ["Object"],
      "actualGate": ["Object"],
      "scheduledRunway": ["Object"],
      "actualRunway": ["Object"]
    },
    "date": "2022-03-22T09:03:00.000",
    "timezoneCode": "EDT"
  },
  "divertedAirport": null,
  "operatedBy": null,
  "departureTimes": {
    "scheduledGate": {
      "time": "4:55",
      "ampm": "am",
      "time24": "04:55",
      "timezone": "AST"
    },
    "actualGate": {
      "time": "4:44",
      "ampm": "am",
      "time24": "04:44",
      "timezone": "AST"
    },
    "scheduledRunway": {
      "time": "5:05",
      "ampm": "am",
      "time24": "05:05",
      "timezone": "AST"
    },
    "actualRunway": {
      "time": "5:01",
      "ampm": "am",
      "time24": "05:01",
      "timezone": "AST"
    }
  },
  "arrivalTimes": {
    "scheduledGate": {
      "time": "9:03",
      "ampm": "am",
      "time24": "09:03",
      "timezone": "EDT"
    },
    "actualGate": {
      "time": "9:01",
      "ampm": "am",
      "time24": "09:01",
      "timezone": "EDT"
    },
    "scheduledRunway": {
      "time": "8:31",
      "ampm": "am",
      "time24": "08:31",
      "timezone": "EDT"
    },
    "actualRunway": {
      "time": "8:43",
      "ampm": "am",
      "time24": "08:43",
      "timezone": "EDT"
    }
  },
  "url": "/flight-details/B6/1904/2022/3/22/1086982430",
  "schedule": {
    "scheduledGateDeparture": "2022-03-22T04:55:00.000",
    "scheduledGateDepartureUTC": "2022-03-22T08:55:00.000Z",
    "scheduledRunwayDeparture": "2022-03-22T05:05:00.000",
    "scheduledRunwayDepartureUTC": "2022-03-22T09:05:00.000Z",
    "actualGateDeparture": "2022-03-22T04:44:00.000",
    "actualGateDepartureUTC": "2022-03-22T08:44:00.000Z",
    "actualRunwayDeparture": "2022-03-22T05:01:00.000",
    "actualRunwayDepartureUTC": "2022-03-22T09:01:00.000Z",
    "scheduledGateArrival": "2022-03-22T09:03:00.000",
    "scheduledGateArrivalUTC": "2022-03-22T13:03:00.000Z",
    "scheduledRunwayArrival": "2022-03-22T08:31:00.000",
    "scheduledRunwayArrivalUTC": "2022-03-22T12:31:00.000Z",
    "actualGateArrival": "2022-03-22T09:01:00.000",
    "actualGateArrivalUTC": "2022-03-22T13:01:00.000Z",
    "actualRunwayArrival": "2022-03-22T08:43:00.000",
    "actualRunwayArrivalUTC": "2022-03-22T12:43:00.000Z"
  },
  "status": {
    "statusCode": "L",
    "status": "Arrived",
    "color": "green",
    "statusDescription": "On time",
    "delay": {
      "departure": ["Object"],
      "arrival": ["Object"]
    },
    "delayStatus": {
      "wording": "On time",
      "minutes": 0
    },
    "delayed": false,
    "showEst": true,
    "diverted": false
  },
  "eventTimeline": [
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "13:17",
      "sortTime": "2022-03-22T13:17:58Z",
      "source": "Airline",
      "departureAirportTime": "9:17 am",
      "departureAirportTime24": "09:17",
      "arrivalAirportTime": "9:17 am",
      "arrivalAirportTime24": "09:17",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:50",
      "sortTime": "2022-03-22T12:50:22Z",
      "source": "Airline Direct",
      "departureAirportTime": "8:50 am",
      "departureAirportTime24": "08:50",
      "arrivalAirportTime": "8:50 am",
      "arrivalAirportTime24": "08:50",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:47",
      "sortTime": "2022-03-22T12:47:09Z",
      "source": "ASDI",
      "departureAirportTime": "8:47 am",
      "departureAirportTime24": "08:47",
      "arrivalAirportTime": "8:47 am",
      "arrivalAirportTime24": "08:47",
      "title": "Status Landed",
      "shortTitle": "Status Landed",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:44",
      "sortTime": "2022-03-22T12:44:35Z",
      "source": "ASDI",
      "departureAirportTime": "8:44 am",
      "departureAirportTime24": "08:44",
      "arrivalAirportTime": "8:44 am",
      "arrivalAirportTime24": "08:44",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:43",
      "sortTime": "2022-03-22T12:43:21Z",
      "source": "Airline Direct",
      "departureAirportTime": "8:43 am",
      "departureAirportTime24": "08:43",
      "arrivalAirportTime": "8:43 am",
      "arrivalAirportTime24": "08:43",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:35",
      "sortTime": "2022-03-22T12:35:30Z",
      "source": "ASDI",
      "departureAirportTime": "8:35 am",
      "departureAirportTime24": "08:35",
      "arrivalAirportTime": "8:35 am",
      "arrivalAirportTime24": "08:35",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:34",
      "sortTime": "2022-03-22T12:34:26Z",
      "source": "Airline Direct",
      "departureAirportTime": "8:34 am",
      "departureAirportTime24": "08:34",
      "arrivalAirportTime": "8:34 am",
      "arrivalAirportTime24": "08:34",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:33",
      "sortTime": "2022-03-22T12:33:27Z",
      "source": "ASDI",
      "departureAirportTime": "8:33 am",
      "departureAirportTime24": "08:33",
      "arrivalAirportTime": "8:33 am",
      "arrivalAirportTime24": "08:33",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:33",
      "sortTime": "2022-03-22T12:33:01Z",
      "source": "ASDI",
      "departureAirportTime": "8:33 am",
      "departureAirportTime24": "08:33",
      "arrivalAirportTime": "8:33 am",
      "arrivalAirportTime24": "08:33",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:30",
      "sortTime": "2022-03-22T12:30:20Z",
      "source": "Airline Direct",
      "departureAirportTime": "8:30 am",
      "departureAirportTime24": "08:30",
      "arrivalAirportTime": "8:30 am",
      "arrivalAirportTime24": "08:30",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:29",
      "sortTime": "2022-03-22T12:29:46Z",
      "source": "ASDI",
      "departureAirportTime": "8:29 am",
      "departureAirportTime24": "08:29",
      "arrivalAirportTime": "8:29 am",
      "arrivalAirportTime24": "08:29",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:29",
      "sortTime": "2022-03-22T12:29:05Z",
      "source": "ASDI",
      "departureAirportTime": "8:29 am",
      "departureAirportTime24": "08:29",
      "arrivalAirportTime": "8:29 am",
      "arrivalAirportTime24": "08:29",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:24",
      "sortTime": "2022-03-22T12:24:27Z",
      "source": "ASDI",
      "departureAirportTime": "8:24 am",
      "departureAirportTime24": "08:24",
      "arrivalAirportTime": "8:24 am",
      "arrivalAirportTime24": "08:24",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:24",
      "sortTime": "2022-03-22T12:24:19Z",
      "source": "Airline Direct",
      "departureAirportTime": "8:24 am",
      "departureAirportTime24": "08:24",
      "arrivalAirportTime": "8:24 am",
      "arrivalAirportTime24": "08:24",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:23",
      "sortTime": "2022-03-22T12:23:15Z",
      "source": "ASDI",
      "departureAirportTime": "8:23 am",
      "departureAirportTime24": "08:23",
      "arrivalAirportTime": "8:23 am",
      "arrivalAirportTime24": "08:23",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "12:17",
      "sortTime": "2022-03-22T12:17:06Z",
      "source": "ASDI",
      "departureAirportTime": "8:17 am",
      "departureAirportTime24": "08:17",
      "arrivalAirportTime": "8:17 am",
      "arrivalAirportTime24": "08:17",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "11:47",
      "sortTime": "2022-03-22T11:47:16Z",
      "source": "Airline Direct",
      "departureAirportTime": "7:47 am",
      "departureAirportTime24": "07:47",
      "arrivalAirportTime": "7:47 am",
      "arrivalAirportTime24": "07:47",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "11:19",
      "sortTime": "2022-03-22T11:19:06Z",
      "source": "ASDI",
      "departureAirportTime": "7:19 am",
      "departureAirportTime24": "07:19",
      "arrivalAirportTime": "7:19 am",
      "arrivalAirportTime24": "07:19",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "11:17",
      "sortTime": "2022-03-22T11:17:11Z",
      "source": "Airline Direct",
      "departureAirportTime": "7:17 am",
      "departureAirportTime24": "07:17",
      "arrivalAirportTime": "7:17 am",
      "arrivalAirportTime24": "07:17",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "10:44",
      "sortTime": "2022-03-22T10:44:55Z",
      "source": "Airline Direct",
      "departureAirportTime": "6:44 am",
      "departureAirportTime24": "06:44",
      "arrivalAirportTime": "6:44 am",
      "arrivalAirportTime24": "06:44",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "10:14",
      "sortTime": "2022-03-22T10:14:55Z",
      "source": "Airline Direct",
      "departureAirportTime": "6:14 am",
      "departureAirportTime24": "06:14",
      "arrivalAirportTime": "6:14 am",
      "arrivalAirportTime24": "06:14",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "09:44",
      "sortTime": "2022-03-22T09:44:46Z",
      "source": "Airline Direct",
      "departureAirportTime": "5:44 am",
      "departureAirportTime24": "05:44",
      "arrivalAirportTime": "5:44 am",
      "arrivalAirportTime24": "05:44",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "09:08",
      "sortTime": "2022-03-22T09:08:43Z",
      "source": "ASDI",
      "departureAirportTime": "5:08 am",
      "departureAirportTime24": "05:08",
      "arrivalAirportTime": "5:08 am",
      "arrivalAirportTime24": "05:08",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "09:03",
      "sortTime": "2022-03-22T09:03:09Z",
      "source": "ASDI",
      "departureAirportTime": "5:03 am",
      "departureAirportTime24": "05:03",
      "arrivalAirportTime": "5:03 am",
      "arrivalAirportTime24": "05:03",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "09:02",
      "sortTime": "2022-03-22T09:02:38Z",
      "source": "Airline Direct",
      "departureAirportTime": "5:02 am",
      "departureAirportTime24": "05:02",
      "arrivalAirportTime": "5:02 am",
      "arrivalAirportTime24": "05:02",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "09:00",
      "sortTime": "2022-03-22T09:00:52Z",
      "source": "Airline",
      "departureAirportTime": "5:00 am",
      "departureAirportTime24": "05:00",
      "arrivalAirportTime": "5:00 am",
      "arrivalAirportTime24": "05:00",
      "title": "Status Active",
      "shortTitle": "Status Active",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "06:56",
      "sortTime": "2022-03-22T06:56:26Z",
      "source": "Airline",
      "departureAirportTime": "2:56 am",
      "departureAirportTime24": "02:56",
      "arrivalAirportTime": "2:56 am",
      "arrivalAirportTime24": "02:56",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 22",
      "date2": "22 Mar",
      "utcTime": "01:17",
      "sortTime": "2022-03-22T01:17:11Z",
      "source": "Airline",
      "departureAirportTime": "9:17 pm",
      "departureAirportTime24": "21:17",
      "arrivalAirportTime": "9:17 pm",
      "arrivalAirportTime24": "21:17",
      "title": "Gate Adjustment",
      "shortTitle": "Gate Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 21",
      "date2": "21 Mar",
      "utcTime": "09:10",
      "sortTime": "2022-03-21T09:10:44Z",
      "source": "Airline",
      "departureAirportTime": "5:10 am",
      "departureAirportTime24": "05:10",
      "arrivalAirportTime": "5:10 am",
      "arrivalAirportTime24": "05:10",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 21",
      "date2": "21 Mar",
      "utcTime": "08:56",
      "sortTime": "2022-03-21T08:56:18Z",
      "source": "ASDI",
      "departureAirportTime": "4:56 am",
      "departureAirportTime24": "04:56",
      "arrivalAirportTime": "4:56 am",
      "arrivalAirportTime24": "04:56",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    },
    {
      "date1": "Mar 19",
      "date2": "19 Mar",
      "utcTime": "20:12",
      "sortTime": "2022-03-19T16:12:54-04:00",
      "departureAirportTime": "4:12 pm",
      "departureAirportTime24": "16:12",
      "arrivalAirportTime": "4:12 pm",
      "arrivalAirportTime24": "16:12",
      "title": "Record Created",
      "shortTitle": "Record Created",
      "events": []
    },
    {
      "date1": "Mar 19",
      "date2": "19 Mar",
      "utcTime": "20:12",
      "sortTime": "2022-03-19T20:12:54Z",
      "source": "Innovata",
      "departureAirportTime": "4:12 pm",
      "departureAirportTime24": "16:12",
      "arrivalAirportTime": "4:12 pm",
      "arrivalAirportTime24": "16:12",
      "title": "Time Adjustment",
      "shortTitle": "Time Adjust",
      "events": ["Array"]
    }
  ],
  "lineInfo": {
    "flightId": 1086982430,
    "departureAirport": {
      "fs": "SJU",
      "iata": "SJU",
      "icao": "TJSJ",
      "name": "Luis Munoz Marin International Airport",
      "city": "San Juan",
      "state": "",
      "country": "PR",
      "active": true,
      "classification": 2,
      "timeZoneRegionName": "America/Puerto_Rico",
      "gate": "3",
      "terminal": "A",
      "times": ["Object"],
      "date": "2022-03-22T04:55:00.000",
      "timezoneCode": "AST"
    },
    "arrivalAirport": {
      "fs": "JFK",
      "iata": "JFK",
      "icao": "KJFK",
      "name": "John F. Kennedy International Airport",
      "city": "New York",
      "state": "NY",
      "country": "US",
      "active": true,
      "classification": 1,
      "timeZoneRegionName": "America/New_York",
      "gate": "18",
      "terminal": "5",
      "baggage": "4",
      "times": ["Object"],
      "date": "2022-03-22T09:03:00.000",
      "timezoneCode": "EDT"
    },
    "divertedAirport": null,
    "status": {
      "statusCode": "L",
      "status": "Arrived",
      "color": "green",
      "statusDescription": "On time",
      "delay": ["Object"],
      "delayStatus": ["Object"],
      "delayed": false,
      "showEst": true,
      "diverted": false
    },
    "departureTimes": {
      "scheduledGate": ["Object"],
      "actualGate": ["Object"],
      "scheduledRunway": ["Object"],
      "actualRunway": ["Object"]
    },
    "arrivalTimes": {
      "scheduledGate": ["Object"],
      "actualGate": ["Object"],
      "scheduledRunway": ["Object"],
      "actualRunway": ["Object"]
    },
    "url": "/flight-details/B6/1904/2022/3/22/1086982430"
  },
  "additionalFlightInfo": {
    "equipment": {
      "tailNumber": "N996JL",
      "title": "Actual",
      "iata": "32B",
      "name": ""
    },
    "flightDuration": {
      "actual": "4h 17m",
      "scheduled": "4h 8m"
    }
  },
  "flightState": "currentDatePostFlight",
  "segments": [
    {
      "sortTime": "2022-03-22T08:55:00.000Z",
      "url": "/flight-details/B6/1904/2022/3/22/1086982430",
      "lineInfo": ["Object"],
      "flightId": 1086982430,
      "carrier": ["Object"],
      "year": 2022,
      "month": 3,
      "date": 22,
      "departureAirport": ["Object"],
      "arrivalAirport": ["Object"],
      "departureTimes": ["Object"],
      "arrivalTimes": ["Object"]
    }
  ]
}
```

## `fn airportConditions({airport: ''})`

```js
(async () => {
  const data = await airportConditions({ airport: "SJU" });
})();
```

```json
{
  "detailsHeader": {
    "code": "SJU",
    "name": "Luis Munoz Marin International Airport",
    "addressLine2": "San Juan, PR",
    "city": "San Juan",
    "countryCode": "PR",
    "currentDate": "22-Mar-2022",
    "currentTime": "10:47",
    "currentDateTime": "2022-03-22T10:47:07Z",
    "timeZoneRegionName": "America/Puerto_Rico",
    "currentDateMDY": "Mar-22-2022",
    "currentTimeAMPM": "10:47 AM",
    "timeZone": "AST",
    "latitude": 18.437403,
    "longitude": -66.004683
  },
  "delayIndex": {
    "observed": true,
    "score": 1.75,
    "status": "Low",
    "trend": "Increasing",
    "lastUpdated": "Last updated over an hour ago"
  },
  "currentWeather": {
    "tempF": 79,
    "tempC": 26,
    "wind": {
      "knots": 13,
      "mph": 15,
      "kph": 24
    },
    "direction": 70,
    "visibility": {
      "miles": 10,
      "km": 16
    },
    "hideCurrentWeatherConditionsCard": false,
    "sky": "Few clouds",
    "icon": "veryCloudy"
  },
  "forecastWeather": []
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [FlightTracker](https://github.com/ChrisMichaelPerezSantiago/flighttracker).
