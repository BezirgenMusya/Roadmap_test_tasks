export const additionalData = {
  navigationsLink: [
    { toWhere: "/", title: "React Hook Form" },
    { toWhere: "/formik", title: "Formik" },
  ],

  questions: [
    {
      title: "Do you fag?",
      answers: [
        { defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer", label: "YES" },
        { defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer", label: "NO" },
        { defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer", label: "Sometimes" },
        { defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer", label: "If it nessesary" },
        { defaultValue: false, type: "checkbox", registerName: "firstQuestion_answer", label: "Only for my friends" },
      ]
    },
    {
      title: "Are you sure?",
      answers: [
        { defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label: "YES" },
        { defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label: "NO" },
        { defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label: "Maybe YES" },
        { defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label: "Maybe NO" },
        { defaultValue: "", type: "radio", registerName: "secondQuestion_answer", label: "Ofcourse" },
      ]

    }
  ]


};
