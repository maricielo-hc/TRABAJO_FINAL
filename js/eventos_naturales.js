const eventosNaturales = [
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:28",
    "lat": -12.84828,
    "lon": -69.90966
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:28",
    "lat": -12.83463,
    "lon": -69.91208
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:30",
    "lat": -11.13817,
    "lon": -69.40676
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:30",
    "lat": -11.13322,
    "lon": -69.38591
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:30",
    "lat": -11.12319,
    "lon": -69.41612
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:32",
    "lat": -8.25037,
    "lon": -74.96336
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:32",
    "lat": -8.15829,
    "lon": -75.37878
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:32",
    "lat": -2.00724,
    "lon": -78.34454
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:34",
    "lat": -0.08559,
    "lon": -77.65592
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "02:34",
    "lat": -0.07626,
    "lon": -77.65765
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "08:13",
    "lat": -0.07764,
    "lon": -77.65894
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "08:13",
    "lat": -0.07936,
    "lon": -77.64778
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "08:13",
    "lat": -1.99799,
    "lon": -78.34381
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "08:13",
    "lat": -1.99942,
    "lon": -78.33424
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "13:18",
    "lat": -16.70227,
    "lon": -71.82067
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "13:18",
    "lat": -16.70698,
    "lon": -71.79449
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "13:18",
    "lat": -16.6969,
    "lon": -71.79836
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "14:52",
    "lat": -0.35035,
    "lon": -78.4448
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "14:52",
    "lat": -0.36332,
    "lon": -78.44701
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "14:54",
    "lat": -5.09843,
    "lon": -80.16727
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-28",
    "hora": "20:29",
    "lat": -11.533,
    "lon": -75.85983
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-29",
    "hora": "01:32",
    "lat": -11.36499,
    "lon": -68.40347
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-29",
    "hora": "01:32",
    "lat": -11.10855,
    "lon": -69.05087
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-29",
    "hora": "13:57",
    "lat": -11.92768,
    "lon": -75.41205
  },
  {
    "tipo": "Incendio",
    "fecha": "2025-09-29",
    "hora": "13:57",
    "lat": -13.48512,
    "lon": -74.13
  },
  {
    "tipo": "Sismo",
    "fecha": "2025-09-26T17:25:02.343Z",
    "lugar": "82 km E of Macas, Ecuador",
    "magnitud": "4.2",
    "lat": -2.3936,
    "lon": -77.3723
  },
  {
    "tipo": "Sismo",
    "fecha": "2025-09-26T02:39:08.224Z",
    "lugar": "2 km WNW of Quilcata, Peru",
    "magnitud": "4.9",
    "lat": -15.2392,
    "lon": -73.4762
  },
  {
    "tipo": "Sismo",
    "fecha": "2025-09-25T23:40:14.786Z",
    "lugar": "9 km ENE of Puyo, Ecuador",
    "magnitud": "4.3",
    "lat": -1.4539,
    "lon": -77.9198
  },
  {
    "tipo": "Sismo",
    "fecha": "2025-09-23T21:05:27.266Z",
    "lugar": "75 km SSW of San Juan, Peru",
    "magnitud": "4.4",
    "lat": -15.9934,
    "lon": -75.4479
  },
  {
    "tipo": "Sismo",
    "fecha": "2025-09-23T17:39:19.418Z",
    "lugar": "44 km SSW of San Juan, Peru",
    "magnitud": "5.5",
    "lat": -15.7448,
    "lon": -75.2904
  },
  {
    "tipo": "Sismo",
    "fecha": "2025-09-22T18:46:41.728Z",
    "lugar": "33 km SSE of San Juan, Peru",
    "magnitud": "5.1",
    "lat": -15.6449,
    "lon": -75.0318
  }
];