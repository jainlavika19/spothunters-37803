/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { sampleSliceGetdata } from "../../redux/slices/sampleSlice";

export default function Tablewithsearch() {
  const dispatch = useDispatch();
  const sampledataresp = useSelector(
    (state) => state.sampleSliceData.value.data
  );
  console.log("sampledataresp", sampledataresp);

  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchdata = async () => {
    let resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setAPIData(resp.data);
    dispatch(sampleSliceGetdata(resp.data));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <>
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item, key) => (
              <Card key={key}>
                  <Card.Content>
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Description>{item.email}</Card.Description>
                  </Card.Content>
              </Card>
          ))
          : APIData.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>{item.email}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>

    {/* <a href='/sample'>Go to sibling page</a> */}
    </>
  );
}
