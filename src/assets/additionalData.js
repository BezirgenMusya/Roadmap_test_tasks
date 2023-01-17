export const additionalData = {
  navigationsLink: [
    { toWhere: "/", title: "React Hook Form" },
    { toWhere: "/formik", title: "Formik" },
  ],

  questions: {
    firstQuestion: {
      title: "Do you fag?",
      answers:[
        {type: "checkbox", registerName: "firstQuestion_answer_YES", label:"YES"},
        {type: "checkbox", registerName: "firstQuestion_answer_NO", label:"NO"},
        {type: "checkbox", registerName: "firstQuestion_answer_Sometimes", label:"Sometimes"},
        {type: "checkbox", registerName: "firstQuestion_answer_IfItNessesary", label:"If it nessesary"},
        {type: "checkbox", registerName: "firstQuestion_answer_OnlyForMyFriends", label:"Only for my friends"},
      ]
    },
    secondQuestion: {
      title: "Are you shure?",
      answers:[
        {type: "checkbox", registerName: "secondQuestion_answer_YES", label:"YES"},
        {type: "checkbox", registerName: "secondQuestion_answer_NO", label:"NO"},
        {type: "checkbox", registerName: "secondQuestion_answer_MaybeYES", label:"Maybe YES"},
        {type: "checkbox", registerName: "secondQuestion_answer_MaybeNO", label:"Maybe NO"},
        {type: "checkbox", registerName: "secondQuestion_answer_Ofcourse", label:"Ofcourse"},
      ]

    }
  }
};
