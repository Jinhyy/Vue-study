import SearchModel from "../models/SearchModel.js"
import KeywordModel from "../models/KeywordModel.js"
import HistoryModel from "../models/HistoryModel.js"

new Vue ({
    el: '#app',// vue 인스턴스가 어느부분에 마운팅 될것인지 결정
    data: {
        query: '',   // 입력 데이터를 받아 저장
        searchResult: [],   // 검색결과 데이터를 저장
        tabs: ['추천 검색어','최근 검색어'],
        selectedTab: '',
        keywords: [],
        historys: [],
        submitted: false
    },

    created(){  // vue 인스턴스가 생성될 때 초기화해주는 예약 메소드.
        this.selectedTab=this.tabs[0]
        this.fetchHistorys()
        this.fetchKeywords()
    },

    methods: {
        onSubmit(e) {
            this.search(this.query)
        },
        onReset(){
            this.query=''
            this.submitted=false
            this.searchResult=[]
        },
        onResetClicked(e) {
            this.onReset()
        },
        onKeyup(e) {
            if(this.query.length===0) this.onReset()
        },
        search(query) {
            SearchModel.list().then(data => {
                this.submitted=true
                this.searchResult = data
                HistoryModel.add(query)
                this.fetchHistorys()
            })
        },
        onClickTab(tab) {
            this.selectedTab=tab
        },
        fetchKeywords(){
            KeywordModel.list().then(data=> {
                this.keywords = data
            })
        },
        onClickKeyword(keyword){
            this.query=keyword
            this.search(this.query)
        },

        fetchHistorys(){
            HistoryModel.list().then(data =>{
                this.historys=data
            })
        },

        onClickHistory(keyword){
            this.query=keyword
            this.search(this.query)
        },

        onClickRemoveHistory(keyword){
            HistoryModel.remove(keyword)
            this.fetchHistorys()
        }
    }   
})