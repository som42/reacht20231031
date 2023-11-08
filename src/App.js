import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

// 고객 번호를 표시해보자이
// use 머머머 애들은 if , for문 안에 넣지 말아라
function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [customerIdList, setCustomerIdList] = useState([]);

  useEffect(() => {
    // 고객 번호들 가져오기  ( 처음에만 실행되면 되니깐 두번재 파라미터에 아무것도 안넣음)
    axios
      .get("/api/main1/sub6")
      .then((respons) => setCustomerIdList(respons.data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => setCustomer(null))
      .finally(() => setIsLoading(false));
  }, [customerId]);
  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {/*option[value=$]{$}*10*/}
        {customerIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {isLoading && <Spinner />}

        {isLoading || (
          <>
            {customer === null ? (
              <Text>조회한 고객이 없습니다. 다른 번호를 선택해 주세요</Text>
            ) : (
              <Text>고객 이름 : {customer.customerName}</Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
