<template>
  <div>
    <header>
      <span class="title-text">
        <router-link :to="{ path:'/' }">Survey Squirrel</router-link>
      </span>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
// import store from './store'

export default {
  name: 'App'
}
</script>

<style>
body, html {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  text-align: center;
  background-color: #0F747F;
  padding: 30px 0px;
}

main {
  margin-top: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a {
  color: #FFF;
  text-decoration: none;
}

.box-border {
  background-color: #FFF;
  border: 1px solid #CCC;
  width: 800px;
}

.title-text {
  font-size: 30px;
  color: #FFF;
  padding: 0px 20px;
}

.title-text-dark {
  color: #555;
}

input[type=text] {
  font-size: 14px;
  padding: 10px;
  width: 70%;
  border-radius: 3px;
  border: 1px solid #CCC;
}

button {
  background-color: #1799A7;
  border: none;
  color: white;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 0px 4px;
  border-radius: 2px;
  border: 1px solid #888;
}

.button-light {
  background-color: #F2F2F2;
  color: #333;
  font-weight: bolder;
  font-size: 10px;
  border: 1px solid #CCC;
  border-radius: 2px;
  margin: 10px;
}

.main {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.box-question {
  width: 80%;
  min-height: 260px;
  text-align: left;
  margin: 20px;
}

.question-prompt {
  color: #777;
  font-weight: bold;
}

.question-prompt input {
  width: 100%;
}

button {
  display: inline-block;
}

.right {
  text-align: right;
}

.clear-border {
  border: 0px;
}

#answer-input {
  width: 60%;
}

.answers-container {
  margin-left: 60px;
}

.ask-question-input {
  width: 66%;
}

.full-width {
  width: 100%;
}
</style>
