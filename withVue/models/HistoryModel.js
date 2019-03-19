/*
  검색기록에 대한 데이터를 다루는 모델.
 */
export default {
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  list() {  // Promise 패턴으로 비동기적으로 구현.
    return Promise.resolve(this.data)
  },
  
  add(keyword = '') { // 검색기록이 있으면 삭제 후 재설정, 없으면 추가하는 메소드.
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) { // 검색기록 삭제.
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}