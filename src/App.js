import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  //직원 번호를 선택 하면 직원의 이름이 출력
  // /api/main1/sub5?id=5
  // spring boot의 메소드 작성하기,
  const [employeesId, setEmployeesId] = useState(0);
  const [employees, setEmployees] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [employeesIdList, setEmployeesIdList] = useState([]);

  useEffect(() => {
    axios.get("/api/main1/sub7").then((r) => setEmployeesIdList(r.data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeesId)
      .then((response) => response.data)
      .then((data) => setEmployees(data))
      .catch((error) => setEmployees(null))
      .finally(() => setIsLoading(false));
  }, [employeesId]);
  return (
    <div>
      <Select
        placeholder="직원 번호를 선택하세요🎈"
        onChange={(e) => setEmployeesId(e.target.value)}
        background="blue.50"
      >
        {/*option[value=$]{$}*/}
        {employeesIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {isLoading && <Spinner />}

        {isLoading || (
          <>
            {employees === null ? (
              <Text>조회한 고객이 없습니다. 다른 번호를 선택해 주세요</Text>
            ) : (
              <Text background="#ffd6d1" style={{ color: "white" }}>
                👉 직원 이름 : {employees.lastName}
                {employees.firstName}❤️
                <hr />
                👉 직원 생일 : {employees.birthDate}🎈
                <hr />
                👉 직원 휴대폰 번호 : {employees.photo}🩵
                <hr />
                👉 직원 주소 : {employees.notes}💜
              </Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
