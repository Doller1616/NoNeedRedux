import { dependOnListener } from './index'
export const admissionForm: any = [
    {
        tag: "INPUTBOX",
        label: "Age",
        name : "age",
        value : 26,
        placeholder: "Enter Age",
        type: "number",
        refId: "ageRef",
        className: "",
        dependOnRefId: "dobRef",
        disabled: false,
        validate: {
            min: 25,
            max: 55,
            maxWords: 4,
            minWords: 1,
            required: true
        },
        onChange: (e: any) => {
            dependOnListener({refId:'dobRef',data:(e.target.value)*2})
        }

    },
    {
        tag: "INPUTBOX",
        label: "DATE OF BIRTH",
        name : "dob",
        value : '',
        placeholder: "Enter DOB",
        type: "number",
        refId: "dobRef",
        className: "",
        dependOnRefId: "ageRef",
        disabled: true,
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