<template>
  <div>
    <div>{{msg}}</div>
    <div v-if="isshowdiv" :title="msg2">{{msg2}}</div>
    <div v-for="(book,index) in books" :key="index">v-for index:{{index}}  {{book.name}}      {{book.pagecount}}</div>

    <div v-for="(book,index) in books" :key="index" v-if="book.pagecount==1">v-for v-if index:{{index}} name:{{book.name}}   pagecount:{{book.pagecount}}</div>

    <div v-for="(book,index) in books" :key="index" >
      v-for v-if object【{{index}}】
      <span v-for="(value,key,indexitem) in book" :key="indexitem">
        index:{{indexitem}} key:{{key}} value:{{value}}
      </span>
    </div>
  </div>
</template>
<script>
var moment = require('moment')

export default {
  name: 'Abort',
  data () {
    return {
      msg: 'Welcome to Abort',
      msg2: 'spanmsg' + moment().format(),
      isshowdiv: false,
      books: [
        {
          name: 'book1',
          pagecount: 1
        },
        {
          name: 'book2',
          pagecount: 2
        },
        {
          name: 'book3',
          pagecount: 3
        }
      ]
    }
  }
}
</script>
<style scoped>
  div{
    text-align: left;
  }
</style>
