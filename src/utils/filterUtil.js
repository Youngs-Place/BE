/**
 * 필터링 함수
 * @param {Array} data - 필터링할 데이터 배열
 * @param {Object} filters - 필터 조건 객체
 * @returns {Array} - 필터링된 데이터 배열
 */
const applyFilters = (data, filters) => {
    return data.filter(item => {
      // 필터링 조건 적용
      const isCityMatch = filters.city ? item.city === filters.city : true;
      const isStatusMatch = filters.status ? item.status === filters.status : true;
      const isTargetMatch = filters.target ? item.target === filters.target : true;
  
      return isCityMatch && isStatusMatch && isTargetMatch;
    });
  };
  
  module.exports = {
    applyFilters,
  };
  