import React from "react";

const VeicleStatus = ({
  status,
}: {
  status: "available" | "reserved" | "in_use";
}) => {
  const renderStauts = () => {
    switch (status) {
      case "available":
        return <p>이용 가능한 차량입니다.</p>;
      case "reserved":
        return <p> 예약 중인 차량입니다.</p>;
      case "in_use":
        return <p>운행 중인 차량입니다.</p>;
      default:
        return <p>상태 정보가 없습니다.</p>;
    }
  };

  return <div>{renderStauts()}</div>;
};

export default VeicleStatus;
