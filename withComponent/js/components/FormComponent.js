export default {
    template: '#search-form',
    props: ['value'],   // property 설정
    data() {
        return{
            inputValue: this.value   // 설정으로 받은 값을 내부값으로 옮긴다
        }
    },
    methods: {
        onSubmit() {
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup() {
            if (!this.inputValue.length) this.onReset()
        },
        onReset() {
            this.inputValue= ''
            this.$emit('@reset')
        }
    }
}