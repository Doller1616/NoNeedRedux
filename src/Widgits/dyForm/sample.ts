export const admissionForm: any = [
    {
        tag: "INPUTBOX",
        label: "Age",
        placeholder: "Enter Age",
        type: "number",
        refId: "ageRef",
        className: "",
        dependOnRefId: "dobRef",
        disabled: false,
        validate: {
            min: 25,
            max: 100,
            maxWords: 5,
            minWords: 2,
            required: true
        },
        onChange: (e: any) => { 
            console.log("Age",e);  
        }

    },
    {
        tag: "INPUTBOX",
        label: "DATE OF BIRTH",
        placeholder: "Enter DOB",
        type: "number",
        refId: "dobRef",
        className: "",
        dependOnRefId: "ageRef",
        disabled: false,
        validate: {
            min: 25,
            max: 100,
            maxWords: 5,
            minWords: 2,
            required: true
        },
        onChange: (e: any) => { 
            console.log("DOB",e);  
        }

    }
]