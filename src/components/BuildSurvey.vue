<template>
  <div class="main">
    <div class="box-border">
      <p class="title-text title-text-dark">
        Welcome to Survey Squirrel. Let's build a survey!
      </p>
    </div>
    <div class="box-question">
      <div v-if="questions.length === 0">
        <p class="question-prompt">
          What's your question?
        </p>
        <input v-model="currQuestion" class="ask-question-input" type="text" placeholder="Type question here."> <button class="button-light" @click="saveQuestion" :disabled="currQuestion === ''"> Save Question</button>
      </div>
      <div v-for="(question, index) in questions" v-bind:key="index">
        <p>
          Question 1
        </p>
        <p class="question-prompt question-asked">
          {{ question.question }}
        </p>
        <div>
          <div class="answers-container">
            <p>
              Answers
            </p>
            <p>
              <input id="answer-input" v-model="currAnswer" placeholder="Type answer here" type="text"><button class="button-light" @click="addAnswer(index)"> Add Another Answer</button>
            </p>
            <p v-for="(answer, index) in question.answers" v-bind:key="index">
              {{ answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="box-border clear-border right">
      <p>
        <button class="button-light">Add Question</button> <button @click="goNext">Done</button>
      </p>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'SucessSurvey',
  data () {
    return {
      showAddQuestion: true,
      currQuestion: '',
      currAnswer: '',
      questions: []
    }
  },
  methods: {
    saveQuestion: function () {
      this.questions.push({
        question: this.currQuestion,
        answers: []
      })
    },
    addAnswer: function (index) {
      this.questions[index].answers.unshift(this.currAnswer)
      this.currAnswer = ''
    },
    goNext: function () {
      localStorage.setItem('surveyQuestions', JSON.stringify(this.questions))
      router.push('/review')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question-asked {
  font-weight: 300;
  width: 100%;
  border: 1px solid #AAA;
  padding: 10px;
  border-radius: 4px;
}
</style>
