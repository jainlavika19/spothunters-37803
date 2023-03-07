import React, { useState } from "react"
import styled from "styled-components"
import { Input, Table } from "antd"
import Svg from '../../assets/Images/svg/index.js';

const FlexBox = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid palevioletred;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    margin: 20px;
  }
`

export default function AntdTablewithsearch() {
  const [searchedText, setSearchedText] = useState("")

  return (
    <>
      <img src={Svg?.logo} className="logo" />
      <FlexBox>
        <Input.Search
          placeholder="Search Here..."
          onSearch={value => {
            console.log("inside on search", value)
            setSearchedText(value)
          }}
          onChange={e => {
            console.log("inside on change", e?.target?.value)
            setSearchedText(e?.target?.value)
          }}
        />
        <Table
          dataSource={[
            {
              key: "1",
              name: "Mike",
              age: 32,
              address: "10 Downing Street"
            },
            {
              key: "2",
              name: "John",
              age: 42,
              address: "10 Downing Street"
            },
            {
              key: "3",
              name: "Lavika",
              age: 52,
              address: "10788 Downing Street"
            },
            {
              key: "4",
              name: "Ram",
              age: 10,
              address: "112-M Street"
            },
            {
              key: "5",
              name: "Rahul",
              age: 88,
              address: "Delhi"
            },
            {
              key: "6",
              name: "Anmol",
              age: 9,
              address: "10 Begumbagh"
            },
            {
              key: "7",
              name: "XXYY",
              age: 46,
              address: "10456 Downing Street"
            },
            {
              key: "8",
              name: "Parul",
              age: 22,
              address: "Tamil Nadu"
            },
            {
              key: "9",
              name: "Ashu",
              age: 30,
              address: "Chennai"
            },
            {
              key: "10",
              name: "Avni",
              age: 29,
              address: "121 PL Sharma Road"
            }
          ]}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.name)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.age)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.address)
                    .toLowerCase()
                    .includes(value.toLowerCase())
                )
              }
            },
            {
              title: "Age",
              dataIndex: "age"
            },
            {
              title: "Address",
              dataIndex: "address"
            }
          ]}
          pagination={{
            // pageSizeOptions: ["5", "10", "15", "15"],
            pageSize: 5,
            // showSizeChanger: true,
            defaultPageSize: 5
          }}
        />
      </FlexBox>
    </>
  )
}
