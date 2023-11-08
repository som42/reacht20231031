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

  useEffect(() => {
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
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        {isLoading && <Spinner />}

        {isLoading || (
          <>
            {employees === null ? (
              <Text>조회한 고객이 없습니다. 다른 번호를 선택해 주세요</Text>
            ) : (
              <Text>
                ❤️고객 이름 : {employees.lastName}😊
                {employees.firstName}❤️
              </Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
