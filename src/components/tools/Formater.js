import { NATIONAL, ENTERPRISE, SPECIAL, COMMON } from "../../types";

export const FormatStandard = value => {
  switch (value) {
    case NATIONAL:
      return "国标";
    case ENTERPRISE:
      return "企标";
    default:
      return "N/A";
  }
};

export const FormatStudy = value => {
  switch (value) {
    case SPECIAL:
      return "专科";
    case COMMON:
      return "通用";
    default:
      return "N/A";
  }
};
