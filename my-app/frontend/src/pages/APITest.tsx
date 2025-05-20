import { Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import classes from "../styling/Global.module.css";
import React from 'react'
import RecipeFetcher from '../components/RecipeFetcher';

import { useState } from 'react';


export default function APITest() {
  const navigate = useNavigate();
    const [apiResponse, setApiResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = React.useState<string | null>(null);

   const callApi = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch("http://127.0.0.1:8000/api/hello/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const response2 = await fetch("http://127.0.0.1:8000/api/time/");
    if (!response2.ok) {
      throw new Error(`HTTP error! status: ${response2.status}`);
    }
    const data2 = await response2.json();

    const jokeResponse = await fetch("https://icanhazdadjoke.com", {headers: {Accept: "application/json"}});
    if(!jokeResponse.ok) {
        throw new Error(`HTTP error! status: ${jokeResponse.status}`);
    }
    const jokeData = await jokeResponse.json();


    setApiResponse(`${data.message} | ${data2["current-time"]} | ${jokeData.joke}`);  // combine both here

  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong");
    }
  }
  setLoading(false);
};

  return (
    <>
     <Button
          variant="subtle"
          onClick={() => navigate(-1)} // -1 to go back to the previous page
          className={classes.topbutton}
        >
          Back
        </Button>
   <Button onClick={callApi} disabled={loading}>
   {loading ? 'Loading...' : 'Click to Call API'}</Button>
   {apiResponse && <p>API Response: {apiResponse}</p>}
   {error && <p>Error: {error}</p>}
   <RecipeFetcher/>
    </>
  );
}
