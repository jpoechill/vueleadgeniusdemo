<template>
  <div class="main">
    <div class="box-border">
      <p class="title-text title-text-dark">
        Review Survey
      </p>
    </div>
    <div class="box-question">
      <div v-if="!questions[0]">
        There are currently no questions in this survey! Would you like to go back and try again?
      </div>
      <div v-else v-for="question in questions" class="full-width">
        <p>
          {{ question.question }}
        </p>
        <p>
          <div class="dropdown">
            <button class="dropbtn" @click="btnActive = !btnActive">
              {{ currAnswer }} 
              <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content" v-bind:class="{ active: btnActive }">
              <a @click="clickDropdown(answer)" v-for="answer in question.answers.reverse()" href="#">{{ answer }}</a>
            </div>
          </div> 
        </p>
      </div>
    </div>
    <div class="box-border clear-border right">
      <p>
        <button class="button-light">Add Question</button> <button @click="submitSurvey">Done</button>
      </p>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'ReviewSurvey',
  data () {
    return {
      currAnswer: 'No answer',
      btnActive: false,
      questions: []
    }
  },
  created () {
    let questions = JSON.parse(localStorage.getItem('surveyQuestions'))

    // initialize answers
    this.currAnswer = questions[0].answers[questions[0].answers.length-1]
    this.questions = questions
  },
  methods: {
    clickDropdown: function (currAnswer) {
      this.currAnswer = currAnswer
      this.btnActive = false
    },
    submitSurvey: function () {
      router.push('/success')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The dropdown container */
.dropdown {
  float: left;
  text-align: left;
  overflow: hidden;
  width: 100%;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px; 
  border: 1px solid #AAA;
  width: 100%;
  text-align: left;
  outline: none;
  color: #333;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #FFF;
  min-width: 600px;
  width: 500px;
  float: right;
  margin-top: -42;
  margin-left: 41px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  border: 1px solid #AAA;
  color: #555;
  border-radius: 0px;
  margin-top: -1px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.active {
  display: block;
}

svg {
  float: right;
}
</style>
