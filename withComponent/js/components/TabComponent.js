export default {
    template: '#tabs',
    props: ['tabs','selected-tab'],
    methods: {
        onClickTab(tab){
            this.$emit('@change',tab)
        }
    }
}