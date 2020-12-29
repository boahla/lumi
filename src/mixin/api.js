// import axios from 'axios';

export default{
  methods: {
    async insert(url, payload) {
      console.log('insert', url, payload);
      // let add = null;
      // Object.keys(payload).forEach((key) => {
      //   add += key;
      //   add += '=';
      //   add += payload[key];
      //   add += '&'
      // });
      // console.log(add);
      // await axios
      //   .get(`${this.$store.state.user.host}${url}`,
      //     { headers: {
      //       "Access-Control-Allow-Origin": "*",
      //     }
      //   })
      //   .then((res) => {
      //     console.log('then', res);
      //     this.$router.push('/');
      //     return res;
      //   })
      //   .catch((res) => {
      //     console.log('catch', res);
      //     return null;
      //   });
    },
    async bring(url, payload) {
      console.log('bring', url, payload);
    },
  }
};
