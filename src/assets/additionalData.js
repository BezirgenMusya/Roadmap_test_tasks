export const additionalData = {
  navigationsLink: [
    { toWhere: "/", title: "React Hook Form" },
    { toWhere: "/formik", title: "Formik" },
  ],

  questions: {
    firstQuestion: {
      title: "Do you fag?",
      answers:[
        {defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer_YES", label:"YES"},
        {defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer_NO", label:"NO"},
        {defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer_Sometimes", label:"Sometimes"},
        {defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer_IfItNessesary", label:"If it nessesary"},
        {defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer_OnlyForMyFriends", label:"Only for my friends"},
      ]
    },
    secondQuestion: {
      title: "Are you shure?",
      answers:[
        {defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label:"YES"},
        {defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label:"NO"},
        {defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label:"Maybe YES"},
        {defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label:"Maybe NO"},
        {defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label:"Ofcourse"},
      ]

    }
  }
};
