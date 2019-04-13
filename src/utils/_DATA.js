let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'data:image/png;base64,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',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3qmREi6Bag9BxxTvSCdXKqL8G2mBNjSFMi1nBZ1r92jNniSwnw',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://i.imgur.com/NX7TcNu.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  console.log(answer)
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}