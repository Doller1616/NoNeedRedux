export const admissionForm: any = [
    {
        tag: "INPUTBOX",
        label: "Age",
        name : "age",
        placeholder: "Enter Age",
        type: "number",
        refId: "ageRef",
        className: "",
        dependOnRefId: "dobRef",
        disabled: false,
        validate: {
            min: 25,
            max: 55,
            maxWords: 5,
            minWords: 2,
            required: true
        },
        onChange: (e: any) => {}

    },
    {
        tag: "INPUTBOX",
        label: "DATE OF BIRTH",
        name : "dob",
        placeholder: "Enter DOB",
        type: "number",
        refId: "dobRef",
        className: "",
        dependOnRefId: "ageRef",
        disabled: false,
        validate: {
            min: 20,
            max: 50,
            maxWords: 5,
            minWords: 2,
            required: true
        },
        onChange: (e: any) => {}

    }
]